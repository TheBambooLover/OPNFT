import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import type {NextPage} from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const address = useAddress();
    const contractAddress = "DIRECICÓN_DE_CONTRATO"

    const { contract } =useContract(contractAddress, "edition-drop");

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Optimism NFT</h1>
                <Web3Button
                    contractAddress={contractAddress}
                    action={(contract) => contract.erc1155.claim(0, 1)} //0 es el ID del token. 1 es la cantidad que minteará el botón.
                >Claim NFT</Web3Button>
            </main>
        </div>
    );
};

export default Home;
