require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note office pulp install drip equal genre'; 
let testAccounts = [
"0x29c845a4bbe40a30f5af624a965c6ac372931820e9a18b9283d276e5cb07587f",
"0xfe442106c1650e41abf3bd7d92d7374723e00935b8bd13728997891ba584dedd",
"0xc64bfe9f6299b020f8ede5c5aa496cca47138ea56da8d1e78fac32b09072296a",
"0xd1b369411abab70ee443af599d9960f73a1cdb4768a0a3de829f12034729975a",
"0x41b7d13c4cdaf22aa84b2dd30e2565bf77e66c70f616a5c5462b01af58dcb8a5",
"0x1232b64c2cd3d2efe03029fc96c13414af7b7e6db459c36cefc283573bb51194",
"0x04548ecdc4d188b686eafd287c9459fc5405590b6585edbe924c9adbafc08acb",
"0xeb7983dd3f7da1e53965d54c16e78c81bad8234bcdcdb0922423ba9bd2b701e7",
"0x6af29606039e96c1a42736ba565edc22973fed5c51645c93afb4768e453e2189",
"0xe752d419311cb805c272056a246ad6cd31d10bd07742f05d267186ee84c43af4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

