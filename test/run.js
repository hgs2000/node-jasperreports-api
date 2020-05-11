// Tests the lib
import { Connection } from '../src/classes/Connection';
import { runReportExecutions, pollReportExecution } from '../src/services/ReportsExecution';
import { serverInfo } from '../src/services/Login';

const main = async () => {
    const conn = await Connection.connect({
        user: 'jasperadmin',
        pass: 'jasperadmin',
        host: '192.168.0.20',
        port: 58080,
    });
    // console.log(await serverInfo(conn));
    console.log(
        await runReportExecutions(conn, {
            reportUnitUri: '/reports/interactive/CustomersReport',
            outputFormat: 'html',
            async: true,
        })
    );
    console.log(await pollReportExecution(conn, 'da00c4fd-c527-463d-bb77-3c8f6eb46482'));
};

main().catch((err) => {
    console.error(err);
});
