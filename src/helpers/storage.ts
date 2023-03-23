const ID_TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refresh_token";

export const getToken = () => {
    let token =  localStorage.getItem(ID_TOKEN_KEY);
    return token;
};

export const saveToken = (token: string) => {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
}

export const destroyToken = () => {
    window.localStorage.removeItem(ID_TOKEN_KEY);
};

/*      Refresh Token      */


export const getRefreshToken = () => {
    let token = localStorage.getItem(REFRESH_TOKEN_KEY);
    return token
};

export const saveRefreshToken = (rToken: string) => {
    let _rToken = JSON.stringify(rToken);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, _rToken);
};

export const destroyRefreshToken = () => {
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export default {
    getToken,
    saveToken,
    destroyToken,
    getRefreshToken,
    saveRefreshToken,
    destroyRefreshToken
};