// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEmpty = (obj: Record<string, any>) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export default isEmpty;
