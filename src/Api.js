class Helper {
    static baseURL() {
        return "https://api.foursquare.com/v2"
    }
    static auth() {
        const keys = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            v:20190120
        };
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlBuilder(urlParams) {
        if(!urlParams) {
            return ""
        }
        return Object.keys(urlParams)
            .map(key => `${key}=${urlParams[key]}`)
            .join("&")
    }
    static headers() {
        return {
           Accept: "application/json"
        }
    }
    static simpleFetch(endPoint, method, urlParams) {
        let requestData = {
            method,
            headers: Helper.headers()
        }
        return fetch(
            `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
                urlParams
                )}`,
                requestData
            ).then(res => res.json())
    }
}

export default class fourSquareAPI {
    static search(urlParams) {
        return Helper.simpleFetch("/venues/search", "GET", urlParams)
    }
    static getVenueDetails(Venue_ID) {
        return Helper.simpleFetch(`/venues/${Venue_ID}`, "GET")
    }
    static getVenuePhotos(Venue_ID) {
        return Helper.simpleFetch(`/venues/${Venue_ID}/photos`, "GET")
    }
}