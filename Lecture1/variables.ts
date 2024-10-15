
let greetings : string = "Hello World using var" ; 


console.log(greetings);

greetings="Okay";
greetings.toLowerCase();
console.log(greetings);


// bad practice

let userId : number = 256347.458
userId=4136457.436

// boolean

let isLoggedIn : boolean = false;
isLoggedIn.valueOf();


// Good Practice

let hero : string;

function getHero(){
    return "thor"
}

hero = getHero();



export {}