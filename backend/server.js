const express = require("express"); // Import express
const app = express(); //Instantiate a new instance of express

//Create a new endpoint on the root route
app.get("/", function (request, response) {

// Send back to the client "Hello world"
response.send("Welcome to Chef Marco's Italian Bistro!").end();
});



app.get("/menu/:menuItem", function(request,response) {
    const menu = [
 {id: 1, dish: "Baked Shrimp Scampi", price: 20},
 {id: 2, dish: "Chicken Parmigiana", price: 14},
 {id: 3, dish: "Margherita Pizza", price: 17},
 {id: 4, dish: "Penne with Vodka Sauce", price: 18}
];
const menuItemParam = request.params.menuItem.toLowerCase();

const item = menu.find(entry => entry.dish.toLowerCase().include(menuItemParam));
if (item){
    response.json(item);
}else{
    response.status(404).send("Menu item not found.");
}
});

//Tell the express app that you want it to listen on port 8080 of your computer
app.listen(8080, function () {

    //This function gets executed when the app starts listening
    console.log("Server is listening on 8080");
});
