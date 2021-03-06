        // Some JavaScript code ...
        console.log('Hello the funny funny World');

        // Latest convention after es6 is to use let keyword to declare a variable, as var has issues
        // So if declare only, and don't initialise, the variable will be undefined.

        let blonky;
        console.log(blonky);


        //Use const to prevent variable from ever changing or being re-assigned
        const interestRate = 0.3;

        let firstName = 'Stefano';
        console.log(`Name is ${firstName} and type is ${typeof(firstName)}`);


        // Below is just called object in tutorial, type is object. Is pretty much a Python Dictionary
        let person = {
            name: 'Mosh',
            age: 30
        };

        //Dot notation
        person.name = 'John';

        //Bracket notation
        person['name'] = 'Mary';

        console.log(person.name);
        console.log(person['age']);
        console.log(typeof (person));


        // JavaScript Types
        // 2 types - Primitive/Value Type and Reference Type
        //
        // Primitive - String, Number, Boolean, undefined, null
        //              null is used when want to clear value of variable
        //              in es6 is another primitave - symbol
        //
        // Reference - Object, Array, Function

        let pronky = {};// This is known as an object literal



        // Arrays
        //
        let selectedColors = [];// Array literal, empty array
        selectedColors[0] = 'red'; selectedColors[1] = 'blue';
        console.log(selectedColors); console.log(typeof(selectedColors));// Arrays are type object as well

        // Functions
        // like C name is a parameter, and only has scope inside function
        function greet(name, lastName) {
            // body goes here
            console.log('Hello Function ' + name + ' ' + lastName);
        }


        // So below 'Jack' is argument when function is called. But in funtion definition, name is called a parameter.
        // Note: if you pass wrong number of args, so only 1 below, then in function the parameter lastName is undefined
        greet('Jack');



        // Comparison Operators
        //
        // Equality Operators
        // Strict Equality (Type and Value must match)
        // most of time will just use the below
        console.log(1 === 1);

        // Lose Equality (Values match, even though types do not)
        // If types do not match, this operator will convert the right to what is on the left
        console.log('1' == 1);
        console.log(true == 1);

        // Ternary Operators
        //
        let points = 110;
        let type = points > 100 ? 'gold' : 'silver';
        console.log(type);



        // Logical Operators
        // Logical AND (&&)
        // Logical OR (||)
        // Logical NOT (!)

        // Falsy (false)
        // undefined
        // null
        // 0
        // false
        // ''
        // NaN

        //Anything that is not Falsy -> Truthy

        // So these operands compare until they find truthy

        let userColor = undefined;
        let defaultColor = 'blue';
        let currentColor = userColor || defaultColor;
        
        console.log(currentColor);



        // BitWise Operators
        // Uses binary form of numbers

        // 1 = 00000001
        // 2 = 00000010
        // Result, R comparison is in column type fashion, or comparing same bit position in binary representation
        // R1 = 00000011 which is 3 in decimal system
        // R2 = 00000000 which is 0

        console.log(1 | 2);// Bitwise OR, give the result R1
        console.log(1 & 2);// Bitwise AND, give the result R2

        // An example of using Bitwise in real world is read, write, execute permissions, which actually exists in Linux.
        // See part 24 in JS-basics-for-beginners

        let a = 'red';
        let b = 'blue';
        let tempb = b;

        b = a;
        a = tempb;


        console.log('a is : ', a);
        console.log('b is : ', b);
