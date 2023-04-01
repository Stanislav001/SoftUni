export function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getAccessToken() {
  const user = getUserData();
  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
}

export function clearUseData() {
  localStorage.removeItem("user");
}

export function setUserData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

export function createSubmitHandler(callback){
  return function (event){
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      callback(data, form);
  };
}

export function parseQuerystring(query = "") {
  return Object.fromEntries(query.split("&").map((kvp) => kvp.split("=")));
}
