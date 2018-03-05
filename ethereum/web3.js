import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //check to see if we are in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //we are on the server or user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/4vmq7a7hvaq5rEp1ta8k'
  );
  web3 = new Web3(provider);
}

export default web3;
