// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var ne = prompt("enter your first name");
var neq = prompt("enter your first name");
document.write("Welcome to JS World , my dear friend : ",ne+neq);


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var ne1 = prompt("enter your mobile model");
var qq= "My favourite moible  model is :"+ ne1;
var ee = qq.length();
document.write("My favourite moible  model is :"+ ne1,"<br>Length Of String: "+ee);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
var wwe= "Pakistani";
var qw= wwe.indexOf("n");
document.write("String : "+wwe,"<br> Index of 'n' : "+qw);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var wwe= "Hello World";
var qw= wwe.lastIndexOf("l");
document.write("String : "+wwe,"<br>Last Index of 'l' : "+qw);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var wwe= "Pakistani";
var qw= wwe.charAt(3);
document.write("String : "+wwe,"<br>Character at Index 3 : "+qw);

// 6. Repeat Q1 using string concat() method.
var ne = prompt("enter your first name");
var neq = prompt("enter your first name");
var ty="Welcome to JS World , my dear friend : "
document.write(ty.concat(ne,neq));

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var wwe= "Hyderabad";
var qw= wwe.replace("Hyder","Islam");
document.write("Original String : "+wwe,"<br>Replaced String : "+qw);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var qw= message.replace(/and/g,"&");
document.write(qw);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var st= "472"
document.write(parseInt(st));


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var ne = prompt("enter your first name");
document.write("user input: ",ne,"<br> Uppercase input: ",ne.toUpperCase());


// 11. Write a program that takes user input. Convert and
// show the input in title case.

var ne = prompt("enter your first name");
var neq= ne.slice(0,1).toUpperCase+ne.slice(1,);
document.write("user input: ",ne,"<br> Titlecase input: ",neq);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var ne = 35.56
var neq= ne.slice(0,2)+ne.slice(3,);
document.write("Number: ",ne,"<br> String: ",neq.toString());

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var ne = prompt("enter your user name");
for(var i=0; i==ne.length+1;i++){

    if (String.fromCharCode(33) == ne[i] ){
        document.write("please enter a user name")
        alert("please enter a user name")
        break
    }
    else if (String.fromCharCode(44) == ne[i] ){
        document.write("please enter a user name")
        alert("please enter a user name")
        break
    }
    else if (String.fromCharCode(46) == ne[i] ){
        document.write("please enter a user name")
        alert("please enter a user name")
        break
    }
    else if (String.fromCharCode(64) == ne[i] ){
        document.write("please enter a user name")
        alert("please enter a username")
        break
    }
    
}
alert('user name is correct')
