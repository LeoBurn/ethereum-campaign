import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const intance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    process.env.FACTORY_ADDRESS
);

export default intance;