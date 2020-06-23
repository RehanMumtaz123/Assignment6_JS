// 1. Write a function that displays current date & time in your
// browser.
function nw(){
    var a =  new Date();
    document.write(a);
}
nw()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name
function nm(){
    var a = prompt("enter first name");
    var b= prompt("enter last name");
    document.write("welcome",a+b);
}
nm()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.`
function sm(){
    var a = +(prompt("enter first number"));
    var b= +(prompt("enter last number"));
    document.write("sum of numbers is",a+b);
}
sm()

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function sw(a,b,c){
    var total= acb;
    document.write("calculation:",total);
}
sw(6,7,'+');
// 5. Write a function that squares its argument
function sq(a){
      document.write("squares is:",a*a);
}
sq(2)

// 6. Write a function that computes factorial of a number.
function factl(a){
    if ( a==0 || a==1){
        return 1
    }
    else{
        return a*factl(a-1);
    }
}
document.write("factorial of 12 is:",factl(12));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function count(w,q){
    for ( var w ; w<q; w++)
    {
        document.write(w);

}
}
