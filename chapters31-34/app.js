// 1. Write a program that displays current date and time in
// your browser.
var a = new Date()
document.write(a)

// 2. Write a program that alerts the current month in words.
// For example December. 
var a = new Date()
var are=['January', 'febaruary','March','April','May','June'];
document.write(are[a.getMonth()]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var a = new Date()
var week=['Sunday', 'Monday','tuesday','wednesday','Thursday','Friday','Saturday'];
var slc= week[a.getDay()];
document.write(slc.slice(0,3));

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today
var a = new Date()
var week=['Sunday', 'Monday','tuesday','wednesday','Thursday','Friday','Saturday'];
var slc= a.getDay();
if ( slc == 0 || slc == 6 ){
    document.write("Its a fun day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
var a = new Date()
var slc= a.getDate();
if ( slc <=15  ){
    document.write("First fifteen days of the month”");
}
else if ( slc > 15 ){
    document.write("Last days of the month”");
}
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var a = new Date()
var slc= a.getTime();
document.write("Current Date: ",a,"<br>Elapsed Milliseconds since 1st jan 1970: ",slc,',<br>Elapsed minutes since 1st jan 1970: ',slc/60000);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var a = new Date()
var slc= a.Hours();
if ( slc > 0 || slc<13){
    document.write("Its's Am");
}
else if ( slc > 0 || slc>13){
    document.write("Its's Pm");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var laterDate= new Date("Thu Dec 31 2020 00:00:00 GMT+0500 (Pakistan Standard Time");
document.write("Later date: ",laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var laterDate= new Date("Mon June 18 2015 00:00:00 GMT+0500 (Pakistan Standard Time");
var a = new Date();
document.write("Later date: ",laterDate.getDate()-a.getDate());

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var a = new Date()
var b = a.setDate("Mon June 18 2015 00:00:00 GMT+0500 (Pakistan Standard Time)")

// var slc= a.getTime();
document.write("Current Date: ","<br>Elapsed seconds since June 18 2015: ",b.getTime());

