// Web Service Login
import axios from "axios";

/** @param {{host: String, port: Number}} data */
export const getEncryptionKey = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/GetEncryptionKey`)

/** @param {{host: String, port: Number}} data */
export const loginV2 = async (data) => axios.post(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/login`).then((res) => {
    global.axiosheader = res.headers['set-cookies']
})

/** 
 * @param {{host: String, port: Number}} data 
 * @description Returns logout.html
 */
export const logout = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/logout.html`)

/** @param {{host: String, port: Number}} data */
export const serverInfoV2 = async (data) => {
    const url = `${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/serverInfo`
    return axios.get(url, { withCredentials: true })
}