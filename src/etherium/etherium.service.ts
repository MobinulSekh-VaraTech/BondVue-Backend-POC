import { Injectable } from '@nestjs/common';
import { ethers } from "ethers";
import * as contractDetails from './contracts/Demo.json';

@Injectable()
export class EtheriumService {
    constructor(){}

    private interacteWithNetwork() {
        const contractABI = contractDetails.abi;

        const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL + process.env.API_KEY);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

        const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, wallet);
        return contract;
    }

    async getValueFromNetwork() {
        const contract = this.interacteWithNetwork();
        let value = await contract.getter();
        value = ethers.utils.formatEther(value);
        return {
            "message": "Request Successful!",
            "value": `${value} Eth`
        }
    }

    async postValueToNetwork( body:any ) {
        const contract = this.interacteWithNetwork();
        await contract.setter(body.value);
        return {
            "message": "Value Updated!"
        }
    }
}
