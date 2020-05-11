import { login } from '../services/Login';
import Axios from 'axios';
import { jlogin } from '../util';

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

    #cookie = null; // Recebe o token para realizar as conexões

    user = () => this.#user;
    pass = () => this.#pass;
    host = () => this.#host;
    port = () => this.#port;
    pro = () => this.#pro;
    cookie = () => this.#cookie;

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

    getUrl = (rest = false) =>
        `${this.#protocol}://${this.#host}:${this.#port}/jasperserver${this.#pro ? '-pro' : ''}${
            rest ? '/rest_v2' : ''
        }`;

    /**
     * @returns {Promise<Boolean>}
     */
    verify = async () => {
        // Tries to login using _user and _pass
        return Axios({ method: 'post', url: `${this.getUrl(true)}/login`, params: jlogin(this) }).then((v) => {
            this.#cookie = v.headers['set-cookie'][0] + ';' + v.headers['set-cookie'][1];
            return true;
        });
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
