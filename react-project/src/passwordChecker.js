// passwordChecker.js
export function passwordChecker(password, maxLength, minLength) {
  return password.length <= maxLength && password.length >= minLength ;
}
