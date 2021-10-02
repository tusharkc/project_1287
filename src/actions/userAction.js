import axios from 'axios';
import { API_CONSTANT } from '../utils/apiConstant';
import { CONSTANT } from '../utils/constant';
/**************************************
* This file  containing all api actions
*/
//user Rgistration Api
export function userRegisterAction(data) {
    const url = `${API_CONSTANT.SIGN_UP}`;
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((res) => {
            return resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

//Get State List
export function stateByCounry() {

    const url = `${API_CONSTANT.STATE_LIST}`;
    return new Promise((resolve, reject) => {
        axios.get(url, { headers: { 'X-CSCAPI-KEY': CONSTANT.AUTH_TOKEN } }).then((res) => {
            return resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}

//Get City List
export function cityByState(stateCode) {

    const url = `${API_CONSTANT.CITY_LIST}${stateCode}/cities`;
    return new Promise((resolve, reject) => {
        axios.get(url, { headers: { 'X-CSCAPI-KEY': CONSTANT.AUTH_TOKEN } }).then((res) => {
            return resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}
//Verify Pincode
export function pinCodeVerify(pincode) {

    const url = `${API_CONSTANT.PINCODE_VERIFY}${pincode}`;
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            return resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}







