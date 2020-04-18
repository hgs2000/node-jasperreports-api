// Web Service Login

/** @param {{host: String, port: Number}} data */
export const getEncryptionKey = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest/GetEncryptionKey`)

/** @param {{host: String, port: Number}} data */
export const login = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest/login`)

/** @param {{host: String, port: Number}} data */
export const jSpringSecurityCheck = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/j_spring_security_check`)

/** @param {{host: String, port: Number}} data */
export const logout = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/logout.html`)

/** @param {{host: String, port: Number}} data */
export const serverInfoV2 = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/serverInfo`)