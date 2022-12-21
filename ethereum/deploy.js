require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3')
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    process.env.SEED_PHRASE,
    process.env.INFURA_URL
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    console.log('Attempting to deploy from account',account);

    const contract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                        .deploy({data:compiledFactory.bytecode})
                        .send({gas:'1000000',from: account});
    
    console.log('Contract deployed to: ', contract.options.address);
    provider.engine.stop();

};
deploy();