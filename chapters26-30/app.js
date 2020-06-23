// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var a = +(prompt("enter positive integer/floating point number--! "))
if (a > 0){
    document.write("number: "+a,"<br>");
    document.write("Round: "+Math.round(a),"<br>");
    document.write("floor value: "+Math.floor(a),"<br>");
    document.write("ceil value: "+Math.ceil(a),"<br>");
}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 
var b = +(prompt("enter negative floating point number--! "))
if (b < 0) {
    document.write("number: "+b,"<br>");
    document.write("Round: "+Math.round(b),"<br>");
    document.write("floor value: "+Math.floor(b),"<br>");
    document.write("ceil value: "+Math.ceil(b),"<br>");
}

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var num = -5;
document.write("the absolute value of ",num," is ",Math.abs(num));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.
var numb= 7;
for ( var i =0; i<2;i++){
    document.write("<br> Dice value : ",Math.random(numb));
}

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser:

var numb= 3;
var nn= Math.random(numb);
var nn0= Math.random(numb);
for ( var i =0; i<2;i++){
    if (nn==1 ){
        document.write("<br> ",nn);
        document.write("<br> random coin value: tails ");
    }
    else if ( nn0 == 2){
        document.write("<br> ",nn0);
        document.write("<br> random coin value : heads");
    }
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
var numb= 100;
var nn1= Math.random(numb);
document.write('Random Number between 1 and 100 is : ',nn1);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms 
var qwq = prompt("Enter your Weight please--?")
document.write("The weight of user is : ",qwq);


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user
var wwq = prompt("Enter your Number please--?")
var nn1= Math.random(numb);
while (true)
{  if(wwq != nn1){
    alert("please try again")
    var wwq = prompt("Enter your Number please--?")
}
else if (wwq == nn1){
    alert( "you guessed it right !")
    break;
}
}
