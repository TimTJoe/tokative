const Pattern = {
  fullname: {
    required: "Full name is required",
    pattern: {
      value: /[a-zA-Z0-9_. ]+/g,
      message: "Invalid character in name.",
    },
    minLength: {
      value: 4,
      message: "Name must be 4+ characters.",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Email is invalid. Try again.",
    },
  },
  gender: {
    required: "Gender is required",
    // pattern: {}
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be 8+ characters.",
    },
  },
};

export default Pattern;
