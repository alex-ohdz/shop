import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
// import { useRouter } from 'next/navigation';

const useLoginForm = (initialUserState, open, onClose,isLogin) => {
  const [user, setUser] = useState(initialUserState);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!open) {
      setUser(initialUserState);
      setTermsAccepted(false);
    }
  }, [open]);

  const isFieldEmpty = (field) => field === undefined || field.trim() === "";

  const isFormComplete =
    !isFieldEmpty(user.firstName) &&
    !isFieldEmpty(user.lastName) &&
    !isFieldEmpty(user.email) &&
    !isFieldEmpty(user.password) &&
    !isFieldEmpty(user.phoneNumber) &&
    termsAccepted;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async () => {
    if (isFieldEmpty(user.email) || isFieldEmpty(user.password)) {
      console.error("Email and password are required.");
      return;
    }
  
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
   
        console.log('Login successful', data);
        onClose(); 
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  const handleRegister = async () => {
    if (!isFormComplete) {
      console.error("All fields are necessary.");
      return;
    }
    try {
      const resUserExists = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

      const dataUserExists = await resUserExists.json();

      if (dataUserExists.user) {
        console.error("User already exists.");
        return;
      }

      const resRegister = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          password: user.password,
        }),
      });

      if (resRegister.ok) {
        onClose();
      } else {
        console.error("User registration failed.");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  };

  const handleSubmit = isLogin ? handleLogin : handleRegister;

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
