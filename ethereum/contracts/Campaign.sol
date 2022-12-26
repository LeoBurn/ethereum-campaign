pragma solidity ^0.4.17;

contract Campaign {
    address public manager;
    uint public minimum;
    mapping(address => bool ) public approvers;
    uint public approversCount;
    Request[] public requests;

    function Campaign(uint _minimum, address _manager) public {
        manager = _manager;
        minimum = _minimum;
    }

    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    modifier onlyOwner(){
        require(msg.sender == manager);
        _;
    }

    function contribute() public payable {
        require(msg.value > minimum);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string _description,
        uint _value, 
        address _recipient
    ) public onlyOwner 
    {
        Request memory newRequest = Request({
            description: _description,
            value: _value,
            recipient: _recipient,
            complete:false,
            approvalCount :0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public onlyOwner {
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2) );
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (uint,uint,uint,uint,address){
        return (
            minimum,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint) {
        return requests.length;
    }
}

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint _minimum) public {
        address newCampaign = new Campaign(_minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaings() public view returns(address[]){
        return deployedCampaigns;
    }
}