// Template Literals

let pencil = 10;
let eresor = 5;
// let output = "The Total Price Is : " + (pencil + eresor) + " Rupees."; 
// `Back Ticks`
let output = `The Total Price Is : ${pencil + eresor} Rupees.`;
console.log(output);

// If Statement 

let age = 18;
let ifOut = `You Are ${age} Years Old, You Can Vote.`;
if (age >= 18) {
    console.log(ifOut);
}

// Practice Question (Trafic Light System) 

let color = "green";

if (color == "red") {
    console.log("Light Color Red Means Stop.");
}
if (color == "yellow") {
    console.log("Light Color Yellow Means Slow.");
}
if (color == "green") {
    console.log("Light Color Green Means Go.");
}

// Else If Statement 

let marks = 100;

if (marks == 100) {
    console.log('Marks 100 "Topper"');
}
else if (marks >= 90) {
    console.log('Marks Greater Than 90 "A+"');
}
else if (marks >= 80) {
    console.log('Marks Greater Than 80 "A"');
}
else if (marks >= 70) {
    console.log('Marks Greater Than 70 "B+"');
}
else if (marks >= 60) {
    console.log('Marks Greater Than 60 "B"');
}
else if (marks >= 50) {
    console.log('Marks Greater Than 50 "C+"');
}
else if (marks >= 40) {
    console.log('Marks Greater Than 40 "C"');
}
else if (marks >= 30) {
    console.log('Marks Greater Than 30 "D"');
}
else if (marks < 30) {
    console.log('Marks Less Than 30 "Fail"');
}

// Else Statement 

let totalPrice = 1000;

if (totalPrice >= 5000) {
    console.log('Price Greter Than "$4999" Please Pay From Card');
}
else if (totalPrice >= 100) {
    console.log('Price Greter Than "$99" Please Pay From UPI');
}
else {
    console.log('Price Less Than "$99" Please Pay Cash');
}

// Practice Question (Popcorn Price)

let popsize = "XL";

if (popsize === "XL") {
    console.log('Popcorn Size XL Price 250 Rs.');
}
else if (popsize === "L") {
    console.log('Popcorn Size L Price 200 Rs.');
}
else if (popsize === "M") {
    console.log('Popcorn Size M Price 100 Rs.');
}
else {
    console.log('Popcorn Size S Price 50 Rs.');
}

// Nested If-Else Statement

let totalmarks = 100;

if (totalmarks >= 33){
    console.log("Pass");

    if (totalmarks >= 80){
        console.log("Grade : A");
    } 
    else if (totalmarks >= 60){
        console.log("Grade : B");
    }
    else {
        console.log("Grade : C");
    }
}
else {
    console.log("Better Luck Next Time!");
}

// && Logical Operator 

let num11 = 60;

if (num11>=10 && num11>=50) {
    console.log("Both Expressions Returns True.");
}

// || Logical Operator 

let num12 = 6;

if (num12<=10 || num12<=50) {
    console.log("Both Expressions Returns True.");
}

// || Logical Operator 

let num13 = 6;

if (!(num13 >= 10)) {
    console.log("Expression Returns False But ! Operator Flip It And Returns True.");
}

// Practice Question

let str11 = "App";

if (str11[0] === "A" && str11.length >= 3) {
    console.log ("This Is A Good String.");
} else {console.log("This Is Not A Good String.");}


let num14 = 12;

if ((num14 % 3 === 0) && ((num14 + 1 === 15) || (num14 - 1 === 11))) {
    console.log("Safe");
} else {
    console.log("unsafe")
}

// Truthy & Falsy

if (true) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}

// Switch Statement 

let switchS = "red";

switch(switchS) {
    case "red" :
        console.log("Red");
        break;
        case "yellow" :
            console.log("Yellow");
            break;
            case "green" :
                console.log("Green");
                break;
                default :
                console.log("Light Is Broken.");
}

// Practice Question (Day)

let dayno = "1";

switch(dayno){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
                console.log("Wednesday");
                break;
                case 4:
                    console.log("Thursday");
                    break;
                    case 5:
                        console.log("Friday");
                        break;
                        case 6:
                            console.log("Saturday");
                            break;
                            case 7:
                                console.log("Sunday/Funday");
                                break;
                                default :
                                console.log("Please Enter Correct Week Day No 1-7");
}

// Javascript Part 2 Practice Questions 

let num15 = 200;

if(num15 % 10 === 0){
    console.log("Good");
} else{
    console.log("Bad");
}

// let eyn = prompt("Enter Your Name");
// let eya = prompt("Enter Your Age");
// alert(`${eyn} Is ${eya} Years Old.`);

let num16 = 4;

switch(num16){
    case 1 :
        console.log("Months In Quarter 1 : January, February, March.");
        break;
        case 2 :
            console.log("Months In Quarter 2 : April, May, June.");
            break;
            case 3 :
                console.log("Months In Quarter 3 : July, August, September.");
                break;
                case 4 :
                    console.log("Months In Quarter 4 : October, November, December.");
                    break;
                    default :
                    console.log("Please Enter Correct Quarter No.");
}

let str12 = "apple";

if((str12.length >= 5) && (str12[0]==="a") || (str12[0]==="A")){
    console.log("Golden String.");
} else{
    console.log("Not A Golden String.");
}

let numa = 10;
let numb = 15;
let numc = 20;

if(numa > numb){
    if(numa > numc){
        console.log(`${numa} Is The Highest Number.`);
    } else{
        console.log(`${numc} Is The Highest Number.`);
    }
} else if(numb > numc){
    console.log(`${numb} Is The Highest Number.`);
} else{
    console.log(`${numc} Is The Highest Number.`);
}

let num17 = 34;
let num18 = 47854;
console.log(num17 % 10);
console.log(num18 % 10);

if((num17 % 10) == (num18 % 10)){
    console.log("Numbers Have The Same last Digit Which Is",num18 % 10);
} else {
    console.log("Numbers Dont Have The Same Last Digit.");
}

// String Method str.trim()

let str13="    apple     ";
let str14="    ap p le     ";
console.log(str13);
console.log(str13.trim());
console.log(str13);
console.log(str14);
console.log(str14.trim());
console.log(str14);

// String Method str.toUpperCase()

let str15 = "StRiNg StRiNg StRiNg";
console.log(str15);
console.log(str15.toUpperCase());

// String Method str.toLowerCase()

let str16 = "StRiNg StRiNg StRiNg";
console.log(str16);
console.log(str16.toLowerCase());

// indexOff Method

let str17 = "i love coding.";

console.log(str17.indexOf("love"));
console.log(str17.indexOf("s"));
console.log(str17.indexOf("g"));

// Method Chaining 

let str18 = "   I Love Coding.   ";

console.log(str18);
console.log(str18.toUpperCase().trim());
console.log(str18.toLowerCase().trim());

// Slice Method 

let str19 = "ILoveCoding.";

console.log(str19.slice(5));
console.log(str19.slice(1,5));
console.log(str19.slice(-5));
console.log(str19.slice(8,11));

// Replace Method 

let str20 = "ilovecoding";

console.log(str20);
console.log(str20.replace("love","do"));
console.log(str20);

// Repeat Method 

let str21 = "String";

console.log(str21);
console.log(str21.repeat(5));
console.log(str21);

// Array 

let student1 = "aman";
let student2 = "shradha";
let student3 = "hasim";
let students = ["aman", "shradha", "hasim"];
console.log(students);
let studentd = ["hasim", 1, 7.8, "multi"];
console.log(studentd);
console.log(studentd[0]);
console.log(studentd[0][0]);
studentd[0] = "friend";
console.log(studentd);
studentd[6] = "friend";
console.log(studentd);

// Array Methods 

let sb = ["Kawasaki", "BMW", "Ducati", "YAMAHA"];
sb.push("Suzuki");
console.log(sb);
sb.pop();
console.log(sb);
sb.unshift("Suzuki");
console.log(sb);
sb.shift();
console.log(sb);

// Practice Question 

let months2 = ["January", "July", "March", "August"];
// console.log(months2);
// months2[0] = "July";
// console.log(months2);
// months2[1] = "June";
// console.log(months2);

console.log(months2);
months2.shift();
console.log(months2);
months2.shift();
console.log(months2);
months2.unshift("June");
console.log(months2);
months2.unshift("July");
console.log(months2);

// IndexOf ("") 

console.log(months2.indexOf("June"));
console.log(months2.includes("June"));
console.log(months2.includes("May"));

// Concat Method 

let months3 = ["September", "October", "November", "December"];
console.log(months3);
console.log(months2.concat(months3));
console.log(months3.concat(months2));

// Reverse Method 

console.log(months3.reverse());
console.log(months3);

// Slice Method

console.log(months3.slice());
console.log(months3.slice(2));
console.log(months3.slice(1,3));
console.log(months3.slice(-1));

// Splice Method 

let colors = ["Red", "Yellow", "Blue", "Black", "Green", "Orange", "White", "Violet", "Pink", "Brown", "Gray"];
console.log(colors);
console.log(colors.splice(3,1,"Yellow & Green", "Golden"));
console.log(colors);

// Sort In Arrays 

console.log(colors);
console.log(colors.sort());

// practice Question 

let months4 = ["January", "July", "March", "August"];
console.log(months4);
console.log(months4.splice(0, 2, "July", "June"));
console.log(months4);

let lang = ["C", "C++", "Html", "Javascript", "Python", "Java", "C#", "Sql"];
console.log(lang);
console.log(lang.reverse().indexOf("Javascript"));
console.log(lang);

// Array References 

let a1 = ["a", "b", "c"];
console.log(a1);
let a2 = ["a", "b", "c"];
console.log(a2);
console.log(a1 == a2);
console.log(a1 === a2);
console.log(a2 = a1);
console.log(a1 == a2);
console.log(a1 === a2);

// Nested Arrays

let nestedArray = [ [2, 4], [3, 6], [4, 8], [5, 10] ];
console.log(nestedArray);

// Practice Questions 

let game = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];
console.log(game);

// Assignment Questions 

let exarray = [7, 9, 0, -2];
console.log(exarray);
let n = 2;
let ans = exarray.slice(0, n);
console.log(ans);

let ans2 = exarray.slice(exarray.length-n);
console.log(ans2);

let str22 = "a";
if(str22 == 0){
    console.log("String Is Empty.");
} else{
    console.log("String Is Not Empty.");
}

let str23 = "hasim";
if(str23 == str23.toLowerCase()){
    console.log("All Charecter Is In Lower Case.");
} else {
    console.log("All Charecter Is Not In Lower Case.")
}

let str24 = "  a a  ";
console.log(`This Is Original String ${str24}`);
console.log(`This Is Trimed String ${str24.trim()}`);

let arr11 = ["Contactor", "MPCB", "MCB", "OLR"];
let str25 = "MPB"
console.log(arr11);
if(arr11.includes(str25)){
    console.log(`${str25} Text Present Inside This Array.`);
} else{
    console.log(`${str25} Text Not Present Inside This Array.`)
}

// For Loop

for(let str26 = 1; str26 <= 5; str26 ++){
    console.log(str26);
}
for(let str26 = 0; str26 <= 100; str26 = str26 + 25){
    console.log(str26);
}
for(let str26 = 5; str26 >= 1; str26 --){
    console.log(str26);
}
for(let str26 = 10; str26 >= 1; str26 = str26 - 2){
    console.log(str26);
}

// Print Odd Numbers 

for(let i = 1; i <= 9; i = i + 2){
    console.log(i);
}
for(let i = 9; i >= 1; i = i - 2){
    console.log(i);
}

// Print All Even Numbers 

for(let i = 2; i <= 10; i = i + 2){
    console.log(i);
}
for(let i = 10; i >= 2; i = i - 2){
    console.log(i);
}

// Multiplication Table 

// let str27 = prompt("Enter Number");
// str27 = parseInt(str27);
// for(let i = str27; i <= 10 * str27; i = i + str27){
    // console.log(i);
// }

// Nested For Loop

for(let i = 10; i <= 30; i = i + 10){
    console.log(`Outer Loop ${i}`)
    for(let j = 1; j <= 3; j = j + 1){
        console.log(`Inner Loop ${j}`)
    }
}


// While Loop

let i11 = -5;
while(i11 <= 5){
    console.log(i11);
    i11++;
}
let i12 = 0;
while(i12 <= 10){
    console.log(i12);
    i12 = i12 + 2;
}

// Favorite Movie 

// let str28 = "avatar";
// let str29 = prompt("Guess My Favorite Movie");
// while((str28 != str29) && (str29 != "quit")){
//     console.log("Wrong Answer");
//     str29 = prompt("Guess My Favorite Movie Again Or Type quit To Exit.");
// }
// if(str29 == str28){
//     console.log("Congrats !");
// } else{
//     console.log("You Quit");
// }

// Break Statement
console.log("Break Statement");

let i13 = 0;
while(i13 <= 100){
    if(i13 >= 11){
        break;
    }
    console.log(i13);
    i13 = i13 + 2;
}

// Loops With Arrays 

let str30 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
for(let i = 0; i < str30.length; i++){
    console.log(`${i} , ${str30[i]} `)
}

// Nested Loops With Nested Array

let heroes = [
    ["Ironman", "Spiderman", "Thor", "Antman", "Captain America", "Captain Marvel", "Hulk", "Hawkeye", "Loki", "Scarlet Witch", "Vision", "Black Panther", "Doctor Strange", "Black Widow"],
    ["Superman", "Batman", "Wonder Woman", "Aquaman"]
]
console.log(heroes);
for(let i = 0; i < heroes.length; i++){
    console.log(`Array Item No = ${i}, Array Length = ${heroes[i].length}, Array Items = ${heroes[i]}.`)
    for(let j = 0; j < heroes[i].length; j++){
        console.log(`j = ${j}, ${heroes[i][j]}`)
    }
}

// For Of Loop

let str31 = "HASIM";
for(char of str31){
    console.log(char);
}
for(i of str30){
    console.log(i);
}

// Nested For Of Loop

let str32 = [["Ironman", "Spiderman", "Thor"],["Antman", "Captain America"],["Captain Marvel", "Hulk"]];
console.log(str32);
for(char of str32){
    console.log(char);
    for(heroes of char){
        console.log(heroes);
        for(alf of heroes){
            console.log(alf);
        }
    }
}

// Asignment Questions 

let element1 = ["ab", "bc", "cd", "ab", "bc", "cd"];
// let num = prompt("Enter Text Which You Want To Delete");
// while(true){
//     if(! element1.includes(num)){
//         break;
//     }
//     else if(element1.includes(num)){
//         let num2 = element1.indexOf(num);
//         element1.splice(num2, 1);
//     }
// }
// console.log(element1);

let num22 = "ab";
for(let i = 0; i < element1.length; i++){
    if(element1[i] == num22){
        element1.splice(i, 1);
    }
}
console.log(element1);

// Creating A Post

const post = {
    username: "@hasim",
    content: "This Is My First Post",
    likes: 150,
    reports: 5,
    tags: ["@apnacollage", "@delta"]
}
console.log(post);

// Updating A Key Value

post.likes = 140;
post["reports"] = 10;
console.log(post);

// Add A New Key Value

post.age = 22;
post["born"] = 2001;
console.log(post);

// Deleting A Key Value

delete post.born;
delete post["age"];
console.log(post);

// Nested Obsect Literals

let student4 = {
    hasim: {
        age: 22,
        gender: "male",
        likes: 120
    },
    rahul: {
        age: 23,
        gender: "male",
        likes: 130
    },
    neha: {
        age: 21,
        gender: "female",
        likes: 140
    }
};
console.log(student4);

// Array Of Objects 

let student5 = [
    {
        name: "hasim",
        age: 22,
        gender: "male",
        likes: 120
    },
    {
        name: "rahul",
        age: 23,
        gender: "male",
        likes: 130
    },
    {
        name: "neha",
        age: 21,
        gender: "female",
        likes: 140
    }
];
console.log(student5);

// Math Objects

console.log(Math.PI);
console.log(Math.pow(2, 5));
console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));

// Generating Random Integers Between 1 To 10

let num23 = Math.random();
let num24 = num23 * 10;
num24 = Math.floor(num24);
num24 = num24 + 1;
console.log(num24);

console.log(Math.floor(Math.random() * 10)+1);

// Practice Questions

console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 5)+1);

// Guessing Game 

// let max = prompt("Enter The Maximum Number");
// let random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("Guess The Number");

// while(true){
//     if(guess == "quit"){
//         console.log("User Quit");
//         break;
//     }
//     if(guess == random){
//         console.log("You Are Right! Random Number Was ", random);
//         break;
//     }
//     else{
//         guess = prompt("Your Guess Was Wrong, Please Try Again");
//     }
// }


// let max2 = prompt("Enter The Maximum Number");
// let random2 = Math.floor(Math.random() * max2) + 1;
// let guess2 = prompt("Guess The Number");

// while(true){
//     if(guess2 == "quit"){
//         console.log("User Quit");
//         break;
//     }
//     if(guess2 == random2){
//         console.log("You Are Right! Number Was", random2);
//         break;
//     }else if(guess2 <= random2){
//         guess2 = prompt("Enter Higher Number");
//     }else{
//         guess2 = prompt("Enter Lower Number");
//     }
// }

// Assignment Question

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

let car = {
    name: "Model S",
    model: "Tesla Model S Plaid",
    color: "Solid Black"
};
console.log(car.name);
console.log(car);

let person = {
    name: "Hasim",
    age: 22,
    city: "New York"
};
console.log(person);
person.country = "United States";
console.log(person);

// Functions In Javascript

function hello(){
    let he1 = "Sk Abdul Hasim";
    for(let i = 1; i <= 3; i++){
        console.log(he1);
    };
};
hello();

// Practice Question

function hello2(){
    console.log("Twinkle Twinkle Little Star");
    console.log("How I Wonder What You Are");
    };
hello2();
function dice16(){
    console.log(Math.floor(Math.random() * 6) + 1);
};
dice16();

// Function With Arguments

function dice3(name, age){
    console.log(`${name} Is ${age} Years Old.`);
};
dice3("hasim", 23);

// Practice Question 

function avarage(a, b, c){
    let avg = (a+b+c) / 3;
    console.log(avg);
};
avarage(8, 6, 4);

function table(n){
    for(let i = n; i <= n * 10; i += n){
        console.log(i);
    };
};
table(5);

// Return Keyword In Function

function add(a, b){
    return a + b;
};
console.log(add(3, 6));

// Practice Question

function sum1(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    };
    return sum;
};
console.log(sum1(10));

let str33 = ["hello", "friends", "today", "is", "funday", "lets", "fun", "together."];

function concat(a){
    let result = "";

    for(let i = 0; i < a.length; i++){
        result += a[i];
    };
    return result;
};
console.log(concat(str33));

// What Is Scope?

let sco = 100;
function sums(a, b){
    let sco =a+b;
    console.log(sco);
};
sums(2,4);
console.log(sco);

// Block Scope 

{
    let a = 1;
}
// console.log(a);

let age1 = 22;
if(age1 >= 18){
    let str1 = "Adult";
    // console.log(str1);
}
// console.log(str1);

// Lexical Scope 

function outer(){
    let ax = 8;
    function insider(){
        let ay = 6;
        console.log(ay);
        console.log(ax);
    };
    insider();
    console.log(ax);
    // console.log(ay);
};
outer();
// insider();

// Practice Question

let greet = "hello";

function changegreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    };
    innergreet();
};
console.log(greet);
changegreet();

// Function Expressions

let sum2 = function(a, b){
    return a+b;
};
console.log(sum2(2, 4));

let call = function(){
    console.log("Hello");
};
call();
call = function(){
    console.log("Namaste");
};
call();

// Higher Order Functions

function multiplegreet(func, count1){
    for(let i = 1; i <= count1; i++){
        func();
    }
}
let greet1 = function(){
    console.log("Hello");
}
multiplegreet(greet1, 15);

function oddorevenfactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("Wrong Request");
    }
};
let request = "even";

// Methods 

let cal = {
    num: 55,
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};

// Assignment Questions

let arr12 = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
let nu1 = 2;

function geta(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
geta(arr12, nu1);

let str2 = "abcdabcdabcdefgghh";

function getunick(str){
    let result = "";

    for(let i = 0; i < str.length; i++){
        if(result.indexOf(str[i]) == -1){
            result += str[i];
        }
    }
    return result;
};

console.log(getunick(str2));

let coun = ["Australia", "Germany", "United States Of America"];

function long(arr){
    let ansidx = 0;
    for(let i = 0; i < arr.length; i++){
        let ansl = arr[ansidx].length;
        let currl = arr[i].length;
        if(currl > ansl){
            ansidx = i;
        }
    }
    return arr[ansidx];
};

console.log(long(coun));

let str3 = "apnacollage";

function getvo(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count++;
        }
    }
    return count;
};

console.log(getvo(str3));

let start = 100;
let end = 105;

function randose(start, end){
    let diff = end - start + 1;
    console.log("differential",diff);
    return Math.floor(Math.random() * diff) + start;
}
console.log(randose(start, end));


// this Keyword 

let std = {
    name: "Hasim",
    age: 22,
    eng: 20,
    math: 30,
    phy: 40,
    // getavg(){
    //     let avg = (eng + math + phy) / 3;
    //     console.log(`${name} Got Avg Marks = ${avg}.`);
    // },
    getavgt(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} Got Avg Marks = ${avg}.`);
        console.log(this);
    }
};
// std.getavg();
std.getavgt();

function getthis(){
    console.log(this);
};
getthis();

// try & catch Statement

try {
    console.log(q);
} catch(e) {
    console.log("Variable q Does not Exist.");
    console.log(e);
};

// Arrow Functions 

let numb1 = 20;
let numb2 = 30;
let sum11 = (a, b) => {
    console.log(a + b);
};
sum11(numb1, numb2);

// function sum12(a, b) {
//     return a + b;
// }
// console.log(sum12(numb1, numb2));

// Implicit Return 

let sum13 = (a, b) => (a + b);
console.log(sum13(numb1, numb2));

// Set timeout Function

console.log("Hi Thare");
// setTimeout(() => {
//     console.log("Apna College");
// }, 2000);
console.log("Welcome To");

// Set Interval Function

console.log("Hi There");
let id2 = setInterval(() => {
    console.log("Apna College");
}, 1000);
console.log(id2);
console.log("Welcome To");
clearInterval(id2);


// This With Arrow Function

let student6 = {
    name: "aman",
    marks: 95,
    prop: this,  // Global Scope
    getname: function () {
        console.log(this);  // This Is Depend On Calling Object's Scope
        return this.name;
    },
    getmarks: () => {
        console.log(this); // Parent's Scope = Window
        return this.marks;
    },
    getinfo1: function(){
        setTimeout( () => {
            console.log(this);  // Student
        }, 1000);
    },
    getinfo2: function(){
        setTimeout( function(){
            console.log(this);    // Window
        }, 1000);
    }
};
console.log(student6.getname());
console.log(student6.getmarks());
// student6.getinfo1();
// student6.getinfo2();


// Practice Questions

let exarr = [10, 15, 20, 25, 30];

let arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total / arr.length;
};
console.log(arrayAverage(exarr));


let sinum = 10;
let isEven = (num) => num % 2 == 0;
console.log(isEven(sinum));

// Array Method forEach

let arrn = [1, 2, 3, 4, 5];

arrn.forEach((ele) => {
    console.log(ele);
});

arrn.forEach(function(ele){
    console.log(ele);
});

let print = function(ele){
    console.log(ele);
};
arrn.forEach(print);

let nesarr = [{
    name: "aman",
    age: 27
}, {
    name: "babu",
    age: 22
}, {
    name: "friend",
    age: 25
}];

nesarr.forEach((ele) => {
    console.log(ele);
});
nesarr.forEach((ele) => {
    console.log(ele.name);
});
nesarr.forEach((ele) => {
    console.log(ele.age);
});


// Map Function 

let arn = arrn.map(function(el){
    return el*el;
});
console.log(arn);

let gpa = nesarr.map((el) => {
    return el.age / 10;
});
console.log(gpa);


// Filter Function 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = nums.filter((num) => (num % 2 != 0));
let even = nums.filter((num) => (num % 2 == 0));
console.log(nums);
console.log(odd);
console.log(even);

// Method Every & False

console.log(nums.every((el) => (el % 2 == 0)));
console.log(odd.every((el) => (el % 2 == 0)));
console.log(even.every((el) => (el % 2 == 0)));

console.log(nums.some((el) => (el % 2 == 0)));
console.log(odd.some((el) => (el % 2 == 0)));
console.log(even.some((el) => (el % 2 == 0)));


// Reduce Function

let nums2 = [1, 2, 3, 4, 5];
let redu = nums2.reduce((res, el) => (res + el));
console.log(redu);

// Maximum Value In An Array Usuing Reduce Method

let max = nums2.reduce((max, el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
});
console.log(max);

// Practice Question    

let nums12 = [100, 200, 3150, 400];

let ans12 = nums12.every((el) => (el % 10 == 0));
console.log(ans12);

let min1 = nums12.reduce((min1, el) => {
    if(min1 < el){
        return min1;
    } else {
        return el;
    }
});
console.log(min1);

// Default Parameters

let aa = 10;
let bb;
let bd = 15;
let ansum = function(a, b = 2){
    return a + b;
}
console.log(ansum(aa, bb));
console.log(ansum(aa, bd));

// Spread 

let numsn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(Math.min(...numsn));
console.log(numsn);

let spr = ["Babu", "Aman", "Didi"];
console.log(...spr);

// Spread (Array Literals)

let sparr = [1, 2, 3, 4, 5];
let newsparr = [...sparr];
console.log(sparr);
console.log(newsparr);
newsparr.push(6);
console.log(sparr);
console.log(newsparr);

let spchar = [..."hello"];
console.log(spchar);

let speven = [2, 4, 6, 8, 10];
let spodd = [1, 3, 5, 7, 9];
let spnums = [...speven, ...spodd];
console.log(speven);
console.log(spodd);
console.log(spnums);

// Spread (Object Literals)

let spol = {
    email: "example@gmail.com",
    password: "1234asdf"
};
console.log(spol);
let aspol = {...spol, id: "babu"};
console.log(aspol);
let spar = [1, 2, 3, 4, 5];
console.log(spar);
let sparob = {...spar};
console.log(sparob);
let addspob = {
    ...spol,
    ...aspol,
    ...spar,
    sl: "1023"
};
console.log(addspob);

// Rest 

function argp(...args){ // Arguments
    for(let i = 0; i < args.length; i++){
        console.log("You Gave Us", args[i]);
    }
}
argp(1, 2, 3, 4, 5);
argp(...spodd);

function min (a, b, c, d){
    console.log(arguments); 
}
min(10, 20, 30, 40);

function mins (){
    console.log(arguments);
    console.log(arguments.length);
}
mins(10, 20, 30, 40);

function sum23(msg, ...args){
    console.log(msg);
    return args.reduce((sum, el) => sum + el);
};
console.log(sum23("ab", 1, 2, 3, 4, 5));

// destructuring

let namesd = ["tony", "bruce", "steve", "peter", "thor", "loki", "wanda", "dr strenge"];
let winner = namesd[0];
console.log(winner);
let runnerup = namesd[1];
console.log(runnerup);
let secoundrunnerup = namesd[2];
console.log(secoundrunnerup);

let [winner2, runnerup2, others1, ...others2] = namesd;
console.log(winner2);
console.log(runnerup2);
console.log(others1);
console.log(others2);

// Destructuring (Objects)

let student11 = {
    name: "aman",
    age: 22,
    username: "Aman",
    password: "abcd"
};
let age11 = student11.age;
console.log(student11.age);
console.log(age11);
let {name, username: user, password: secret, city = "mumbai"} = student11;
console.log(name);
console.log(user);
console.log(secret);
console.log(city);


// Practice Quastion

let nuar = [1, 2, 3, 4, 5];

const square = nuar.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nuar.length;
console.log(avg);


let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((num) => num + 5));

let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((str) => str.toUpperCase()));


const doubleandreturnargs = (arr, ...args) => [
    ...arr, 
    ...args.map((v) => v * 2)
];
console.log(doubleandreturnargs([1, 2, 3], 4, 4));

const mergeobjects = (obj1, obj2) => ({...obj1,...obj2});
console.log(mergeobjects({a: 1, b: 2}, {c: 3, d: 4}));


// DOM 

document.all[962].innerText ="Peter Parker";

// Selecting Element By ID

document.getElementById("sebi").innerText ="SEBI";

// Selecting Element By Class Name

console.dir(document.getElementsByClassName("asdfg"));
console.dir(document.getElementsByClassName("asfg")); // Wrong Class Name
console.dir(document.getElementsByClassName("asdfg")[1]);

// Selecting Element By Tag Name 

console.dir(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("s")); // Wrong Id Name
console.dir(document.getElementsByTagName("p")[100]);

// Query Selector

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#sebi"));
console.dir(document.querySelector(".asdfg"));
console.dir(document.querySelectorAll("p.asdfg"));

// Setting Content In ObjectsUsuing Properties And Methods

console.dir(document.querySelector("#qwas"));
console.dir(document.querySelector("#qwas").innerText);
console.dir(document.querySelector("#qwas").textContent);
console.dir(document.querySelector("#qwas").innerHTML);

// Attributes Manipulating

console.dir(document.querySelector("span"));
let sat = document.querySelector("span");
console.log(sat.getAttribute("id"));
sat.setAttribute("id", "apa");
console.dir(document.querySelector("span"));
console.log(sat.getAttribute("id"));

// Manipulating Style (With Style Attribute)

let mssv = document.querySelector("#mss");
console.dir(mssv.style);
mssv.style.backgroundColor = "lime";

// Manipulating Style Usuing classList Property



