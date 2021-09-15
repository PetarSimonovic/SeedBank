import { GenericPlant } from './'

 export default function getSeed(seed) {

   switch(seed) {
     case "generic_plant":
        return new GenericPlant()
     default:
      return
   }

}
