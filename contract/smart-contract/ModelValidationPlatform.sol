// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";

contract ModelValidationPlatform {

using Counters for Counters.Counter;
   
    struct User {
        string name;
        string occupation;
        string organization;
        string location;
        string image;
       // bool isRegistered;
    }


    mapping(address => User) private userMapping;      // for user register 
    mapping (address =>bool) public isRegisteredMapping;   // for user register
    

    function setUser(string memory _name, string memory _occupation, string memory _organization, string memory _location, string memory _image) public {
        //  Check if the User is already registered
        require(!isRegisteredMapping[msg.sender],"User is already registered");
        userMapping[msg.sender] = User(_name , _occupation, _organization, _location, _image);
        isRegisteredMapping[msg.sender]=true;
    }

    function getUser(address _address) public view returns (User memory) {
        return userMapping[_address];
    }

}