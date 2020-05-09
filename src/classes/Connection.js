import { loginV2 } from '../services/Login';

/**
 * @typedef ConnectParams
 * @property {String} protocol
 * @property {String} host
 * @property {String|Number} port
 * @property {String} user
 * @property {String} pass
 * @property {Boolean} pro
 */

export class Connection {
    /** @type {String} */
    #user = null;
    /** @type {String} */
    #pass = null;

    /** @type {String} */
    #protocol = 'http';
    /** @type {String} */
    #host = null;
    /** @type {String|Number} */
    #port = null;
    /** @type {Boolean} */
    #pro = false;

    user = () => this.#user;
    pass = () => this.#pass;
    host = () => this.#host;
    port = () => this.#port;
    pro = () => this.#pro;

    /**
     * @param {String} user - JasperReports Server username
     * @param {String} pass - JasperReports Server password
     */
    setLogin = (user, pass) => {
        this.#user = user;
        this.#pass = pass;
    };

    setHost = (host, port, pro = false, protocol = 'http') => {
        this.#host = host;
        this.#port = port;
        this.#pro = pro;
        this.#protocol;
    };

    getUrl = () =>
        `${this.#protocol}://${this.#host}:${this.#port}/jasperserver${
            this.#pro ? '-pro' : ''
        }`;

    /**
     * @returns {Promise<Boolean>}
     */
    verify = async () => {
        // Tries to login using _user and _pass
        return loginV2(this);
    };

    /**
     * @param {ConnectParams}
     * @returns {Promise<Connection>}
     */
    static connect = async ({ protocol, host, port, user, pass, pro }) => {
        const conn = new Connection();
        conn.setHost(host, port, pro, protocol);
        conn.setLogin(user, pass);
        await conn.verify();
        return conn;
    };
}
