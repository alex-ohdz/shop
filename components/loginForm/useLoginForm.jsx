"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useLoginForm = (initialUserState, isLogin) => {
  const [user, setUser] = useState(initialUserState);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  console.log("isLogin:", isLogin);

  // useEffect(() => {
  //   if (!open) {
  //     setUser(initialUserState);
  //     setTermsAccepted(false);
  //   }
  // }, [open]);

  // const isFieldEmpty = (field) => field === undefined || field.trim() === "";
  const isFieldEmpty = (field) => {
    const isEmpty = field === undefined || field.trim() === "";
    console.log(`Field is empty: ${isEmpty}`);
    return isEmpty;
  };
  

  const isRegisterFormComplete =
    !isFieldEmpty(user.firstName) &&
    !isFieldEmpty(user.lastName) &&
    !isFieldEmpty(user.email) &&
    !isFieldEmpty(user.password) &&
    !isFieldEmpty(user.phoneNumber) &&
    termsAccepted;

  const isLoginFormComplete =
    !isFieldEmpty(user.email) && !isFieldEmpty(user.password);

  const isFormComplete = isLogin ? isLoginFormComplete : isRegisterFormComplete;

  useEffect(() => {
  console.log(`Is form complete: ${isFormComplete}`);
}, [user, termsAccepted]);

  const handleChange = (e) => {
    console.log("Field changed:", e.target.name, "Value:", e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      console.error("All fields are necessary.");
      return;
    }
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // name: `${user.firstName} ${user.lastName}`,
          name: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          phoneNumber: user.phoneNumber,
        }),
      });
      if (!response.ok) {
        // Manejar la respuesta no exitosa
        const errorData = await response.json();
        console.error("User registration failed:", errorData.message);
        // Otras acciones basadas en el error
        return;
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      // Otras acciones en caso de éxito
    } catch (error) {
      console.error("Error during registration:", error);
      // Manejar errores de la solicitud fetch
    }
  };
  //PARA el login
  const handleLogin = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      // Manejar error de inicio de sesión
    } else {
      console.log("Login successful");
      router.push("/rutaPostLogin"); // Redirigir a la página deseada después del inicio de sesión
    }
  };
  
  const handleSubmit = isLogin ? handleLogin : handleRegister;
  console.log("hadle:",handleSubmit);

  return {
    user,
    setUser,
    termsAccepted,
    setTermsAccepted,
    showPassword,
    isFormComplete,
    handleChange,
    handleClickShowPassword,
    handleSubmit,
  };
};

export default useLoginForm;
