let a = function(x,y){
    console.log(x+y);
    return x+y;
}

let y = function(x,y,z){
    console.log(a(x,y) + z);
    return a(x,y)+z;
}

let z = (3,4,5);
console.log(z);