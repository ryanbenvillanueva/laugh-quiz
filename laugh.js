// Directions:
// Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

// laugh(3);
// Returns: hahaha!

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    var ha = "";
    for (var i = 1; i <= num; i++) {
        ha += "ha";
    }
    return (ha + "!");
}

console.log(laugh(10));