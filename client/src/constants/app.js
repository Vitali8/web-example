export const VERSION          = require('../../package.json').version;
export const DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';
export const API_URL          = 'http://127.0.0.1:3017/';

//Reducer constant
export const SET_ERROR = 'APP:SET_ERROR';
export const GET_DATA = 'APP:GET_DATA';
