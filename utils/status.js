const util = require("minecraft-server-util");

const status = (server) => {
  return new Promise(async (resolve, reject) => {
    var address = util.parseAddress(server);
    try {
      var result = await util.status(address.host, address.port, {
        enableSRV: true,
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { status };
