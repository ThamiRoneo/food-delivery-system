# Food Delivery System (OOP in JavaScript)

A simple Food Delivery System built with JavaScript using Object-Oriented Programming (OOP) principles. This project demonstrates classes, inheritance, encapsulation, abstraction, and polymorphism.

## Features

- Create different types of food items (Pizza, Burger, Drink, and Sandwich)
- Store information about each food item with type-specific properties
- Add and remove food items from an order
- Calculate food total, delivery fees, and final order total
- Display a clear order summary
- Input validation for prices (prevents invalid/negative prices)
- Different delivery fees per food type

## OOP Principles Demonstrated

### 1. Encapsulation
- The `FoodItem` class uses a private property `#price` to prevent direct access to sensitive price data
- Price can only be accessed and modified through controlled methods (`getPrice()` and `setPrice()`)
- Invalid prices are automatically handled and set to 0

### 2. Inheritance
- `Pizza`, `Burger`, `Drink`, and `Sandwich` all inherit from the `FoodItem` parent class
- Common functionality (name, price management) is shared through the parent class
- No code duplication across food type classes

### 3. Abstraction
- Users interact with simple methods like `getPrice()`, `getDeliveryFee()`, `addItem()`, etc.
- Internal implementation details (calculations, price validation) are hidden
- The complexity of different food types is abstracted away

### 4. Polymorphism
- The `getDeliveryFee()` and `getFoodType()` methods are overridden in each subclass
- The same method call produces different results depending on the food type
- Each food type determines its own delivery fee and type name

## Classes

| Class | Description | Specific Properties |
|---|---|---|
| `FoodItem` | Parent class for all food items | `name`, private `#price` |
| `Pizza` | Pizza food type | `size` |
| `Burger` | Burger food type | `pattyCount` |
| `Drink` | Drink food type | `sizeInMl` |
| `Sandwich` | Additional food type | `breadType` |
| `Order` | Manages multiple food items in an order | `items` array |

## Delivery Fees

| Food Type | Delivery Fee |
|---|---|
| Pizza | R 25.00 |
| Burger | R 15.00 |
| Drink | R 5.00 |
| Sandwich | R 10.00 |

## Usage

### Running the Application

```bash
node thami_sithole_oop.js
```

### Example Usage

```javascript
// Create food items
const pizza = new Pizza('Margherita', 85.5, 'Large');
const burger = new Burger('Cheese Burger', 55, 2);
const drink = new Drink('Coke', 25, 500);

// Create an order and add items
const order = new Order();
order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);

// Display order summary
order.displaySummary();
```

### Order Summary Output

```
Food Delivery Order    Price     Delivery Fee
Pizza (Margherita)     R 85.50    R 25.00
Burger (Cheese Burger) R 55.00    R 15.00
Drink (Coke)           R 25.00    R 5.00
TOTAL                                  R 210.50
```

## Testing

The application includes built-in tests that demonstrate:

- ✅ Food items can be created
- ✅ Food item information can be accessed via methods
- ✅ Invalid prices are handled appropriately (set to 0)
- ✅ Different food types can be created
- ✅ Food items can be added to an order
- ✅ Food items can be removed from an order
- ✅ Delivery fees are calculated correctly
- ✅ Different food types produce different delivery fees (polymorphism)
- ✅ The final order total is calculated correctly
- ✅ Additional food type (Sandwich) works correctly

## Requirements Met

- [x] Use JavaScript
- [x] Use classes and objects
- [x] Use constructors and methods
- [x] Use inheritance
- [x] Use private properties where appropriate
- [x] Use method overriding where appropriate
- [x] Use arrays to manage multiple food items
- [x] Use loops and conditional logic
- [x] Demonstrate Encapsulation, Inheritance, Abstraction, and Polymorphism
- [x] Calculate prices, delivery fees, and final order total
- [x] Display order information in a clear summary

## Author

Thami Sithole
