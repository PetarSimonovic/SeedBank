import { GenericPlant } from './'

 export default function getSeed(seed) {

   switch(seed) {
     case "generic_plant":
        return {bloom: 1, leafColour: '#377F34', stemColour: '#499B4A', flowerColour: '#832134'}
     case "tulip":
        return {bloom: 2, leafColour: '#2D5A27', stemColour: '#567d46', flowerColour: '#ff878d'}

     default:
      return
   }

}
