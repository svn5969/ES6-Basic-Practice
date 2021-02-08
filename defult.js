function add(num1 , num2){
    return num1 + num2
}
const total = add(15,15)
console.log(total);


function add(num1 , num2){
    if (num2==undefined) {
        num2 = 0
    }
    return num1 + num2
}
const total2 = add(15)
console.log(total2);



function add(num1 , num2=25){
   
    return num1 + num2
}
const total3 = add(15)
console.log(total3);
