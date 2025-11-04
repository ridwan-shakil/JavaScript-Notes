const email = "apple.pie@example.com";

const maskEmail = (email) => {
  const indexAT = email.indexOf('@');

  const firstChar = email[0];
  const lastCharBeforeAt = email[indexAT - 1];

  const middleLength = indexAT - 2; // between first and last char
  const stars = "*".repeat(middleLength);

  return firstChar + stars + lastCharBeforeAt + email.slice(indexAT);
};

console.log(maskEmail(email)); // a******e@example.com
