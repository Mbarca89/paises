export interface Country {
    name: {
      common: string
    }
    translations:{
      spa:{
        common:string
      }
    }
    capital: string
    population: number
    region: string
    flags: {
      png: string
    }
    currencies: {
      [key: string]: {
        name: string
        symbol: string
      }
    }
    maps:{
      googleMaps: string
    }
    spanish:boolean
    custom:boolean
  }