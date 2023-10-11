import { useState, useEffect } from 'react';

const useLoginForm = (initialUserState, open, onClose) => {
  const [user, setUser] = useState(initialUserState);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!open) {
      setUser(initialUserState);
      setTermsAccepted(false);
      setPasswordMismatch(false);
    }
  }, [open]);

  const isFieldEmpty = (field) => field === undefined || field.trim() === "";

  const isFormComplete =
    !isFieldEmpty(user.firstName) &&
    !isFieldEmpty(user.lastName) &&
    !isFieldEmpty(user.email) &&
    !isFieldEmpty(user.password) &&
    !isFieldEmpty(user.confirmPassword) &&
    !isFieldEmpty(user.phoneNumber) &&
    !passwordMismatch &&
    termsAccepted;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);

    if (name === "password" || name === "confirmPassword") {
      setPasswordMismatch(updatedUser.password !== updatedUser.confirmPassword);
    }
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = () => {
    console.log("Crear usuario:", user);
    onClose();
  };

  return {
    user,
    setUser,
    termsAccepted,
    setTermsAccepted,
    passwordMismatch,
    setPasswordMismatch,
    showPassword,
    isFormComplete,
    handleChange,
    handleClickShowPassword,
    handleSubmit,
  };
};

export default useLoginForm;
