//  map method
Array.prototype.MyMap = function(mp) {
    let res = [];  
    for (let i = 0; i < this.length; i++) {
        res.push(mp(this[i], i, this)); 
    }
    return res; 
};

 
let numbers = [99, 20, 3, 4, 50];
let numss = numbers.MyMap((value, idx, arr) => value * 3);
console.log(numss);  
 
// filter method
Array.prototype.Myfilter = function(flt) {
    let res2 = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            res2.push(flt(this[i], i, this));
        }
    }
    return res2;
}

let numss2 = numbers.Myfilter((value, idx, arr) => value);
console.log(numss2);  

// some method
Array.prototype.Mysome = function(sm) {
    for(let i = 0; i<this.length;i++){
        if (this[i] %2 ==0){
            return true;
        }
    }
}
let numss3 = numbers.Mysome((value,idx,arr)=>value);
console.log(numss3)
// every method
Array.prototype.Myevery=function(ev){
    for(let i = 0; i<this.length; i++){
        if (this[i]%2!=0){
            return false; 
        }else{
            return true;
        }
    }
}
let  numss4 = numbers.Myevery((value,idx,arr)=>value);
console.log(numss4)













 
