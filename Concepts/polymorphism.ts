//ploymorphism allows us to use the placeholder type thru generics
interface SStorage<T> {
    //pre-defined typescript : Web Storage API
    //defind the new properties to the storage
    [key:string] : T 
}

class LocalStorage<T> {
    private storage : SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage={}
    }
}

const stringsStrorage = new LocalStorage <string>()
stringsStrorage.get("key")
stringsStrorage.set("hello","how are you")
const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("xxx");
booleansStorage.set("Hello", true);