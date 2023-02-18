import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();


(async () => {
  try {
    const token = await sdk.getContract(process.env.TOKEN_CONTRACT_ADDRESS, "token");
    const amount = 1_000_000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();
    console.log("✅ There now is", totalSupply.displayValue, "$KERMA in circulation");
  } catch (err) {
    console.error("Failed to print money", err);
  }
})();