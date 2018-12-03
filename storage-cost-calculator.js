

class Company {
  constructor(companyName) {
    this._companyName = companyName;
    this._location = location;
  }

  get companyName() {
    return this._companyName;
  }

  get location() {
    return this._location;
  }
}


class EightWeeks extends Company {
  constructor(week, year, month) {
    super(companyName);
    this._week = week;
    this._year = year;
    this._month = month;
  }

  get week() {
    return this._week;
  }

  get year() {
    const yearlyCost = (this._week * 44) += (this._week * 8);
    return this.yearlyCost;
  }

  get month() {
    return this._year / 12;
  }
}

const accessHornsey = new EightWeeks ('17.77', '', '');
console.log(EightWeeks);
