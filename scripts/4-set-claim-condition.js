import sdk from './1-initialize-sdk.js';
import { MaxUint256 } from "@ethersproject/constants";
import dotenv from "dotenv";
dotenv.config();


(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.EDITION_DROP_CONTRACT_ADDRESS, 'edition-drop');
    const claimConditions = [{
      startTime: new Date(),
      maxClaimable: 50_000,
      maxClaimablePerWallet: 1,
      price: 0,
      waitInSeconds: MaxUint256,
    }]
    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Successfully set claim condition!");
  } catch (err) {
    console.error("failed to create the new NFT", err);
  }
})()