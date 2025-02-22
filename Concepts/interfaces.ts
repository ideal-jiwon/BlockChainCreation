type Team = "red" | "blue"|"yellow" //constraint specific value or 
type Health = 1|2|3|4
//type can be anything -> more varied
//type can be array/ string/number or specific things like red, blue or yellow
//interface is to specify the shape of the object


//only one purpose for "interface " : to shape of the object 

interface Player {
    nickname: string,
    health: Healhth,
    team : Team
}

const stellar : Player = {
    nickname: "ddonko",
    team : "red",
    health: 1
}

type Healhth = number
type Nickname = string
type Friends = Array<string>
