 //Ternary operator :- it is one liner if-else statement
    let age2 = 10;
    let result = age2 > 18 ? 'adult': 'not applicable';
    console.log(result);

    //Guard operator :- they choose either by user value neither they choose his own default value
    let age1 = 0;
    let finalAge1 = age1 || 18;
    console.log(finalAge1);
    console.log(age1);

    //Default operator :- just like guard but it behave falsy value as a truthy 
    let age = 2;
    let finalAge = age ?? 18;
    console.log(finalAge);
    console.log(age);
    