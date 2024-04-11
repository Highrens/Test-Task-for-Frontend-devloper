export const BASE_URL = "http://dushnila.gooddelo.com/data";

 const _getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Îøèáêà: ${res.status}`);
  }
  return res.json();
};

export const getData = () => {
  return fetch(BASE_URL, {
    method: "GET",
  }).then(_getResponseData);
};
