import * as crypto from "crypto";

interface BlockShape {
    
    hash:string;
    prevHash:string;
    height:number;
    data:string;
}

class Block implements BlockShape{
    public hash:string;
    constructor(
        public prevHash: string,
        public height: number, //signature
        public data: string
        ){
            this.hash = Block.calculateHash(prevHash, height, data);

        }
        static calculateHash(prevHash:string, height:number, data:string){
            const toHash = `${prevHash}${height}${data}`;
            return crypto.createHash("sha256").update(toHash).digest
            ("hex");

        }
}

class Blockchain {
    private blocks: Block[] = [];

    consturctor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length===0)return "";
        return this.blocks[this.blocks.length].hash;
    }
    public addBlock(data:string){
        const newblock = new Block(
            this.getPrevHash(), 
            this.blocks.length+1,
            data
        );
        this.blocks.push(newblock);
    }
    public getBlocks(){
        return this.blocks; //secure the problem
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("frist");
blockchain.addBlock("frist");
blockchain.addBlock("frist");

console.log(blockchain.getBlocks());
