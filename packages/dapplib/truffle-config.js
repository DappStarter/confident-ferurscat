require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn proud grace neck frame town'; 
let testAccounts = [
"0x5f90a8a3d367950a5d29114dc511c315bb866de876d0951502271dea23c15df1",
"0x71a1bcd592295a8a144afb6a17c159c290c6e34db7b75b4b31deb0b05ddcd17c",
"0xb94a66f669c0c536686d5c617171db07b09ed90c3427f3e446cbcfe517f6f5ef",
"0x9b2145812df22e9350169109318cb4380f97d03a5fdbd237d1e7bf7d85bbd4c9",
"0x22248befc58dd99a48ca7490b82d4b06e5612cebb3509738afac66b4266170ba",
"0xb69266885575879f36cd0bc093a0aa9cafe56e96895294c6846e1059351edc14",
"0xdcd82cc16fe7f3a1e40c23af0c5741107c4c945280903f88789c1176d2eadc79",
"0x9ae625e9154ff993a2bafa4e678417e340ce5af2acbeeb93fa36ac8b40687c79",
"0x350c07b6f6d0094225c0eb9b432ef87beca4aedb364f1d9a717651ddcba03eb5",
"0x4d9bff7175af193a24bc0eba74c218c92ac50c15a9b9cfed46973d6650a450ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
