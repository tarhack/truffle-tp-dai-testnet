
// SPDX-License-Identifier: GPL-3.0
// Dai.sol
pragma solidity 0.8.2;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
 
contract Dai is ERC20 {
    constructor() ERC20('Dai Stablecoin', 'DAI') {} 
 
 // fonction faucet pour créer des Dai tokens
 function faucet(address recipient, uint amount) external {
   _mint(recipient, amount);
 }
 
}