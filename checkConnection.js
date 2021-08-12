var tcpp = require('tcp-ping');

const [ipAddress, port] = process.argv.slice(2);
(async () => {
    const tcpPingPromise = (ipAddress, port) => new Promise((resolve, reject) => tcpp.probe(ipAddress, port, (err, data) => err ? reject(err) : resolve(data)));
    const response = await tcpPingPromise(ipAddress, port);
    console.log(response);
})();