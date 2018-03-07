import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xec07Cc2D4C79d2a468b0eb772f2830c569281388'
);

export default instance;
