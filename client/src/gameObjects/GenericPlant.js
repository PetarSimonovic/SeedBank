
import { setDate, createId } from '../functions'


export default class GenericPlant {

      constructor(key, date, position) {
        this.key = key
        this.type = "generic_plant"
        this.growth = 0
        this.bloom = 2
        this.date = date
        this.position = position
        this.leafColour = '#377F34'
        this.stemColour = '#499B4A'
        this.flowerColour = '#832134'
      }
}
