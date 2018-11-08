const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this.appetizers;
  },
  set appetizers(appetizersIn) {
    this.appetizers = appetizersIn;
  },
   get mains() {
    return this.mains;
  },
  set mains(mainsIn) {
    this.mains = mainsIn
  },
   get desserts() {
    return this.desserts;
  },
  set desserts(dessertsIn) {
    this.desserts = dessertsIn;
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },


  // ================================================================



  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

      this._courses[courseName].push(dish);
    },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Soup', 3.25);
menu.addDishToCourse('appetizers', 'Pate', 4.75);
menu.addDishToCourse('mains', 'Steak', 10.25);
menu.addDishToCourse('mains', 'Burger', 10.50);
menu.addDishToCourse('mains', 'Pizza', 10.75);
menu.addDishToCourse('desserts', 'Ice Cream', 5.50);
menu.addDishToCourse('desserts', 'Cake', 5.70);
menu.addDishToCourse('desserts', 'Cheese', 7.50);

let meal = menu.generateRandomMeal();
console.log(meal);
