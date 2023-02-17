exports.genUUID = function genUUID() {
  let right = Math.random().toString(36).substring(2);
  let left = Math.random().toString(36).substring(2, 6);
  let token = left + right;
  return token;
};
