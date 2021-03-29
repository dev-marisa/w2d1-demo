var tortillaOptions = ["crunchy tortilla", "soft tortilla", "dorito tortilla", "blue corn tortilla", "lettuce wrap", "cotton candy"];
var proteinOptions = ["crab cakes", "hot dogs", "carne asada", "tinga chicken", "shrimp", "octopus", "tuna", "talapia", "jerk chicken", "saltfish", "tofu", "eel", "salmon", "fried puffin"];
var cheeseOptions = ["queso quesadilla", "cotija cheese", "queso blanco", "blue cheese", "cheeto dust", "cheddar", "gouda", "juusto", "ez cheese"];
var toppingOptions = ["crema", "pico de gallo", "guacamole", "salsa verde", "lettuce", "beans", "noodles", "jelly beans", "chocolate", "mustard", "popcorn", "ice cream", "flan", "nutella", "mayo", "habanero peppers"];

function randomOption(options) {
    var randomIndex = Math.floor(options.length * Math.random());
    return options[randomIndex];
}

function getRandomizedTaco() {
    var taco = {};
    taco.tortilla = randomOption(tortillaOptions);
    taco.protein = randomOption(proteinOptions);
    taco.cheese = randomOption(cheeseOptions);
    var tempToppings = [];
    for(var i=0; i<3; i++) {
        tempToppings.push(randomOption(toppingOptions));
    }
    taco.toppings = tempToppings;
    return taco;
}

console.log(getRandomizedTaco());