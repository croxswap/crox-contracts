const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const mnemonic = process.env.MNEMONIC;
const rinkebyInfuraKey = process.env.RINKEBYINFURAKEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
      from: "0x23853fde632616E7f3BBa4C7662b86A21A326A89",
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, ropstenInfuraKey, 0),
      network_id: 3,
      gas: 8000000,
      gasPrice: 240000000000,
      timeoutBlocks: 5000000, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, rinkebyInfuraKey, 0),
      network_id: 4,
      gas: 8000000,
      gasPrice: 240000000000,
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, mainnetInfuraKey, 0),
      network_id: 1,
      gas: 8000000,
      gasPrice: 240000000000,
      timeoutBlocks: 5000000, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  //
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
        //  evmVersion: "byzantium"
      },
    },
  },

  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "Y1GNDGGHUPD27Z4UN8PIJEVWF5PEKK4HDI", // Add  API key
  },
};
