// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from 'bcryptjs';

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,

//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials;
//         try {
//           await connectMongoDB();
//           const user = await User.findOne({ email });
//           if (!user || !(await bcrypt.compare(password, user.password))) {
//             return null;
//           }
//           return user;
//         } catch (error) {
//           console.log("Error in authorize:", error);
//           return null;
//         }
//       },
//     })
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/",
//   },
//   callbacks: {
//     async signIn({ user, account }) {
//       await connectMongoDB();
//       if (account.provider === "google") {
//         let userExists = await User.findOne({ email: user.email });
//         if (!userExists) {
//           userExists = await User.create({
//             email: user.email,
//             name: user.name,
//             provider: "google",
//           });
//         }
//         return !!userExists;
//       }
//       return true;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          console.log("Connecting to MongoDB");
          await connectMongoDB();
          console.log("Looking for user:", email);
          // const user = await User.findOne({ email });
          const user = await User.findOne({ email }).select('+password');


          if (!user) {
            console.log("User not found");
            return null;
          }
          console.log("User found. User password from DB:", user.password);
          console.log("Password provided by user:", password);

          console.log("Comparing passwords");
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            console.log("Passwords do not match");
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
