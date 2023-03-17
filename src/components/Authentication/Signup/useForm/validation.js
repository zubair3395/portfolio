export const validation = (user) => {
  const error = {};
  if (!user.name) {
    error.name = "name is required";
  }
  if (!user.email) {
    error.email = "email is required";
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
  ) {
    error.email = "email is invalid";
  }
  if (!user.password) {
    error.password = "password is required";
  } else if (user.password.length < 8) {
    error.password = "Password must be 8 charcater";
  }

  return error;
};
