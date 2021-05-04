/**
 * Check whether email is in correct format, such as example@gmail.com
 */
export function validateEmail(email: string) {
  if (email === "") return true;
  const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(email.toLowerCase());
}

/**
 * Check whether url is a Facebook Url, such as facebook.com/something
 */
export function validateFacebookUrl(url: string) {
  if (url === "") return true;
  const expression = /^(?:www.)?facebook.com\/(?:.)*$/;
  return expression.test(url.toLowerCase());
}

/**
 * Check whether url is a Facebook Url, such as instagram.com/something
 */
export function validateInstagramUrl(url: string) {
  if (url === "") return true;
  const expression = /^(?:www.)?instagram.com\/(?:.)*$/;
  return expression.test(url.toLowerCase());
}

/**
 * Check whether url is a Facebook Url, such as line.me/R/ti/p/something
 */
export function validateLineOfficialUrl(url: string) {
  if (url === "") return true;
  const expression = /^(?:www.)?line.me\/R\/ti\/p\/(?:.)*$/;
  return expression.test(url.toLowerCase());
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

export function validateYear(year: number | null) {
  if (!year) {
    return true;
  }
  return year > 0;
}

/**
 * Check whether input has only digits
 */
export function isNumber(input: string) {
  if (input === "") return true;
  const expression = /^\d*$/;
  return expression.test(input);
}
