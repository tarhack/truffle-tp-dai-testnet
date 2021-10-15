// 2_deploy_contracts.js

const ethers = require('ethers')
const chalk = require('chalk')
const Dai = artifacts.require("Dai");
const MyDeFiProject = artifacts.require("MyDeFiProject");

module.exports = async function(deployer, _network, accounts) {

 const dais = ethers.utils.parseUnits("1.0", 18);

 // Adresse du Contrat Dai sur Github
 const dai_addr = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'
 const recipient = '0x1563982C1dE544DD5c8fc915a617C6983D380e90'

 await deployer.deploy(Dai);
 const dai = await Dai.deployed();

 await deployer.deploy(MyDeFiProject, dai_addr);
 
 const myDeFiProject = await MyDeFiProject.deployed();

 console.log('Account owner : '+accounts[0])
 console.log('Account contract : '+accounts[0])
 console.log('Account recipient  : '+recipient)

 await dai.faucet(myDeFiProject.address, 100);

 await myDeFiProject.foo(recipient,dais);
 
 const balance0 = await myDeFiProject.balanceOf(myDeFiProject.address);
 const balance1 = await myDeFiProject.balanceOf(accounts[0]);
 const balance2 = await myDeFiProject.balanceOf(recipient);

 console.log('Balance contract  : '+chalk.blue(balance0))
 console.log('Balance accounts[0] : '+chalk.blue(balance1))
 console.log('Balance recipient : '+chalk.blue(balance2))
 
};