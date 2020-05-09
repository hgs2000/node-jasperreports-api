// Web Service Login
import axios from 'axios';

import { logger, jlogin } from '../../util';
import { Connection } from '../../classes/Connection';

/** @param {Connection} conn */
export const getEncryptionKey = async (conn) =>
    fetch(`${conn.getUrl()}/GetEncryptionKey?${jlogin(conn)}`);

/** @param {Connection} conn */
export const loginV2 = async (conn) =>
    axios
        .post(`${conn.getUrl()}/rest_v2/login?${jlogin(conn)}`)
        .then((v) => {
            // Since all will use j_username and j_password, no need to get headers
            logger.log(v);
            return true;
        })
        .catch((err) => {
            // If it didn't work, it doesn't need to return
            logger.error(err);
            throw new Error(
                "Couldn't connect to server. Use DEBUG=true to log"
            );
        });

/**
 * @param {Connection} conn
 * @description Returns logout.html
 */
export const logout = async (conn) => fetch(`${conn.getUrl()}/logout.html`);

/** @param {Connection} conn */
export const serverInfoV2 = async (conn) => {
    console.log(conn.getUrl());
    return axios.get(
        `${conn.getUrl()}/rest_v2/serverInfo?${jlogin(conn)}`
        /* , {
        withCredentials: true,
    } */
    );
};
