// Web Service Login
import { jlogin, request } from '../../util';
import { Connection } from '../../classes/Connection';

/** @param {Connection} conn */
export const getEncryptionKey = async (conn) =>
    request(conn, { method: 'post', url: '/GetEncryptionKey', params: jlogin(conn) }, true);

/** @param {Connection} conn */
export const login = async (conn) => request(conn, { method: 'post', url: '/login', params: jlogin(conn) });

/**
 * @param {Connection} conn
 * @description Returns logout.html
 * @deprecated This library doesn't require logging out
 */
export const logout = async (conn) => request(conn, { method: 'get', url: '/logout.html' }, true);

/** @param {Connection} conn */
export const serverInfo = async (conn) => request(conn, { method: 'get', url: '/serverInfo', params: jlogin(conn) });
// resolver(axios.get(`${conn.getUrl()}/rest_v2/serverInfo?${jlogin(conn)}`));
