import { Location } from './location';
import { Current } from './current';

export class ReturnCurrentResult {
    public location: Location;
    public current: Current;
    constructor(){
        this.location = new Location();
        this.current = new Current();
    }
}