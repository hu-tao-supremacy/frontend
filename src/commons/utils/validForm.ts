export function validateEmail(email: string) {
  if (email === "") return false;
  const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(email.toLowerCase());
}

export function validatePhone(phone: string) {
  if (phone === "") return false;
  const expression = /^0[0-9]{9}$/; //Must begin with 0 and have 9 digits follow it
  return expression.test(phone);
}

export function validateZipCode(zipCode: string) {
  if (zipCode === "") return false;
  const expression = /^[0-9]+$/; //Must have 1 or more digits only
  return expression.test(zipCode);
}

export function validateDistrict(city: string) {
  if (city === "") return false;
  const expression = /[^0-9]/; //Must not begin with digit
  return expression.test(city);
}

export function validateProvince(province: string) {
  if (province === "") return false;
  const expression = /[^0-9]/; //Must not begin with digit
  return expression.test(province);
}

export function validateAddress(address: string) {
  return address !== "";
}
