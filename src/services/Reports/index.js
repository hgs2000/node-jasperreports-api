// Web Service Reports
import Axios from 'axios';

import { resolver, jlogin } from '../../util';
import { Connection } from '../../classes/Connection';

/**
 * @param {Connection} conn
 * @param {{path: String}} config
 */
export const reportsV2 = async (conn, config) =>
    resolver(
        Axios.get(
            `${conn.getUrl()}/rest_v2/reports/${config.path}?${jlogin(conn)}`
        )
    );
