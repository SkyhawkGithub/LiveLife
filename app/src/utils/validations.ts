const isValidEmail = (email: string | undefined | null) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && emailRegex.test(email);
};

const isValidPassword = (password: string | undefined | null) => {
  // TODO:
  // const passwordRegex = /^(?!.* )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
  // return password && passwordRegex.test(password);

  // TODO:
  // For now only checking for length.
  // Will uncomment above in future to support complete validation.
  return password && password.length >= 8;
};

export { isValidEmail, isValidPassword };
