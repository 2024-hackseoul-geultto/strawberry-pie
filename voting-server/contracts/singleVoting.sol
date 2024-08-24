// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract VotingContract {
    struct Voter {
        bool hasVoted;
        uint vote;
        bool isRegistered;
    }

    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    address public admin;
    Proposal[] public proposals;
    mapping(address => Voter) public voters;
    bool public votingEnded;
    uint public votingEndTime;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function.");
        _;
    }

    modifier votingActive() {
        require(!votingEnded, "Voting has ended.");
        _;
    }

    constructor(bytes32[] memory proposalNames, uint duration) {
        admin = msg.sender;
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({ name: proposalNames[i], voteCount: 0 }));
        }
        votingEndTime = block.timestamp + duration;
    }

    function registerVoter(address voter) public onlyAdmin votingActive {
        require(!voters[voter].isRegistered, "Voter is already registered.");
        voters[voter].isRegistered = true;
    }

    function vote(uint proposalIndex) public votingActive {
        Voter storage sender = voters[msg.sender];
        require(sender.isRegistered, "You are not a registered voter.");
        require(!sender.hasVoted, "You have already voted.");
        require(proposalIndex < proposals.length, "Invalid proposal.");

        sender.hasVoted = true;
        sender.vote = proposalIndex;
        proposals[proposalIndex].voteCount += 1;
    }

    function endVoting() public onlyAdmin {
        require(block.timestamp >= votingEndTime, "Voting period has not ended yet.");
        votingEnded = true;
    }

    function getWinningProposal() public view returns (uint winningProposalIndex) {
        require(votingEnded, "Voting is still active.");
        uint winningVoteCount = 0;
        for (uint i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > winningVoteCount) {
                winningVoteCount = proposals[i].voteCount;
                winningProposalIndex = i;
            }
        }
    }

    function getWinnerName() public view returns (bytes32 winnerName) {
        return proposals[getWinningProposal()].name;
    }
}