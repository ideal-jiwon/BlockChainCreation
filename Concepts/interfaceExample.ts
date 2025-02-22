// pros of using interface is that
// 1. it can be used as class
// 2. it combines the all interfaces under the same name

interface User {
    readonly name:string
}
interface Player extends User {

}

const stellar : Player = {
    name:"stellar"
}
