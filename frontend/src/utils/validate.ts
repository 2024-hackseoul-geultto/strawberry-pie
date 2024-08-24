function isEmail(text: string): boolean {
  return /^[a-z0-9._%+-]{1,}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/.test(text);
};

export { isEmail };