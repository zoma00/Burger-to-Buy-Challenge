# Burger-to-Buy-Challenge

/*
Burger To Buy Challenge:
1. Define a menu of burger items with corresponding prices. For example:
   - Cheeseburger: $5
   - Bacon Burger: $6
   - Veggie Burger: $4
   - Chicken Burger: $5

2. Display the menu options to the user.

3. Prompt the user to select a burger item they want to buy. Allow them to continue selecting items until they indicate they are finished.

4. Keep track of the user's selected items and calculate the total price based on the sum of the prices of the selected items.

5. Once the user finishes selecting items, display their order with the list of items and the total price.

6. This challenge can be a fun exercise for practicing user input, data manipulation, and simple calculations in JavaScript.


code Explaination:
-------------------
The code you provided is a JavaScript program that simulates a burger ordering system. 
Here's a breakdown of the key parts you mentioned:
---------------------------------------------------
1. `if (choice.toLowerCase() === 'finish')`: 
This condition checks if the user input for the burger choice is 'finish' in lowercase. If the user types 'finish' in any case 
(uppercase or lowercase), it will be converted to lowercase using `toLowerCase()` before comparison.

2. `else if (menu.hasOwnProperty(choice))`: This line checks if the user's input choice exists in the `menu` object.
If the choice matches one of the keys in the `menu` object, it is considered a valid burger option, and it is added to the 
`order` array for the user's order.

In summary, the code ensures that the user can cancel the order by typing 'finish' in any case and only allows adding valid 
burger choices from the menu to the order.
*/



// Define burger menu items with prices
const menu = {
    "Cheeseburger": 5,
    "Bacon Burger": 6,
    "Veggie Burger": 4,
    "Chicken Burger": 5
};

// Function to display menu options
function displayMenu() {
    console.log("Menu:");
    for (let item in menu) {
        console.log(`$${item}: $${menu[item]}`);  //for in to iterate over enumerable properties of an object.
    }
}

// Function to calculate total price
function calculateTotalPrice(order) {
    let total = 0;
    for (let item of order) {
        total += menu[item];     //Used to iterate over the values of an iterable object like an array, string, map, set, etc.
    }
    return total;
}

// Main function to run the challenge
function burgerToBuyChallenge() {
    let order = [];
    let buying = true;

    displayMenu();

    while (buying) {
        let choice = prompt("Enter the burger you want to buy (or type 'finish' to complete your order):");

        if (choice.toLowerCase() === 'finish') {
            buying = false;
        } else if (menu.hasOwnProperty(choice)) {
            order.push(choice);
        } else {
            console.log("Invalid choice. Please select a burger from the menu.");
        }
    }

    const totalPrice = calculateTotalPrice(order);
    console.log(`Your order: ${order.join(", ")}`);
    console.log(`Total price: $${totalPrice} USD`);

    
}

// Run the challenge
burgerToBuyChallenge();


/*
Diffs printing in the console:
-------------------------------
    console.log(`Your order: ${order.join(", ")}`);
        console.log(`Total price: $${totalPrice} USD`);
console.log("Your order: " + order.join(", "));
console.log("Total price: $" + totalPrice);

Diffs:
-----------
Both template literals `${}` and string concatenation `+` are commonly used in JavaScript 
for string interpolation. 
However, template literals are generally considered more modern and preferred by many 
professional developers for several 
reasons:

1. **Readability**: Template literals make the code more readable by clearly indicating 
where variables or expressions are
inserted into the string.

2. **Simplicity**: Template literals simplify the process of including variables and 
expressions within strings without the
need for explicit concatenation.

3. **Multiline strings**: Template literals allow for multiline strings, making it easier 
to format complex strings.

4. **Expression evaluation**: Template literals can directly evaluate expressions within `${}`
which can be very handy 
for complex string manipulations.

For these reasons, many professional developers tend to prefer using template literals for 
string interpolation in JavaScript.

*/

/*
When working with loops in JavaScript, the `for...in` loop is used to iterate over the enumerable 
properties of an object, while the `for...of` loop is used to iterate over the values of an iterable
object like an array.

Here's a brief explanation of the differences:
------------------------------------------------
1. `for...in` loop:
   - Used to iterate over the enumerable properties of an object.
   - Iterates over the keys or property names of an object.
   - Typically used with objects, not arrays, as it iterates over the object's properties.
   - Example: 
     ```javascript
     for (let key in object) {
         // Access object[key]
     }
     ```

2. `for...of` loop:
---------------------
   - Used to iterate over the values of an iterable object like an array, string, map, set, etc.
   - Iterates over the values directly rather than the keys. (very important).

   
   - Works with iterable objects that have a Symbol.iterator property.
   - Example:
     ```javascript
     for (let value of iterable) {
         // Access value
     }
     ```

In your code snippet, you are using `for...in` loop in the `displayMenu` 
function to iterate over the keys of the `menu` object. You can use `for...of` loop in
the `totalPrice` function to iterate over the values in the `order` 
array.
*/
