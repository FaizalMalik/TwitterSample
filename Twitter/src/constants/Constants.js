
import { Platform } from 'react-native'

export const Constants = {


      //URL CONSTANTS
      BASE_URL : "https://api.twitter.com/1.1/search/tweets.json",
      AUTH_TOKEN : "Bearer AAAAAAAAAAAAAAAAAAAAAAKY9gAAAAAAhhvqbCTQNKBUaM0pLc4Co8Vmr0A%3DXHd3LcibYitbgX48JIXxCGPNb1JIpA47rjr53CtYQTeHB5DPdY",

    //CONSTRATIN CONSTANTS
      NAVBAR_HEIGHT : 64,
      STATUS_BAR_HEIGHT : Platform.select({ ios: 20, android: 24 }),
    
    //Color Constants 
    BASE_COLOR: 'rgb(27, 40, 54)',
    NAVBAR_COLOR: 'rgb(27, 42, 51)' , 
    SPINNER_COLOR: 'rgb(29, 161, 242)',
    ICON_COLOR: 'rgb(136, 153, 166)',
    GREEN_COLOR : 'rgb(23, 191, 99)',
     RED_COLOR : 'rgb(224, 36, 94)'
  
}
