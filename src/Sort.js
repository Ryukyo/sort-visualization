class Sort {
  constructor(array) {
    this.array = array;
  }
  *sort() {
    let copyOfArray = this.array;

    for (let i = 1; i < copyOfArray.length; i++) {
      let j = i - 1;
      let curEl = copyOfArray[i];
      while (j >= 0 && copyOfArray[j] > curEl) {
        copyOfArray[j + 1] = copyOfArray[j];
        j--;
        yield copyOfArray;
      }
      copyOfArray[j + 1] = curEl;
    }
    return copyOfArray;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
