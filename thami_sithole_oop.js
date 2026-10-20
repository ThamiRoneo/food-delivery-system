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

  