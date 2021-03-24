export function validEmail(email: string) {
  if (email === "") return false;
  const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(email.toLowerCase());
}

export function validPhone(phone: string) {
  if (phone === "") return false;
  const expression = /^0[0-9]{9}$/; //Must begin with 0 and have 9 digits follow it
  return expression.test(phone);
}

export function validZipCode(zipCode: string) {
  if (zipCode === "") return false;
  const expression = /^[0-9]+$/; //Must have 1 or more digits only
  return expression.test(zipCode);
}

export function validDistrict(city: string) {
  if (city === "") return false;
  const expression = /[^0-9]/; //Must not begin with digit
  return expression.test(city);
}

export function validProvince(province: string) {
  if (province === "") return false;
  const expression = /[^0-9]/; //Must not begin with digit
  return expression.test(province);
}

export function validAddress(address: string) {
  return address !== "";
}
