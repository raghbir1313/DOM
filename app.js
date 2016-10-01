// Variable & Operators
var a = 1;
var b = 2;

function add() {
    a++;
    console.log(a + b);
}
add();
// 9.
var a = 1;
var b = 2;

function add() {
    a--;
    console.log(a - b);
}
add();
//8.functions-Calling,Passing,Return:
//A.
function displyValue(param1, param2, param3) {

    return param1 + param2 + param3;
}
console.log(displyValue(1, 2, 3));
//B.
three parameters.
    //C.
function displyValue(param1, param2, param3) {

    alert(param1 + param2 + param3);
}
//D.
function displyValue(param1, param2, ) {

    alert(param1 + param2 + param3);
}
displyValue(1, 2)();
//F.
function displyValue(param1) {

    alert(param1 + param2 + param3);
}
displyValue(1)();

displyValue(1, 2, 3)();
///////If - Else...1.
var age = prompt("Enter the user age");
if (age <= 14) {
    alert('Not Allowed');

} else if (age == 50) {
    alert('Special Discount');
} else if (age > 14 && age < 65) {
    alert('Regular Price');
} else {
    alert("Enter a vaild age");
}
//////if else 2.
var age = prompt("user for age");
if (age == 14) {
    alert('coupon 1');
} else if (age == 21) {
    alert('coupon 2');
} else if (age == 30) {
    alert('coupon 3');
} else if (age == 50) {
    alert('coupon 4');
} else {
    alert('No Coupon');
}
/////if else 3.
var day = prompt('Enter a day');
if (day == 'Monday') {
    alert("Mondays, We serve Pasta");
} else if (day == 'Friday') {
    alert("Fridays, We serve Tacos");
} else {
    alert("Invalid Entry");
}
//////if else-4..
var year = prompt('Enter a year');
if (year == 2016) {
    alert('Ardaas Won The Oscar in 2016');
} else if (year == 2015) {
    alert('Sardar Ji-2 Won The Oscar in 2015');
} else if (year == 2014) {
    alert('Sradar Ji Won The Oscar in 2014');
} else if (year == 2013) {
    alert('Carry On Jatta Won The Oscar in 2013');
} else if (year == 2012) {
    alert("'Don' Won The Oscar in 2012");
} else if (year == 2011) {
    alert("'Titanic' Won The Oscar in 2011");
} else if (year == 2010) {
    alert("'Avatar' Won The Oscar in 2010");
} else if (year == 2009) {
    alert("'1984 Punjab' Won The Oscar in 2009");
} else if (year == 2008) {
    alert("'Angrez' Won The Oscar in 2008");
} else {
    alert('User to enter between 2008-2016')
}
//if-else 5.
var Grade = prompt('User to enter the Grade of a student');
if (Grade == 'A+') {
    console.log("Excellent");
} else if (Grade == 'A') {
    console.log("Good Job");
} else if (Grade == 'A-') {
    console.log("Average");
} else if (Grade == 'B') {
    console.log("Poor");
} else {
    console.log('Enter a valid Grade');
}
/// switch 1.
var age = prompt('User for age');
switch (age) {
    case "14":
        alert('coupon 1');
        break;
    case "21":
        alert('coupon 2');
        break;
    case "30":
        alert('coupon 3');
        break;
    case "50":
        alert('coupon 4');
        break;
    default:
        alert('No Coupon');
}
/////switch 2.
var day = prompt('Enter a day');
switch (day) {
    case "Monday":
        alert("Mondays, We serve Pasta");
        break;
    case "Friday":
        alert("Fridays, We serve Tacos");
        break;
    default:
        alert("Invalid Entry");
}
/////switch 3.
var year = prompt('Enter a year');
switch (year) {
    case "2016":
        console.log("'Ardaas' Won The Oscar in 2016");
        break;
    case "2015":
        console.log("'Sardar Ji-2' Won The Oscar in 2015");
        break;
    case "2014":
        alert("'Sradar Ji' Won The Oscar in 2014");
        break;
    case "2013":
        console.log("'Carry On Jatta' Won The Oscar in 2013");
        break;
    case "2012":
        console.log("'Don' Won The Oscar in 2012");
        break;
    case "2011":
        alert("'Titanic' Won The Oscar in 2011");
        break;
    case "2010":
        console.log("'Avatar' Won The Oscar in 2010");
        break;
    case "2009":
        console.log("'1984 Punjab' Won The Oscar in 2009");
        break;
    case "2008":
        console.log("'Angrez' Won The Oscar in 2008");
        break;
    default:
        alert('Enter a year between 2008-2016');
} ////switch 4.
var Grade = prompt('Enter a Grade of a student');
switch (Grade) {
    case "A+":
        console.log("Excellent");
        break;
    case "A":
        console.log("Good job");
        break;
    case "A-":
        console.log("Average");
        break;
    case "B":
        console.log("Poor");
        break;
    default:
        alert("Invalid Entry");
}
///// loops...
var x;
for (x = 0; x < 30; x++) {
    console.log("my name is Raghbir <br />");
}
//// or to print in 30 diff. lines
var x;
for (x = 0; x < 30; x++) {
    console.log("my name is Raghbir <br />" + x);
}
///// loops 2.
var x;
for (x = 10; x > 0; x--) {
    console.log(x + "   I love ny <br />")
}
////loops 3.
var x = 12;
var sum = 0;
while (x <= 33) {
    console.log(x);
    sum = sum + x;
    x++;

}
console.log(sum);
///4.odd #
var x = 1;
while (x < 30) {
    console.log(x + '<br />');
    x += 2;
}
/// 5. even #
var x = 0;
while (x < 30) {
    console.log(x + '<br />');
    x += 2;
}
////for loops 1.
var x;
for (x = 1; x <= 10; x++) {
    console.log(x + '.');
}
/////2.
var x;
for (x = 10; x >= 1; x--) {
    console.log(x + '.');
}
////3.
var x;
for (x = 1; x <= 50; x += 2) {
    console.log(x + '.');
}
////4.
var x;
for (x = 0; x <= 100; x += 2) {
    console.log(x + '.');
}
///5.var x;
for (x = 40; x <= 60; x++) {
    console.log(x + '.');
}
////
var x = 80;
while (x <= 100) {
    console.log(x + '.');
    x++;
}
////7.
var x = prompt('Enter 1');
for (x == 1; x <= 11; x++) {
    console.log(x + '.');

}
///7.
var i = prompt("Enter the number");
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var b = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var d = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var e = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
if (i == 1) {
    console.log(a);

} else if (i == 2) {
    console.log(b);
} else if (i == 3) {
    console.log(c);
} else if (i == 4) {
    console.log(d);
} else if (i == 5) {
    console.log(e);
} else {
    alert('Invalid Number');
}
///8.
var i = prompt("Enter the number");
var a = ["One Two Three"];
var b = ["One Two Four"];
var c = ["One Two Five"];
var d = ["One Two Six"];
var e = ["One Two Seven"]
if (i == 123) {
    alert(a);
} else if (i == 124) {
    alert(b);
} else if (i == 125) {
    alert(c);
} else if (i == 126) {
    alert(d);
} else if (i == 127) {
    alert(e);
} else {
    alert('Invalid Number');
}
/////9....
var i = prompt("Enter the number");
var a = ["One"];
var b = ["Two"];
var c = ["Three"];
var d = ["Four"];
var e = ["Five"]
if (i == 1) {
    alert(a);
} else if (i == 2) {
    alert(b);
} else if (i == 3) {
    alert(c);
} else if (i == 4) {
    alert(d);
} else if (i == 5) {
    alert(e);
} else {
    alert('Please Enter a Valid Number ');
}
////10.....
var i = prompt("Enter the number");
var a = ["The number is between '1 to 10'"];
var b = ["The number is between '11 to 20'"];
var c = ["The number is between '21 to 30'"];
var d = ["The number is between '31 to 40'"];
var e = ["The number is between '41 to 50'"];
if (i > 1 && i < 10) {
    alert(a);
} else if (i > 10 && i < 20) {
    alert(b);
} else if (i > 20 && i < 30) {
    alert(c);
} else if (i > 30 && i < 40) {
    alert(d);
} else if (i > 40 && i < 50) {
    alert(e);
} else {
    alert('Please Enter a Valid Number ');
}

///or another way...
var i = prompt("Enter the number");

if (i > 1 && i < 10) {
    alert("The number is between '1 to 10'");
} else if (i > 10 && i < 20) {
    alert("The number is between '11 to 20'");
} else if (i > 20 && i < 30) {
    alert("The number is between '21 to 30'");
} else if (i > 30 && i < 40) {
    alert("The number is between '31 to 40'");
} else if (i > 40 && i < 50) {
    alert("The number is between '41 to 50'");
}
///11.
var i = prompt("Enter the number");

if (i < 50 || i > 200) {
    alert("The number is a valid number");
} else if (i > 50 && i < 200) {
    alert("This is a good number ");
}
///12...
var i = prompt("Enter the number");

if (i == 'one') {
    alert("1");
} else if (i == 'Two') {
    alert("2");
} else if (i == 'Three') {
    alert("3");
} else if (i == 'Four') {
    alert("4");
} else if (i == 'Five') {
    alert("5");
}
/*else{
    alert('Invalid Entry')
}*/
///13...
var i = prompt("Enter the number");

if (i >= 6 && i <= 10) {
    alert("Please enter a proper number");
} else {
    alert("Please enter a valid number");
}
///14...
(function() { //iife
    "use strict;"
    var j = parseInt(prompt('enter a number'));

    for (i = j; i <= j + 18; i += 2) {
        console.log(i);
    }
}());
///15...
(function() {
    //iife
    "use strict;"
    var j = parseInt(prompt('enter a number'));

    for (var i = j; i >= j - 8; i -= 2) {
        console.log(i);
    }
}());
/////ARRAYS...1...
function displayQoutes() {
    var x = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    for (i = 0; i < x.length; i++)
        console.log(x[i]);

}
displayQoutes();
/////2....
////3.a...pop..it means it deletes last value
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.pop();
    console.log(names);


}
displayQoutes();
///3.b...
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.pop();
    console.log(names.length);


}
displayQoutes();
////3.c..reverse..it prints in reverse order
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.reverse();
    console.log(names);


}
displayQoutes();
///3.d....
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.reverse();
    console.log(names[8]);


}
displayQoutes();
///.3.e...shift..delete the first value
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.shift();
    console.log(names);


}
displayQoutes();
///3.f..
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.shift();
    console.log(names.length);


}
displayQoutes();
////3.g..sort..will display in alphabetical order
function displayQoutes() {
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.sort();
    console.log(names);


}
displayQoutes();
////4...a..push..to add something into array form end
function displayQoutes() {
    var x = prompt("Enter your name");
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.push(x);
    console.log(names);


}
displayQoutes();
////4.b....
function displayQoutes() {
    var x = prompt("Enter your name");
    var names = ["raghbir", "sunny", "simran", "hello", "preet", "supreet", "hassun", "abdulla", "sharukh",
        "kajal"
    ];
    names.push(x);
    console.log(names.length);


}
displayQoutes();
////4.c...unshift..add a value in array from initial

function displayQuote() {
    var x = prompt("Enter your name");
    var names = ["helllo", "hi", "ok", "bye"];
    names.unshift(x);
    console.log(names);
}
displayQuote();
////4.d...
function displayQuote() {
    var x = prompt("Enter your name");
    var names = ["helllo", "hi", "ok", "bye"];
    names.unshift(x);
    console.log(names);
}
displayQuote();
///4.e...splice..you can delete an array value from anywhere,but it needs two values i.e initial and final
function displayQuote() {
    //  var x = prompt("Enter you name");
    var names = ["helllo", "hi", "ok", "bye"];
    names.splice(1, 3);
    console.log(names);
}
displayQuote();
////4.f.
function displayQuote() {
    //  var x = prompt("Enter you name");
    var names = ["helllo", "hi", "ok", "bye"];
    names.splice(1, 3);
    console.log(names.length);
}
displayQuote();
///.4.g...slice...is use to cut and copy only that value which you mentioned
function displayQuote() {

    var names = ["helllo", "hi", "ok", "bye", "tc"];
    var newNames = names.slice(2, 3);
    console.log(newNames);
}
displayQuote();
////5.
function displayQuote() {
    var names = ["raghbir", "preet", "harsimran", "hasun", "sunny"];
    var months = ["jan", "feb", "mar", "apr", "may"];
    var newNames = names.concat(months);
    console.log(newNames);
}
displayQuote();
///b....ript >
function displayQuote() {
    var names = ["raghbir", "preet", "harsimran", "hasun", "sunny"];
    var months = ["jan", "feb", "mar", "apr", "may"];
    var newNames = names.concat(months);
    for (i = 0; i < newNames.length; i++)
        console.log(newNames[i]);
}
displayQuote();
////6...
function displayQuote() {
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (i = 0; i < days.length; i++)
        console.log(days[i]);
}
displayQuote();
///7....
function displayQuote() {
    var x = prompt("Enter the day")
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "and", "Sat"];
    if (x == 'Mon') {
        console.log("Tue", "Wed", "Thu", "Fri", "and", "Sat");
    } else if (x == 'Tue') {
        console.log("Wed", "Thu", "Fri", "and", "Sat");
    } else if (x == 'Wed') {
        console.log("Thu", "Fri", "and", "Sat");
    } else if (x == 'Thu') {
        console.log("Fri", "and", "Sat");
    } else if (x == 'Fri') {
        console.log("Sat");
    } else if (x == 'Sat') {
        console.log("Sun");
    } else {
        console.log("it is the last day of the week");
    }
}
displayQuote();
////or another way
var x = prompt("Enter the day");
var weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var y = weekDays.indexOf(x);
for (var i = y; i < weekDays.length; i++) {


    if (weekDays[i] === 'Sat') {
        console.log("Sun");
        break;
    } else if (weekDays[i] === "Sun") {
        console.log("It is the last day of the week");
        break;
    } else if (weekDays[i] === x) {
        for (i = y + 1; i < weekDays.length - 1; i++) {
            console.log(weekDays[i]);
        }
    }
}


/////8.....

///Strings...1..
var sum = "3" + 5 + 6;
console.log(sum);
//ans. 356
///2..
var sum = 3 + "5" + 6;
console.log(sum);
//ans. 356
//3.
var sum = 3 + 5 + "6";
console.log(sum);
///ans. 356
///4..
var strg = "Pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(strg.length);
//ans. 45
//5..
var strg = "Pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(strg.toUpperCase());
///6..
var strg = "Pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(strg.toLowerCase());
///7..
var strg1 = "I like this product; I hate this product; This product is worth buying; I don't agree with the above user."
var strg2 = strg1.split(';');
for (var x = 0; x < strg2.length; x++) {
    console.log(strg2[x]);
}
///8...
var strg1 = "I like this product; I hate this product; This product is worth buying; I don't agree with the above user."
var strg2 = strg1.split('o').length - 1;
console.log(strg2);
///10..
////a..
var strg1 = "Javascript notation %^&* notes that structure rules and not context for nothing";
var strg2 = strg1.split(" ");
var newArray = [];
//console.log(strg2);
for (var i = 0; i < strg2.length; i++) {
    if (strg2[i] === "not") {
        console.log(strg2[i]);
    }
}
///b..
var strg1 = "Javascript notation %^&* notes that structure rules and not context for nothing";
var strg2 = strg1.split(" ");
var newArray = [];
//console.log(strg2);
for (var i = 0; i < strg2.length; i++) {
    if (strg2[i] === "not") {
        //console.log(strg2[i]);
        newArray.push(strg2[i]);
        console.log("i am " + newArray + " a student");
    }
}
DOM...
    // <!DOCTYPE html>
    // <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>DOM</title>
// </head>

// <body>
//     <p id="para"> This is the paragraph</p> ///<p id="para" hidden>
//     <input type="button" id="btn" value="raghbir">
//     <script>
//     var para = document.getElementById("para");
//     var button = document.getElementById("btn");

//      para.style.visibility = "hidden";

//     button.addEventListener('click', function() {
//         para.style.visibility = "visible"; ///or para.hidden == false
//     });
//     </script>
// </body>

// </html>
2...
/*
<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>dom</title>
    </head>

    <body>
        <div id="one"></div>
        <p id="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sequi saepe minima facilis neque cupiditate, adipisci dicta veritatis inventore iste expedita accusamus praesentium nesciunt, a. Aut ipsum porro at, eum!</p>
        <input type="button" id="btn" value="raghbir">
        <script>
       
        var one = document.getElementById("one");
        var para = document.getElementById("para");
        var button = document.getElementById("btn");
       
        button.addEventListener('click', function() {
        	 para.style.color = "blue";
        para.style.background = "green";
           
        });
        </script>
    </body>

    </html>*/
    /////

    3....
    //  <!DOCTYPE html>
    // <html lang="en">
    // <head>
    // 	<meta charset="UTF-8">
    // 	<title>no.4</title>
    // </head>
    // <body>
    // <input type="text" id="textOne">
    // <input type="text" id="textTwo">
    // <input type="button" id="btn" value="transfer">
    // <script>
    // var _id = function _id(id){
    // 	return document['getElementById'](id)
    // }
    // var first = _id(textOne);////or getElementById('textOne');
    // var second = _id(textTwo);////or getElementById('textTwo');
    // button['addEventListener']('click' function(){
    // 	first['value'] == second['value'];
    // });
    // </script>
    	
    // </body>
    // </html>
4....
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>ques.4</title>
// </head>

// <body>
//     <input type="button" id="button" value="click here">
//     <img src="img/download (1).jpeg" id="image">
//     <script type="text/javascript">
//     var _id = function _id(id) {
//         return document.getElementById(id);
//     }
//     var first = _id("button");
//     var img = _id("image");
//     img.style.visibility = "hidden";
//     button.addEventListener('click', function(){ img.style.visibility = "visible"; }
// )
//     </script>
// </body>

// </html>
4.a....
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>ques.4.b</title>
// </head>

// <body>
//     <input type="button" id="button" value="click here">
//     <img src="img/download (1).jpeg" id="imageOne">
//     <script type="text/javascript">
//     var _id = function _id(id) {
//         return document.getElementById(id);
//     }
//     var first = _id("button");
//     var img1 = _id("imageOne");
//     img1.style.visibility = "visible";
//     button.addEventListener('click', function(){ 
//     	img1.style.visibility = "hidden"; 
//     });
//     </script>
// </body>

// </html>
4..c..
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>ques.4.b</title>
// </head>

// <body>
//     <input type="button" id="button" value="click here">
//     <img src="img/download (1).jpeg" id="imageOne">
//     <script type="text/javascript">
//     var _id = function _id(id) {
//         return document.getElementById(id);
//     }
//     var first = _id("button");
//     var img1 = _id("imageOne");
//     img1.style.visibility = "hidden";
//     button.addEventListener('click', function(){ 
//     	img1.style.visibility = "visible"; 
//     });
//     </script>
// </body>

// </html>
4...c..
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>ques.4.b</title>
// </head>

// <body>
//     <input type="button" id="button" value="click here">
//     <img src="img/img1.jpg" id="img1">
    
//     <script type="text/javascript">
//     var _id = function _id(id) {
//         return document.getElementById(id);
//     }
//     var first = _id("button");
//     var img1 = _id("img1");
//     first.addEventListener('click', function(){ 
//     	img1.src = "img/img2.jpg";
    	
//     });
//     </script>
// </body>

// </html>
4...a.b.c.
/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ques.4.b</title>
</head>

<body>
    <input type="button" id="button1" value="Replace">
    <input type="button" id="button2" value="Hide">
     <input type="button" id="button3" value="Show">
    <img src="img/img1.jpg" id="img1">
    
    <script type="text/javascript">
    var _id = function _id(id) {
        return document.getElementById(id);
    }
    var first = _id("button1");
    var second = _id("button2");
    var third = _id("button3");
    var img1 = _id("img1");

    
    first.addEventListener('click', function(){ 
    	img1.src = "img/img2.jpg";
    	});
    second.addEventListener('click', function(){
    	img1.style.visibility = "hidden";
    });
    third.addEventListener('click', function(){
    	img1.style.visibility = "visible";
    })
    	
    </script>
</body>

</html>*/
5....
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ques.4.b</title>
    <style type="text/css">
    img {
        height: 500px;
        width: 500px;
    }
    </style>
</head>

<body>
    <input type="button" id="button1" value="PREV">
    <input type="button" id="button2" value="NEXT">
    <img src="img/1.jpg" id="img1">
    <script type="text/javascript">
    var _id = function _id(id) {
        return document.getElementById(id);
    }
    var Prev = _id("button1");
    var Next = _id("button2");

    var img1 = _id("img1");
    var images = ["img/1.jpg", "img/2.jpg", "img/3.jpeg", "img/4.jpg", "img/5.jpeg", "img/6.jpeg", "img/7.jpeg", "img/8.png", "img/9.jpeg", "img/10.jpeg"];
    var x = 0;



    Next.addEventListener('click', function() {

        x++;
        img1.src = images[x];

        if (x == 9) {
            x = -1;
        }

    });
    Prev.addEventListener('click', function() {

        if (x == 0) {
            x = 10;
        }
        x--;
        img1.src = images[x];


    })
    </script>
</body>

</html>
