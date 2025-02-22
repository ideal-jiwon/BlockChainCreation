abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string
    ){}
    //method to get FullName
    getFullName(){
        //implementation of the method
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {

}
const stellar = new Player("Stellar","Mok","dongko")

stellar.getFullName()
