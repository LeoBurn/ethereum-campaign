pragma solidity ^0.4.17;
import './Campaign.sol';

contract CampaignFactor{
    address[] public deployedCampaigns;

    function createCampaign(uint _minimum) public {
        address newCampaign = new Campaign(_minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaings() public view returns(address[]){
        return deployedCampaigns;
    }
}