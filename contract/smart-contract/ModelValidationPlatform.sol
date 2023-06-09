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

     enum Categories{ 
        education, drugsAndMedical, earthNature , scienceAndTechnology
    }

    struct Data {
        uint id;
        string title;
        string description;
        string uploadFile;
        Categories categories;
        bool status;      //true-> public   , false ->Private
    }


    mapping(address => User) private userMapping;      // for user register 
    mapping (address =>bool) public isRegisteredMapping;   // for user register
    mapping (uint256 => Data) private dataSetMapping;     // Dataset 
    mapping(address => uint[]) public dataSetAddressMapping;   // Dataset
    Counters.Counter public dataCount;
    

    function setUser(string memory _name, string memory _occupation, string memory _organization, string memory _location, string memory _image) public {
        //  Check if the User is already registered
        require(!isRegisteredMapping[msg.sender],"User is already registered");
        userMapping[msg.sender] = User(_name , _occupation, _organization, _location, _image);
        isRegisteredMapping[msg.sender]=true;
    }

    function getUser(address _address) public view returns (User memory) {
        return userMapping[_address];
    }

    function setData(string memory _title, string memory _description, string memory _uploadFile,Categories _categories,bool _status) public {
        require(isRegisteredMapping[msg.sender], "User is not registered");
        dataCount.increment();
        uint256 newDataSetId = dataCount.current();
        dataSetMapping[newDataSetId] = Data(newDataSetId,_title, _description, _uploadFile , _categories,_status);
        dataSetAddressMapping[msg.sender].push(newDataSetId);
    }

    function getData(uint256 id) public view returns (Data memory) {
        return dataSetMapping[id];
    }

}