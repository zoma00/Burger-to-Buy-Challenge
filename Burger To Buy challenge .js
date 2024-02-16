/*
Burger To Buy Challenge in JavaScript:

1. Define a menu of burger items with corresponding prices. For example:
   - Cheeseburger: $5
   - Bacon Burger: $6
   - Veggie Burger: $4
   - Chicken Burger: $5

2.  Display the menu options to the user.

3. Prompt the user to select a burger item they want to buy. Allow them to continue selecting items until they indicate they are finished.

4. Keep track of the user's selected items and calculate the total price based on the sum of the prices of the selected items.

5. Once the user finishes selecting items, display their order with the list of items and the total price.

6. This challenge can be a fun exercise for practicing user input, data manipulation, and simple calculations in JavaScript.

*/
/* your code is below */
const menu = {
    "Beef burger": 3,
    "Bacon burger" :5,
    "Chicken burger" :2,
    "Superstar burger": 4
};

// This function for console log display with for loop in the menu to display all of the items.
//Display the menu options to the user
    function displayMenu() {
        console.log("menu: ");
        for (let item in menu) {
            console.log(`${item}:$${menu[item]}`)
        }
    }

//function to calculate total price
function calculateTotalPrice(order) {
   let total = 0;
    for(item of order){
        total += menu[item];
    }
    return total;
}

function burgerToBuy() {
    let order = [];
    let buying = true;
    
     displayMenu();

    while(buying) {
        let choice = prompt("Enter the burger you want to buy or(type 'finish') to end your order.")
        if(choice.toLowerCase() === 'finish') {
            buying = false;
        }else if (menu.hasOwnProperty(choice)) {
            order.push(choice);
        }else {
            console.log("invalid choice. please select a burger from the menu.");
        }
       
    }
    const totalprice = calculateTotalPrice(order);
    console.log(`Your order: $${order.join(", ")}`);
    console.log(`Total price: $${totalprice}`);

}


//run 
burgerToBuy(); 
















/*
let order = [];
let item1 = ('Beef burger');
let item2 = ("Chicken burger");

order.push(item1);
order.push(item2);
console.log (calculateTotalPrice(order));
*/