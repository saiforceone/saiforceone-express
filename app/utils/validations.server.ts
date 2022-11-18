import isEmail from "validator/lib/isEmail";

export function validateEmail(emailAddress: unknown) {
  if (typeof emailAddress !== "string" || !isEmail(emailAddress)) {
    return `Email address is not valid`;
  }
};

export function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 7) {
    return `Passwords must be at least 7 characters long`;
  }
}

export function validateUrl(url: any) {
  const urls = ["/dashboard", "/"];
  if (urls.includes(url)) {
    return url;
  }
  return "/dashboard";
}