import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from 'fs';

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: 'AgoraDAO Membership',
      description: 'A DAO for better cities',
      image: readFileSync('scripts/assets/agora.png'),
      primary_sale_recipient: AddressZero,
    });

    const editionDrop = await sdk.getContract(editionDropAddress, 'edition-drop');
    const metadata = await editionDrop.metadata.get();

    console.log("📦 Edition drop deployed at:", editionDropAddress);
    console.log("📦 Edition drop metadata:", metadata);
  } catch(err) {
    console.log("🛑 Error deploying editionDrop contract:", err);
    process.exit(1);
  }
})()