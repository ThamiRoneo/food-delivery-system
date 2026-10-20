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

class Order {
constructor() {
  this.items = [];
}

// Add food item to order
addItem(foodItem) {
  if (foodItem instanceof FoodItem) {
    this.items.push(foodItem);
  }
}

// Remove food item from order (if it exists)
removeItem(foodItem) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i] === foodItem) {
      this.items.splice(i, 1);
      break;
    }
  }
}

// Calculate total cost of food items
calculateFoodTotal() {
  let total = 0;
  for (let i = 0; i < this.items.length; i++) {
    total += this.items[i].getPrice();
  }
  return total;
}

// Calculate total delivery fees
calculateDeliveryFees() {
  let totalFees = 0;
  for (let i = 0; i < this.items.length; i++) {
    totalFees += this.items[i].getDeliveryFee();
  }
  return totalFees;
}

// Calculate final order total
calculateFinalTotal() {
  return this.calculateFoodTotal() + this.calculateDeliveryFees();
}

// Get all items
getItems() {
  return this.items;
}

// Display order summary
displaySummary() {
  console.log('Food Delivery Order             Price     Delivery Fee');
  for (let i = 0; i < this.items.length; i++) {
    const item = this.items[i];
    const name = `${item.getFoodType()} ('${item.name}')`;
    const price = `R ${item.getPrice().toFixed(2)}`;
    const fee = `R ${item.getDeliveryFee().toFixed(2)}`;
    console.log(`${name.padEnd(30)} ${price.padEnd(11)} ${fee}`);
  }
  console.log(`TOTAL                                      R ${this.calculateFinalTotal().toFixed(2).padStart(1)}`);
}
}

// Additional food type to demonstrate inheritance further (Sandwich)
class Sandwich extends FoodItem {
constructor(name, price, breadType) {
  super(name, price);
  this.breadType = breadType;
}

getFoodType() {
  return 'Sandwich';
}

// Override delivery fee for Sandwich (polymorphism)
getDeliveryFee() {
  return 10;
}
}

// Testing functionality
function runTests() {
console.log('=== Testing Food Delivery System ===\n');

// Test food item creation
const pizza = new Pizza('Margherita', 85.5, 'Large');
const burger = new Burger('Cheese Burger', 55, 2);
const drink = new Drink('Coke', 25, 500);
const sandwich = new Sandwich('Chicken Mayo', 45, 'Whole Wheat');

console.log('1. Food items created:');
console.log('   -', pizza.getFoodType(), ':', pizza.name, '(Size:', pizza.size + ')');
console.log('   -', burger.getFoodType(), ':', burger.name, '(Patties:', burger.pattyCount + ')');
console.log('   -', drink.getFoodType(), ':', drink.name, '(Size:', drink.sizeInMl + 'ml)');
console.log('   -', sandwich.getFoodType(), ':', sandwich.name, '(Bread:', sandwich.breadType + ')');
console.log('');

// Test accessing food item information
console.log('2. Food item information accessed:');
console.log('   Pizza price: R', pizza.getPrice().toFixed(2));
console.log('   Burger price: R', burger.getPrice().toFixed(2));
console.log('   Drink price: R', drink.getPrice().toFixed(2));
console.log('   Sandwich price: R', sandwich.getPrice().toFixed(2));
console.log('');

// Test invalid price handling
console.log('3. Invalid prices handled:');
const invalidItem = new FoodItem('Invalid', -50);
console.log('   Price set to -50:', invalidItem.getPrice());
const invalidItem2 = new FoodItem('Invalid2', 'abc');
console.log('   Price set to "abc":', invalidItem2.getPrice());
console.log('');

// Test different food types produce different delivery fees
console.log('4. Delivery fees (polymorphism):');
console.log('   Pizza delivery fee: R', pizza.getDeliveryFee().toFixed(2));
console.log('   Burger delivery fee: R', burger.getDeliveryFee().toFixed(2));
console.log('   Drink delivery fee: R', drink.getDeliveryFee().toFixed(2));
console.log('   Sandwich delivery fee: R', sandwich.getDeliveryFee().toFixed(2));
console.log('   Different fees demonstrate polymorphism');
console.log('');

// Create order and add items
const order = new Order();
order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);
console.log('5. Items added to order:');
console.log('   Order has', order.getItems().length, 'items');
console.log('');

// Test removing item
order.removeItem(drink);
console.log('6. Item removed from order:');
console.log('   Order has', order.getItems().length, 'items after removal');
order.addItem(drink); // add back for total calculation
console.log('');

// Test calculations
console.log('7. Calculations:');
console.log('   Food total: R', order.calculateFoodTotal().toFixed(2));
console.log('   Delivery fees: R', order.calculateDeliveryFees().toFixed(2));
console.log('   Final total: R', order.calculateFinalTotal().toFixed(2));
console.log('');

// Test order summary display
console.log('8. Order Summary:');
order.displaySummary();
}

// Run tests
runTests();
