const Pattern = {
  fullname: {
    required: "Full name is required",
    pattern: {
      value: /^[a-zA-Z. ]+$/i,
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
  name: {
    required: "Show name is required.",
    minLength: {
      value: 4,
      message: "Show name must be 4+ characters.",
    },
  },
  station: {
    required: "Station name is required.",
    minLength: {
      value: 2,
      message: "Station name must be 2+ characters.",
    },
    maxLength: {
      value: 25,
      message: "Too many characters in station name",
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
    pattern: {
      value: /^[a-zA-Z]+$/i,
      message: "Gender is Invalid.",
    },
  },

  frequency: {
    required: "Frequency is required",
    pattern: {
      value: /^[0-9.]+$/i,
      message: "No space or letter is allow in frequency. Try again.",
    },
    minLength: {
      value: 5,
      message: "Frequency must be 5+ characters long.",
    },
  },

  about: {
    required: "Please add a description",
    // maxLength: {
    //   value: 280,
    //   message: "Cannot be more then 280 characters."
    // }
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
