import { AirQuality } from "./air-quality";
import { Condition } from "./condition";

export class Current {
    public last_updated_epoch: number;
    public last_updated: string;
    public temp_c: number;
    public temp_f: number;
    public is_day: number;
    public condition: Condition;
    public wind_mph: number;
    public wind_kph: number;
    public wind_degree: number;
    public wind_dir: string;
    public pressure_mb: number;
    public pressure_in: number;
    public precip_mm: number;
    public precip_in: number;
    public humidity: number;
    public cloud: number;
    public feelslike_c: number;
    public feelslike_f: number;
    public vis_km: number;
    public vis_miles: number;
    public uv: number;
    public gust_mph: number;
    public gust_kph: number;
    public air_quality: AirQuality;
    constructor(){
        this.last_updated_epoch = 0,
        this.last_updated = '',
        this.temp_c = 0,
        this.temp_f = 0,
        this.is_day = 0,
        this.condition = new Condition(),
        this.wind_mph = 0,
        this.wind_kph = 0,
        this.wind_degree = 0,
        this.wind_dir = '',
        this.pressure_mb = 0,
        this.pressure_in = 0,
        this.precip_mm = 0,
        this.precip_in = 0,
        this.humidity = 0,
        this.cloud = 0,
        this.feelslike_c = 0,
        this.feelslike_f = 0,
        this.vis_km = 0,
        this.vis_miles = 0,
        this.uv = 0,
        this.gust_mph = 0,
        this.gust_kph = 0,
        this.air_quality = new AirQuality()
    }
};