// Web Service Repository

// Endpoints in rest_v2 will be named functionnameV2

/** @param {{host: String, port: Number}} data */
export const resourcesV2 = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/resources`)

// TODO find out how do domains work to set it up
/** @param {{host: String, port: Number}} data */
export const domainMetadataV2 = async (data) => fetch(`//${data.host}:${data.port}/jasperserver-pro/rest_v2/domains/${''}/metadata`)

/** @param {{host: String, port: Number}} data */
export const permissionsV2 = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/permissions`)

/** @param {{host: String, port: Number}} data */
export const exportV2 = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/export`)

/** @param {{host: String, port: Number}} data */
export const importV2 = async (data) => fetch(`//${data.host}:${data.port}/jasperserver${(data.pro) ? '-pro' : ''}/rest_v2/import`)