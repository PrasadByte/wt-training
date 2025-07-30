// Store voters: each with id, name, and if they voted
const voters: { id: number; name: string; hasVoted: boolean }[] = [];

// Store votes per candidate
const votes: { [candidate: string]: number } = {
  Alice: 0,
  Bob: 0,
};

// Function to register a new voter
function registerVoter(id: number, name: string): void {
  voters.push({ id: id, name: name, hasVoted: false });

  // Fixed: Use backticks for template literals
  console.log(`${name} registered successfully`);
}

// Function to allow a voter to vote for a candidate
function vote(voterId: number, candidate: string): void {
  // Find voter manually without using 'find'
  let voter: { id: number; name: string; hasVoted: boolean } | undefined = undefined;
  for (const v of voters) {
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
  console.log(`${voter.name} voted for ${candidate}`);
}

// Function to show the voting results
function showResults(): void {
  console.log("Vote Results:");

  for (const candidate in votes) {
    // Fixed: Use backticks here too
    console.log(`${candidate}: ${votes[candidate]}`);
  }
}

// ------------------- Example usage ------------------- //
registerVoter(1, "John");
registerVoter(2, "Emma");

vote(1, "Alice"); // John votes for Alice
vote(2, "Bob");   // Emma votes for Bob
vote(1, "Bob");   // John tries to vote again (should be rejected)

showResults();

// Prevent conflicts if this file is treated as a module
export {};
