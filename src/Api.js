// https://developer.foursquare.com/docs/api/venues/search

class API {
  static URL() {
    return "https://api.foursquare.com/v2";
  }
  static auth() {
    const keys = {
      client_id: "CZSU1I1TLUPGSF4D4YLPLO1AVDGPFAUBPNVOMKKVDGFGQ3UE",
      client_secret: "WOMGBHPKTXYINSCROPHBEAEIXGZCXBTGJICZGY4CBC00MDD0",
      // client_id: process.env.REACT_APP_CLIENT_ID,
      // client_secret: process.env.REACT_APP_CLIENT_SECRET,
      v: 20190120
    };
    return Object.keys(keys)
      .map(key => `${key}=${keys[key]}`)
      .join("&");
  }
  static urlBuilder(urlParams) {
    if (!urlParams) {
      return "";
    }
    return Object.keys(urlParams)
      .map(key => `${key}=${urlParams[key]}`)
      .join("&");
  }
  static headers() {
    return {
      Accept: "application/json"
    };
  }
  static async fetch(endPoint, method, urlParams) {
    let requestData = {
      method,
      headers: API.headers()
    };
    const res = await fetch(`${API.URL()}${endPoint}?${API.auth()}&${API.urlBuilder(urlParams)}`, requestData);
    return await res.json().catch(function(e) {
      console.log(e);
    });
  }
}

export default class fourSquareAPI {
  static search(urlParams) {
    return API.fetch("/venues/search", "GET", urlParams);
  }
}
