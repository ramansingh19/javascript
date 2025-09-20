// // ---------------let & const ------------------------
// //we can declare after declaring the variabble name also
// let a;
// a = 10;


// //in const we cannot decalre after 
// const b = 10; 

// //both have one similarity, in this situation let and const will not be define outer the braces , but var will be valid for this situation 
// {
//   let c = 10
//   const d = 10
//   var e = 20
// }
// console.log(d);
// console.log(e);
// console.log(c);


//--------------------arrow function ------------------------
//three type of arrow function are in the ES6
//1. basic fat arrow function

let w = () => {}
w();

//2. fat function with one parameter
let v = param => param
console.log(v(23));

//multiple paramerter situation 
let s = (param , hy , on ) => ({param , hy , on})
//console.log(s(23, 90 , 88));


//3. fat function with implicit return
let r = () =>  9090;
//console.log(r());

//cannot start with the Zero --> they show error but skip the number 0 and print the number 90
let o = () =>  090;
console.log(o());

//if i want multiple nnumber at the samer time then i have to use the array syntax

let u = () => [2094 , 3439];
//console.log(u());


//--------------------------Template Literals (`Back Tick`)-----------------

//console.log(typeof `Hey Raman what is your birthday Date ?! --> ${1+18} `);


//--------------------------Default parameter---------------------
let data = (a= 0,b=0,c=0) => {
    //console.log(a,b,c);
    
}
data(2,4)
data(2,4,3)
data(2)

//---------------------------------rest & spread-----------------------------
//spread is use for the copy elements into another varable
let spread = [1,2,3,4,5,5,6,]
let copy = [...spread]
//console.log(spread);
//console.log(copy);


//rest , if u want to concat the elements you have to use ...rest 
let rest = (a,b,c,...d) => {
    //console.log(a,b,c,d);
    
}

rest(2,3,4,4,55,6,6,7,6,4);


//------------------------destructing-------------------------------------

let a = [1,2,3,4,5];
let [b,c,d,,f] = a;//--> ,, this will skip the number 
//console.log(b,c,d,f);

let name = {user : 'Raman' , age : '23'}
let {user} = name;
let {age} = name;
//console.log(user);
//console.log(age);
//console.log(name);


//---------------------------new  Promises & async  -------------------

let number = new Promise((res , rej) => {
    let n = Math.floor(Math.random() * 10 ) +  1;
    //console.log(`Generated number is : ${n}`);
    
    if(n < 9){
        return res(n)
    }
    else {
        return rej(n)
    }
})

number.then(n => {
   // console.log(`number is under the nine :- ${n}`);
    
}).catch(n => {
    //console.log(`number is above then Ten :- ${n}`);
    
})

//new problem
let info = new Promise((res , rej) => {
        return res('Good Morning')
})

info.then((data) => {
    //console.log(data);

        return new Promise( (res , rej) => {
            return res('Go get some breafest meal ')

    }).then((data) => {
           // console.log(data);

        return new Promise((res ,rej) => {
            return res('Now , go and study')
            
    }).then((data) => {
            //console.log(data);

            return new Promise((res ,rej) => {
                return res('Aao , beta khana kha loo')
            }).then((data) => {
                //console.log(data);

                return new Promise((res, rej) =>  {
                    return res('its time for the bike ride and some refreshment ')
                }).then((data)=> {
                        //console.log(data); //this is skipped
                        
                })//at that point error is pointing to the rej statement 
                .catch((error) => {
                    //console.log('caught error : ', error);
                    
                })
                
            })
            
    })
            
    })
    
})

//----------------------------------async await-------------------------------------


async function api() {
    let raw = await fetch('https://randomuser.me/api/')
    let data = await raw.json()
    //console.log(data);
    
    // .then((raw) => {
    //         return raw.json();
    // }).then((data) => {
    //         console.log(data);
            
    // })
}
api();


//-------------------------try & catch -------------------------------------
try{
    console.log('hey');
    console.log(hay);


}catch(err){
console.log(err);

}
console.log('Raman');
