//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Allergies {
  constructor(value) {
    this.allergies = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"];
    this.convertBinary = (value >>> 0).toString(2);
  }

  list() {
    let allergiesList = [];
    for (let i = this.convertBinary.length - 1; i >= 0; i--) {
      if (this.convertBinary[i] == 1) {
        allergiesList.push(this.allergies[this.convertBinary.length - 1 - i]);
      }
    }

    return allergiesList;
  }

  allergicTo(item) {
    return this.list().includes(item);
  }
}
module.exports= {Allergies}
