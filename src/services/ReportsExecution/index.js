import Axios from 'axios';
import qs from 'querystring';

import { Connection } from '../../classes/Connection';
import { resolver, jlogin, request } from '../../util';

/**
 * @typedef ReportExecutionRequest
 *
 * @property {String} reportUnitUri - Report URI
 * @property {'pdf'|'html'|'xls'|'xlsx'|'rtf'|'csv'|'xml'|'docx'|'odt'|'ods'|'jrprint'} outputFormat - Report output format
 * @property {Boolean} freshData
 * @property {Boolean} saveDataSnapshot
 * @property {Boolean} interactive
 * @property {Boolean} allowInlineScripts
 * @property {Boolean} ignorePagination
 * @property {String} pages - Formatado como '<paginainicial>-<paginafinal>'
 * @property {Boolean} async
 * @property {String} transformerKey
 * @property {} attachmentsPrefix
 * @property {String} baseUrl
 * @property {{reportParameter: Array<{name: String, value: any}>}} parameters - InputControls
 */

/**
 * @typedef ReportExecution
 *
 * @property {Number} currentPage
 * @property {Array<{id: String, status: String}>} exports
 * @property {String} reportURI
 * @property {String} requestID
 * @property {String} status
 */

/**
 *
 * @param {Connection} conn
 * @param {ReportExecutionRequest} config
 *
 * @returns {ReportExecution}
 */
export const runReportExecutions = async (conn, config) => {
    if (!config.reportUnitUri || !config.outputFormat) throw new Error('Missing required parameter');
    // return resolver(Axios.post(`${conn.getUrl()}/rest_v2/reportExecutions?${jlogin(conn)}`, config));
    return request(conn, {
        url: '/reportExecutions',
        data: JSON.stringify(config),
        headers: { 'Content-Type': 'application/json', accept: 'application/xml' },
    });
};

/**
 * @param {Connection} conn
 * @param {String} requestID
 */
export const pollReportExecution = async (conn, requestID) =>
    request(conn, { url: `/reportExecutions/${requestID}/status` });

/**
 * @param {Connection} conn
 * @param {String} requestID
 */
export const requestReportExecution = async (conn, requestID) =>
    request(conn, { url: `/reportsExecution/${requestID}`, headers: { accept: 'application/json' } });
// resolver(
//     Axios.get(`${conn.getUrl()}/rest_v2/reportExecutions/${requestID}?${jlogin(conn)}`, {
//         headers: { accept: 'application/json' },
//     })
// );
