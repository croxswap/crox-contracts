const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");
const { toChecksumAddress } = require("ethereum-checksum-address");
require("dotenv").config();

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);
};
