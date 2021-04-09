/**
 * Check whether email is in correct format, such as example@gmail.com
 */
export function validateEmail(email: string) {
  if (email === "") return true;
  const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(email.toLowerCase());
}

/**
 * Check whether phone number is made up of only digits and is 10 digits long
 */
export function validatePhone(phone: string) {
  if (phone === "") return true;
  const expression = /^0[0-9]{9}$/;
  return expression.test(phone);
}

/**
 * Check whether zip code is made up of 1 or more digits only
 */
export function validateZipCode(zipCode: string) {
  if (zipCode === "") return true;
  const expression = /^[0-9]+$/;
  return expression.test(zipCode);
}

/**
 * Check whether district's first letter does not begin with a digit
 */
export function validateDistrict(city: string) {
  if (city === "") return true;
  const expression = /[^0-9]/;
  return expression.test(city);
}

/**
 * Check whether province's first letter does not begin with a digit
 */
export function validateProvince(province: string) {
  if (province === "") return true;
  const expression = /[^0-9]/;
  return expression.test(province);
}
