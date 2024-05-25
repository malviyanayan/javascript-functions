let sort = function(x){
     
}

let reverse = function(x){
    let s = 0;
    let e = x.length-1;
    while(s<e){
        let temp = x[s];
        x[s] = x[e];
        x[e] = temp;
        s++;
        e--;
    }
}


let x = [1,2,3,4,5,6,7];
console.log("before reversing : ");
console.log(x)
reverse(x);
console.log("After reversing : ");

console.log(x)

