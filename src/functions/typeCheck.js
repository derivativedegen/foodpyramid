const typeCheckDate = args => {
  if (typeof args === "number") {
    return args;
  } else {
    return Date.parse(args)
  }
};

export default typeCheckDate;
