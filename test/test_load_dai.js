const { BN, ether } = require('@openzeppelin/test-helpers')

const Web3 = require('web3')
const ethers = require('ethers')
const chalk = require('chalk')
const HDWalletProvider = require('truffle-hdwallet-provider');

const wallet = new HDWalletProvider('6dc5f9124897bc544333331f2357e60a3d66b14c50026ecb58fada790ecbf6b3', 'https://kovan.infura.io/v3/1f83423aa98245388c396c4cc9bec7d1')
const web3 = new Web3(wallet) 
const dai_addr = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa' ;
const dai_ABI = [{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

// Dai addr : 0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa -- Dai Contract Address on Kovan Testnet

const dais = ethers.utils.parseUnits("10.0", 18);

const ack1 = '0xab3776a8BEF68c31487B64bb548238F8f11A4332' // Premier compte (50 Dai)
let ack2 = '0x1563982C1dE544DD5c8fc915a617C6983D380e90' // Deuxième compte (0 Dai)
const contract = '0xbbB7B142b690e08b8A90Ba4d451A3D3af22F20E4'

let dai // Dai Contract from Kovan Testnet

async function main(){
    console.log(chalk.greenBright('<<<<<START>>>>>>'))
	dai = await loadContract(dai_ABI,dai_addr)
    ack2 = contract
    if ( dai ){
        console.log(chalk.greenBright('Contract founded : '+dai.options.address))
        console.log(chalk.greenBright('1 Dai value is : '+dais))

        let balance1 = await computeBalance(ack1)
        console.log(chalk.blue('Balance 1 at begin :'+balance1+' Dai'))

        await dai.methods.approve(ack2,dais).send({from:ack1})
            .on('receipt', function(receipt){console.log(receipt)})
            .catch(function(err){console.log(chalk.red('Approve '+ack1+'>>>>>>ERROR'+err))})

        await dai.methods.allowance(ack1, ack2).call({from:ack1})
            .then(function(result){console.log(chalk.green('Allowance ack1('+ack1+') to ack2('+ack1+') : '+formatDai(result)))})
            .catch(function(err){console.log(chalk.red('Allowance of '+ack1+'>>>>>>ERROR'+err))})


        await dai.methods.transfer(ack2,dais).send({from:ack1})
            .then(async function(result) {
                console.log(chalk.green('Transfer from '+ack1+' to :'+ack2+ ' Ok'))
            })
            .catch(async  function(err){console.log(chalk.red('>>>>>>ERROR'+err))})


        balance1 = await computeBalance(ack1)
        const balance2 = await computeBalance(ack2) 

        console.log(chalk.blue('Balance 1 is :'+balance1+' Dai'))
        console.log(chalk.blue('Balance 2 is :'+balance2+' Dai'))


    }else{
        console.log(chalk.red('Contract NOT Found ...'))
    }
    console.log(chalk.greenBright('<<<<< END >>>>>>'))
}

async function loadContract(abi, addr) {
	return new web3.eth.Contract(abi, addr)
}

async function computeBalance(account){
    let balance = 0
    await dai.methods.balanceOf(account).call()
        .then(async function(result){
            balance = formatDai(result)       
        })
        .catch(function(err){console.log(chalk.red('ComputeBalance '+account+'>>>>>>ERROR>>>>>>'+err))})

    return balance
}

function formatDai(number, decimals=-18){
    return Math.round(number*(Math.pow(10,decimals)))
}

main()