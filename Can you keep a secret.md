<!-- 1 -->
let num = secret;
  const obj = {
    getSecret() {
      return num;
    },
    setSecret(n) {
      num = n;
    },
  };
  return obj;

  <!-- 2 -->
  const createSecretHolder = secret =>
  ({getSecret: () => secret,
    setSecret: val => secret = val});