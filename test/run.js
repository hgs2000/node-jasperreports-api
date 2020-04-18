// Tests the lib

import { serverInfoV2 } from "../src/services/Login"
import Axios from "axios"

const main = async () => {
    let a = await Axios.post('http://192.168.0.20:58080/jasperserver/rest_v2/login?j_username=jasperadmin&j_password=jasperadmin');
    console.log();

    global.cookies = a.headers['set-cookie'][0]

    await b()
}

const b = async () => {
    let b = await Axios.get('http://192.168.0.20:58080/jasperserver/rest_v2/attributes', {
        withCredentials: true, headers: {
            Cookie: global.cookies
        }
    })
    console.log(b.data)
    // console.log((await serverInfoV2({ host: 'http://192.168.0.20', port: 58080 })).data)
}

main()