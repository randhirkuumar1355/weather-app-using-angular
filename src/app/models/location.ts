export class Location {
    public name: string;
    public region: string;
    public country: string;
    public lat: number;
    public lon: number;
    public tz_id: string;
    public localtime_epoch: number;
    public localtime: number;
    constructor(){
        this.name = '';
        this.country = '';
        this.region = '';
        this.lat = 0;
        this.lon = 0;
        this.tz_id = '';
        this.localtime_epoch = 0;
        this.localtime = 0;
    }
}