/*  1.Get user input using the prompt (Enter your age:”). 
If the user is 18 or older, give feedback: “You are old enough to drive.”
But if you are not 18, give feedback-like output.
Output:
Enter your age: 30
You are old enough to drive.
 Output:
Enter your age:15
You are left with 3 years to drive.
*/

// var age= prompt("Enter your age");
// if(age<18){
//     document.getElementById ("age_").innerHTML="You are left with " +  (18- age)+"  years to drive.";
// }
    
//  else if(age>=18){
    
//    document.getElementById ("age_").innerHTML='You are old enough to drive.';
// }
// else{
//    'Not found'; 
// };


/* 2.Compare the values of myAge and yourAge using if... else. 
Based on the comparison log to the console, who is older (me or you)? Use prompt(“Enter your age:”) to get the age as input. Output:
Enter your age: 30
You are 5 years older than me.
*/
/*var yourAge=prompt("Enter your age");
var myAge=22;
if(myAge>yourAge){
   console.log("You are " +(myAge - yourAge) +" years younger than me");
}
else if(myAge=yourAge){
    console.log("You are the same age as me" );
}
else{
    console.log("You are " +(yourAge - myAge) +" years older than me");
};*/
/*3.If a is greater than b, return that a is greater than b else a is less than b. 
Output:
 let a = 4
 let b = 3
4 is greater than 3
*/
/*var b= prompt("Enter Your Number");
var a=4
var num="";
if (b>a) {
   num= "less"
}
else{
    num= "greater" ;
};
document.getElementById("score").innerHTML= a+ " is "+ num  +" then "+ b ;*/

/*4.Write a code that gives grades to students according to their scores:
80-100, A
70-79, B
60-69 C
50-59, D
0 -49, F
*/
/*var scoresMarks=prompt("Enter Your scores");
      var  scores="";
if (scoresMarks<=100 && scoresMarks>80) {
    score=" A";
}
 else if( scoresMarks>=70){
     score="B";
}
else if(scoresMarks>=60){
     score="C";
}
else if(scoresMarks>=50){
     score ="D";
}
 else {
    score= "F";
};
 document.getElementById("score").innerHTML="You'r score is "+ score;
 */
/*5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let month=prompt("Enter Your Month");
if(month==='september' || month=== 'october' || month==='october'){
     console.log(" Autumn");
}
else if(month==='december'|| month ==='january' ||month=='february'){
    console.log("Winter");
}
else if(month==='march' || month==='april'|| month==='may'){
    console.log("Spring");
}
else if(month==='june'||month==='july' || month==='august'){
    console.log(" Summer");
}
else{
   console.log('Not found');
};
/* 3.Switch with Multiple cases 
CASE 1: HTML, CSS, JAVASCRIPT - Frontend 
CASE 2: NODEJS, ExpressJS - Backend
CASE 3: “Not in list” 
*/
/*var subject = prompt("Enter courses:");

switch (subject) {
    case "html":
    case "css":
    case "javascript":
        console.log("Frontend");
        break;
    case "nodejs":
    case "expressjs":
        console.log("Backend");
        break;
    default:
        console.log("Not in list");
        break;
}
*/

/*
2.Write a simple Switch statement for basic calculation
(+,-,*, / , \)(Addition, subtraction, multiple, division, reminder)
Enter two static value

*/
/*
var operation = prompt("Enter the operation (+, -, *, /, %):");
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num2 !== 0 ? num1 / num2 : " zero is not allowed.";
        break;
    case "%":
        result = num2 !== 0 ? num1 % num2 : " zero is not allowed.";
        break;
    default:
        result = "Invalid operation";
}

console.log("Result: " + result);*/
/* 
Using the JavaScript switch statement to get the day count based on a month
In this example, we have four cases:
If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
If the month is 4, 6, 9, or 11, the number of days in that month is 30.
If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
If the month is not in the valid range (1-12), the default branch executes and sets the dayCount variable to -1, which indicates the invalid month.
*/
/*Declare a function fullName and it will print out your full name*/
// function fullName() {
//     var firstName = "NITHUSHNA"; 
//     var lastName = "SIVARASA";   
//     var fullName = firstName + " " + lastName;
//    document.getElementById(name_full).innerHtml=("My full name is: " + fullName);
//   }
  /*Declare a function fullName, and now it takes firstName and lastName as parameters and returns your full name.*/
//   function fullName(firstName,lastName ) {
//     var march= (firstName+lastName);
        //  return march;
//   }
//    var firstName="NITHU";
//    var lastName="SHNA"
//   var march= fullName(firstName,lastName);
//   console.log(march);
  /*3.Declare a function addNumbers, and it takes two parameters and it returns the sum.
*/
//   function Numbers(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
//   }
//   var firstNumber = 5;
//   var secondNumber = 7;
//   var result = Numbers(firstNumber, secondNumber);
//   console.log(result);
  /*4.An area of a rectangle is calculated as follows: area = length x width. Write a function which 
  calculates areaOfRectangle.
*/
//   function areaOfRectangle(length, width) {
//     var area = length * width;
//     return area;
//   }
  
//   var Length = 5;
//   var Width = 10;
//   var area = areaOfRectangle(Length, Width);
//   console.log("The area of the rectangle is: " + area);
/*5.A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width). Write a function which calculates perimeterOfRectangle.
*/
// function perimeterOfRectangle(length, width) {
//     var perimeter = 2 * (length + width);
//     return perimeter;
//   }
  
//   var Length = 15;
//   var Width = 30;
//   var perimeter = perimeterOfRectangle(Length, Width);
//   console.log("The perimeter of the rectangle is: " + perimeter);
/*6.A volume of a rectangular prism is calculated as follows: volume = length x width x height.
 Write a function which calculates volumeOfRectPrism.
*/
// function volumeOfRectPrism(length, width, height) {
//     var volume = length * width * height;
//     return volume;
//   }
//   var Length = 5;
//   var Width = 10;
//   var Height = 3;
//   var volume = volumeOfRectPrism(Length, Width, Height);
//   console.log("The volume of the rectangular prism is: " + volume);
// 7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function areaOfCircle(radius) {
//    return area = Math.PI * Math.pow(radius, 2);
    
//   }
//   console.log('The area of the circle' + areaOfCircle(5));
//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// function circumOfCircle(radius) {  
//     return  circumference = 2 * Math.PI * radius;
 
//   }
//   console.log("The circumference of the circle is: " +circumOfCircle(7) );
//   9The temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converts oC to oF convertCelsiusToFahrenheit.

/*10Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
// function calculateBMI(weight, height) {
//     var bmi = weight / (height * height);
//     return bmi;
//     if (bmi < 18.5) {
//       return "Underweight";
//     } else if (bmi < 25) {
//       return "Normal weight";
//     } else if ( bmi < 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
// };
  
  
//  console.log(calculateBMI(22,1.5));
 //1How do you create an empty JavaScript object?
 let empty={
    
 }
 console.log(empty);
 //2Write a JavaScript program to create an object with properties and methods.Create an object called "person" with properties "name" and "age." and also create a function into that object call IntrouduceYou take a person object as a parameter and logs a massage to the console.
 let person={
    name:"nithushna",
    age:22,
    You: function(){
       console.log("hello,my name is"  +this.name)
    }
};
person.You();
//3.Create a function into that Object called greetStudent that takes a student object as a parameter and logs a greeting message to the console. The message should be like this 'Hello + person name + Welcome to the Coding School'
var student1 = {
    greenStudent :function(student) {
      console.log(`Hello ${student.name} welcome to the Coding School`)
    }
    
  };
  student1.greenStudent ({name :"nithu"})
  //4.Write a JavaScript program to access object properties using dot notation and bracket notation.
  var person_v = {
    firstName: "sivarasa",
    lastName: "nithushna",
    age: "22"
  };
  console.log("First Name: " + person_v.firstName);
  console.log("Last Name: " + person_v.lastName);
  console.log("Age: " + person_v.age);
  console.log("First Name: " + person_v["firstName"]);
  console.log("Last Name: " + person_v["lastName"]);
  console.log("Age: " + person_v["age"]);
  //5.Write a JavaScript program to add a new property to an existing object.Add a new property email with the value "john@example.com" to the person object.
  var person_n = {
    name: "nithu",
    age: 22,
  };
  person_n.email = "nithu@example.com";
  console.log(person_n);
  //6.Write a JavaScript program to remove a property from an object.
  const myObject = {
    name: "NITHU",
    age: 22,
    city: "BATTI"
  };
  console.log(myObject);
  delete myObject.city;
  console.log(myObject);
// 7Write a JavaScript program to check whether a property exists in an object.
const obj = {
    name: "nithu",
     age: 22 
   };
  
 console.log("name" in obj); 
 console.log("email" in obj); 
 console.log(obj.hasOwnProperty ("name"));
 //8.
 function person_c(first,course ){
    this.student= first;
   this.course = course;
  }
  var studentCourse= new person_c("NITHU", "HTML");
  document.getElementById("stu").innerHTML ="Student: " + studentCourse.student + ", Course: " + studentCourse.course;
  const my_Object = {
    name: "vithu",
    age: 20
  };
  
  if (myObject.hasOwnProperty("address")) {
    console.log("Address is there:", myObject.address);
  } else {
    console.log("Address not found");
  }
  
  //Q10
    const book = {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    };
    const bookJSON = JSON.stringify(book);
    console.log(bookJSON);
  //11
  let students = [
   {
        name: "Nithushna",
        age: 21,
        gpa:5,
      },
   {
        name: "Jane ",
        age: 22,
     gpa:6,
    },
   {
        name: "Mike ",
        age: 19,
      gpa:7,
    },
  ];
  console.log(students);
  