import { Connection } from '../classes/Connection';

/**
 *
 * @param {Connection} conn
 */
export const jlogin = (conn) =>
    `j_username=${conn.user()}&j_password=${conn.pass()}`;
