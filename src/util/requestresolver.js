import Axios from 'axios';
import qs from 'qs';

import { logger } from './debug';
import { Connection } from '../classes/Connection';

/**
 * @param {Connection} conn
 * @param {import('axios').AxiosRequestConfig} config
 */
export const request = async (conn, config, root = false) => {
    config.baseURL = conn.getUrl(!root);
    config.paramsSerializer = (params) => {
        // console.log(params);
        return qs.stringify(params);
    };
    if (!config.headers) config.headers = {};
    if (!config.headers['Cookie']) config.headers['Cookie'] = conn.cookie();
    if (!config.headers['accept']) config.headers['accept'] = 'application/json';

    // console.log(config);

    return Axios(config)
        .then((v) => {
            logger.log(v);
            return v.data;
        })
        .catch((err) => {
            logger.error(err);
            throw new Error("Couldn't connect to server. Use DEBUG=true to log");
        });
};
