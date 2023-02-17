const Pattern = {
  fullname: {
    required: "Full name is required",
    pattern: {
      value: /^[a-zA-Z ]+$/i,
      message: "Invalid character in name.",
    },
    minLength: {
      value: 4,
      message: "Name must be 4+ characters.",
    },
    maxLength: {
      value: 25,
      message: "Too many characters in name.",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Email is invalid. Try again.",
    },
    minLength: {
      value: 4,
      message: "Email must be 4+ characters.",
    },
    maxLength: {
      value: 25,
      message: "Too many characters in email.",
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
      message: "Password must be b/w 8-13 characters.",
    },
    maxLength: {
      value: 13,
      message: "Password must be b/w 8-13 characters.",
    },
  },
};

export default Pattern;
