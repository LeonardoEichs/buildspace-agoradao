import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.EDITION_DROP_CONTRACT_ADDRESS, 'edition-drop');
    await editionDrop.createBatch([
    {
      name: 'AgoraDAO Membership',
      description: 'This NFT will give you access to AgoraDAO!',
      image: readFileSync('scripts/assets/agora-coin.png'),
    }
    ])
    console.log("📦 NFT created");
  } catch (err) {
    console.error("failed to create the new NFT", err);
  }
})();