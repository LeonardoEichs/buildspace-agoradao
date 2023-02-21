import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const vote = await sdk.getContract(process.env.VOTE_CONTRACT_ADDRESS, "vote");
    const token = await sdk.getContract(process.env.TOKEN_CONTRACT_ADDRESS, "token");
    await token.roles.grant("minter", vote.getAddress());
    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    const vote = await sdk.getContract(process.env.VOTE_CONTRACT_ADDRESS, "vote");
    const token = await sdk.getContract(process.env.TOKEN_CONTRACT_ADDRESS, "token");
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Number(ownedAmount) / 100 * 90;

    await token.transfer(
      vote.getAddress(),
      percent90
    ); 

    console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})()