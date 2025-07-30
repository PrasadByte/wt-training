"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Store voters: each with id, name, and if they voted
var voters = [];
// Store votes per candidate
var votes = {
    Alice: 0,
    Bob: 0,
};
// Function to register a new voter
function registerVoter(id, name) {
    voters.push({ id: id, name: name, hasVoted: false });
    // Fixed: Use backticks for template literals
    console.log("".concat(name, " registered successfully"));
}
// Function to allow a voter to vote for a candidate
function vote(voterId, candidate) {
    // Find voter manually without using 'find'
    var voter = undefined;
    for (var _i = 0, voters_1 = voters; _i < voters_1.length; _i++) {
        var v = voters_1[_i];
        if (v.id === voterId) {
            voter = v;
            break;
        }
    }
    // Check if voter exists
    if (!voter) {
        console.log("Voter not found");
        return;
    }
    // Check if the voter has already voted
    if (voter.hasVoted) {
        console.log("You already voted!");
        return;
    }
    // Check if the candidate exists in the vote list
    if (!(candidate in votes)) {
        console.log("Candidate not found");
        return;
    }
    // Cast the vote and update hasVoted
    votes[candidate]++;
    voter.hasVoted = true;
    // Fixed: Use backticks for template literals
    console.log("".concat(voter.name, " voted for ").concat(candidate));
}
// Function to show the voting results
function showResults() {
    console.log("Vote Results:");
    for (var candidate in votes) {
        // Fixed: Use backticks here too
        console.log("".concat(candidate, ": ").concat(votes[candidate]));
    }
}
// ------------------- Example usage ------------------- //
registerVoter(1, "John");
registerVoter(2, "Emma");
vote(1, "Alice"); // John votes for Alice
vote(2, "Bob"); // Emma votes for Bob
vote(1, "Bob"); // John tries to vote again (should be rejected)
showResults();
