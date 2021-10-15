// SPDX-License-Identifier: GPL-3.0
// MyDeFiProject.sol
pragma solidity 0.8.2;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
 
contract MyDeFiProject {
 IERC20 dai;
 
 constructor(address daiAddress) {
   // injecter l'address du token Dai à utiliser
   dai = IERC20(daiAddress);
 }
 
 //
 // fonction qui permet d'effectuer un transfer de dai vers le recipient
 // address(this) => current contract address
 //
 function foo(address recipient, uint amount) external {
   require(recipient != msg.sender,"You can't send money to yourself !");
   dai.approve(recipient, amount);
   uint limit = dai.allowance(address(this), recipient);
   require(limit >= amount ,"You dont have enought Dai");
   dai.transfer(recipient, amount);
 }

  function balanceOf(address account) external view returns (uint){
    return dai.balanceOf(account);
  }
  

}