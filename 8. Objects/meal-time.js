// MEAL TIME

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {

  },
  set appetizers(appetizersIn) {

  },
   get mains() {

  },
  set mains(mainsIn) {

  },
   get desserts() {

  },
  set desserts(dessertsIn) {

  },
  get _courses() {
    return {appetizers: this._courses.appetizers, mains: this._courses.mains, desserts: this._courses.desserts};
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      dishName, dishPrice
    }
    this._courses[courseName].push(dish);
  }
};
