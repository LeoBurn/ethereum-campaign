# ![Ethereum](https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png) Ethereum Crowd Campaign 
</br>
Project that provide a service like kickstarter, and anyone can contribute through ethereum blockchain.
This project it's a exercice from udemy course  <a href="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/">Ethereum and Solidity Course</a> with some customizations.

<h2>Frameworks</h2>

<div>
<a href="https://trufflesuite.com/docs/ganache/">
  <img src="https://trufflesuite.com/img/ganache-logo-dark.svg" alt="Ganache" width="64px;" height="64px;"/>
</a>
<a href="https://mochajs.org/">
  <img src="https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667" alt="Mocha" width="64px;" height="64px;"/>
</a>

<a href="https://reactjs.org/">
  <img src="https://camo.githubusercontent.com/abd19bd0c5030c8d874ed7073f1815d777004451d5967c447386840b80624569/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f72656163742d6a732f72656163742e706e67" alt="React" width="64px;" height="64px;"/>
</a>

<a href="https://nextjs.org/">
  <img src="https://camo.githubusercontent.com/e1e113df83e7731fdb90f6f0ab2eeb155fd1b48c27d99814dcf1c23c0acdc6a2/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67" alt="NextJs" width="64px;" height="64px;"/>
</a>

<a href="https://react.semantic-ui.com/">
  <img src="https://react.semantic-ui.com/logo.png" alt="NextJs" width="64px;" height="64px;"/>
</a>

</div>

## Setup 
1. Create .env file
```
INFURA_URL ='<INFURA_URL>'
SEED_PHRASE ='<SEED_PHRASE >'
FACTORY_ADDRESS = '<FACTORY_ADDRESS>'
```
2. npm install --legacy-peer-deps ( have some old packages and dependicies )
3. node ./ethereum/build.js ( to build json files with abi from contracts )
4. node ./ethereum/deploy.js ( to deploy de CampaignFactory to network specified with infura url )
5. Setup FACTORY_ADDRESS env var with result from previous step
6. npm start dev

If you want to use my deployed contract you can use the factory in address: ``` 0x46d01Cd021284C05757596215D71074581B9AA38 ``` on Goerli test network.


# Example
This is a very basic UI only for testing purposes, the beauty Ui it's not a focus of this repo!
![image](https://user-images.githubusercontent.com/915683/210184308-605ee3dd-108c-4179-b4f0-ead144315141.png)


# Solidity

Contracts:
 * Campaign ( All logic of one campaign )
 * CampaignFactory ( Create Campaigns )
 
 # Credits

https://www.github.com/StephenGrider
