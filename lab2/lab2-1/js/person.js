function showPerson(fname, lname, age){
    // Create an object:
    var person = {
    firstName: fname,
    lastName: lname,
    age: age,
    };
   
    // Display some data from the object:
    document.getElementById("result").innerHTML =
    person.firstName + " is " + person.age + " years old.";
   }