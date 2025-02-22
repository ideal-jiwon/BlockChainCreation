type Words = {
    //type Words can be an object as long as the key is string
    //declare the type and type of the properties is string
    [key:string]: string
}

class Dict {
    
        private words: Words 
        constructor(){
            this.words = {}
        }
        //use classes as a type
        add(word:Word){
            if(this.words[word.term]=== undefined){
                this.words[word.term] = word.def;
            }
        }

        getdef(term:string){
            return this.words[term]
        }
}

class Word {
    constructor(
        public readonly term:string, //add readonly if you want them to make it not to be overriden
        public readonly def:string,
    ){}
}

const kimchi = new Word("kimchi","korean traditional food");
const dict= new Dict();
dict.add(kimchi);
dict.getdef("kimchi");