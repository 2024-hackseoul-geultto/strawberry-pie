// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract QuadraticVotingContract {
    struct Voter {
        uint credit;
        bool isRegistered;
        mapping(uint => bool) hasVoted;
    }

    struct Proposal {
        // bytes32 name;
        uint id;
        uint voteCount;
    }

    struct Vote {
        Proposal[] proposals;
        bool votingEnded;
    }

    address public admin;
    uint public voteCount;
    uint public constant TOTAL_CREDITS = 100;
    mapping(uint => Vote) public votes;
    mapping(address => Voter) public voters;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function createVote(uint[] memory proposalIds) public onlyAdmin {
        Vote storage newVote = votes[voteCount];
        for (uint i = 0; i < proposalIds.length; i++) {
            newVote.proposals.push(Proposal({ id: proposalIds[i], voteCount: 0 }));
        }
        voteCount++;
    }
    // function createVote(bytes32[] memory proposalNames) public onlyAdmin {
    //     Vote storage newVote = votes[voteCount];
    //     for (uint i = 0; i < proposalNames.length; i++) {
    //         newVote.proposals.push(Proposal({ name: proposalNames[i], voteCount: 0 }));
    //     }
    //     voteCount++;
    // }

    function registerVoter(address voter, uint credit) public onlyAdmin {
        require(!voters[voter].isRegistered, "Voter is already registered.");
        require(voters[voter].credit == 0, "Voter is already registered.");
        voters[voter].isRegistered = true;
        voters[voter].credit = credit;
    }

    function vote(uint voteIndex, uint proposalIndex, uint creditSpent) public {
        Voter storage sender = voters[msg.sender];
        require(!votes[voteIndex].votingEnded, "Voting has ended.");
        require(sender.credit >= creditSpent, "Insufficient credit.");
        require(!sender.hasVoted[voteIndex], "You have already voted on this vote.");

        votes[voteIndex].proposals[proposalIndex].voteCount += creditSpent;
        sender.credit -= creditSpent;
        sender.hasVoted[voteIndex] = true;
    }

    function endVote(uint voteIndex) public onlyAdmin {
        votes[voteIndex].votingEnded = true;
    }

    function getWinningProposal(uint voteIndex) public view returns (uint winningProposalIndex) {
        Vote storage vote = votes[voteIndex];
        uint winningVoteCount = 0;
        for (uint i = 0; i < vote.proposals.length; i++) {
            if (vote.proposals[i].voteCount > winningVoteCount) {
                winningVoteCount = vote.proposals[i].voteCount;
                winningProposalIndex = i;
            }
        }
    }

    function getWinnerName(uint voteIndex) public view returns (bytes32 winnerName) {
        return votes[voteIndex].proposals[getWinningProposal(voteIndex)].name;
    }
}