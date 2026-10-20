class FoodItem {
  #price; // private property for price (encapsulation)

  constructor(name, price) {
    this.name = name;
    this.setPrice(price);
  }

  // Get price
  getPrice() {
    return this.#price;
  }

  // Set price with validation
  setPrice(price) {
    if (typeof price !== 'number' || isNaN(price) || price < 0) {
      this.#price = 0; 
    } else {
      this.#price = price;
    }
  }

// Calculate delivery fee - to be overridden by subclasses (abstraction + polymorphism)
getDeliveryFee() {
  return 0;
}

// Get food type - to be overridden by subclasses
getFoodType() {
  return 'FoodItem';
}
}

// Pizza subclass
class Pizza extends FoodItem {
constructor(name, price, size) {
  super(name, price);
  this.size = size;
}

getFoodType() {
  return 'Pizza';
}

// Override delivery fee for Pizza (polymorphism)
getDeliveryFee() {
  return 25;
}
}

// Burger subclass
class Burger extends FoodItem {
constructor(name, price, pattyCount) {
  super(name, price);
  this.pattyCount = pattyCount;
}

getFoodType() {
  return 'Burger';
}

// Override delivery fee for Burger (polymorphism)
getDeliveryFee() {
  return 15;
}
}

// Drink subclass
class Drink extends FoodItem {
constructor(name, price, sizeInMl) {
  super(name, price);
  this.sizeInMl = sizeInMl;
}

getFoodType() {
  return 'Drink';
}

// Override delivery fee for Drink (polymorphism)
getDeliveryFee() {
  return 5;
}
}

