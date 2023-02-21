import sdk from './1-initialize-sdk.js';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: 'AgoraDAO',
      voting_token_address: process.env.TOKEN_CONTRACT_ADDRESS,
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });
    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (error) {
    console.error("Failed to deploy vote contract", error);
  }
})()