import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x078eC63Be909110255E09F1480A3cCd71C1e177A'
);

export default instance;
