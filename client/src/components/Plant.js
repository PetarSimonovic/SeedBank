import seedBankSoil from './seedBankSoil.png';
import seedBankSprout1 from './seedBankSprout1.png'
import seedBankSprout2 from './seedBankSprout2.png'
import seedBankFlower from './seedBankFlower.png'

export default class Plant {


    constructor(id, date = this.setDate(), growth = 0) {
      this.name = "Generic Plant"
      this.price = 1
      this.id = id
      this.date = date
      this.growth = growth
      this.image = seedBankSoil
    }

    setDate() {

      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      return Number(`${year}${month}${day}`)


    }

    updateImage() {
     console.log("Updating image")
     const imageBank = [seedBankSoil, seedBankSprout1, seedBankSprout2, seedBankFlower]
     if (this.growth < imageBank.length) {
        this.image = imageBank[this.growth]
     }

    }

}

// module.exports = Plant;
