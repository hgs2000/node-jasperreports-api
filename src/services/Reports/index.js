// Web Service Reports

/** @param {{host: String, port: Number}} data */
export const reportsV2 = async (data) =>
    fetch(
        `${data.host}:${data.port}/jasperserver${
            data.pro ? '-pro' : ''
        }/rest_v2/reports`
    );

/** @param {{host: String, port: Number}} data */
export const reportExecutionsV2 = async (data) =>
    fetch(
        `//${data.host}:${data.port}/jasperserver${
            data.pro ? '-pro' : ''
        }/rest_v2/reportExecutions`
    );

/** @param {{host: String, port: Number}} data */
export const reportInputControlsV2 = async (data) =>
    fetch(
        `//${data.host}:${data.port}/jasperserver${
            data.pro ? '-pro' : ''
        }/rest_v2/reports/${data.report}/inputControls`
    );

/** @param {{host: String, port: Number}} data */
export const reportOptionsV2 = async (data) =>
    fetch(
        `//${data.host}:${data.port}/jasperserver${
            data.pro ? '-pro' : ''
        }/rest_v2/reports/${data.report}/options`
    );

/** @param {{host: String, port: Number}} data */
export const reportOptionsV2 = async (data) =>
    fetch(
        `//${data.host}:${data.port}/jasperserver${
            data.pro ? '-pro' : ''
        }/rest_v2/reports/${data.report}/jobs`
    );

/** @param {{host: String, port: Number}} data */
export const queryExecutorV2 = async (data) =>
    fetch(`//${data.host}:${data.port}/jasperserver-pro/rest_v2/queryExecutor`);

/** @param {{host: String, port: Number}} data */
export const reportOptionsV2 = async (data) =>
    fetch(`//${data.host}:${data.port}/jasperserver-pro/rest_v2/caches/vds`);
