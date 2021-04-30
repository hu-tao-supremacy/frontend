export const login = () => {
  const redirectPage = `${window.location.origin}/login?target=${window.location.pathname}`;
  window.location.replace(
    `https://account.it.chula.ac.th/html/login.html?service=${redirectPage}`
  );
};
