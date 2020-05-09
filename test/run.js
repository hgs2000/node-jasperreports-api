// Tests the lib
import { Connection } from '../src/classes/Connection';
import { serverInfoV2 } from '../src/services/Login';

const main = async () => {
    const conn = await Connection.connect({
        user: 'jasperadmin',
        pass: 'jasperadmin',
        host: '192.168.0.20',
        port: 58080,
    });

    console.log(await serverInfoV2(conn));
};

main().catch((err) => console.error(err));
