import { signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

const useLoginForm = (initialUserState, open, onClose) => {
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
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);


  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Asegurarse de que todos los campos necesarios estén presentes
    if (isFieldEmpty(user.firstName) || isFieldEmpty(user.lastName) || isFieldEmpty(user.email) || isFieldEmpty(user.password) || isFieldEmpty(user.phoneNumber) || !termsAccepted) {
      console.error("All fields are necessary.");
      return;
    }
  
    try {
      // Verificar si el usuario ya existe
      const resUserExists = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email }),
      });
  
      const dataUserExists = await resUserExists.json();
  
      if (dataUserExists.user) {
        console.error("User already exists.");
        return;
      }
  
      const resRegister = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
