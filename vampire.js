class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfParents = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfParents++;
    }

    return number;
  }
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let currentVampire = this;
    while (currentVampire.creator && vampire.creator) {
      currentVampire = currentVampire.creator;
      vampire = vampire.creator;
    }
    if (currentVampire.creator) {
      return false;
    }
    return true;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this.name === "root" || this === vampire) {
      return this;
    }
    let currentVampire = this;
    let commonVampires = {};
    while (currentVampire.creator) {
      commonVampires[currentVampire.name] = currentVampire.name;
      currentVampire = currentVampire.creator;
    }
    commonVampires[currentVampire.name] = currentVampire.name;

    while (vampire.creator) {
      if (commonVampires[vampire.name]) {
        return vampire;
      }
      vampire = vampire.creator;
    }
    if (commonVampires[vampire.name]) {
      return vampire;
    }


    return null;
  }
}

module.exports = Vampire;

