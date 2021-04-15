export interface Airquality{

    co:number
    no2:number
    o3:number
    so2:number
    pm2_5:number
    pm10:number
    //@JsonProperty<string>('us-epa-index')
    
    us_epa_index:number
    //@JsonProperty<string>('gb-defra-index')
    gb_defra_index:number
    
}
