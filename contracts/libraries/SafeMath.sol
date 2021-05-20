// SPDX-License-Identifier: MIT

//** Safe Math Library Contract */
//** Author Alex Hong : Crox Finance 2021.5 */

pragma solidity 0.6.6;

library SafeMath {
    // refer openzeppelin safe math but removed multiple useless functions
    function add(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require((z = x + y) >= x, "ds-math-add-overflow");
    }

    function sub(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require((z = x - y) <= x, "ds-math-sub-underflow");
    }

    function mul(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x, "ds-math-mul-overflow");
    }
}
