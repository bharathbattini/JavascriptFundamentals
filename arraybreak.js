let a =[13,10,2,10,5];
let b = 10;

let flag = false;
let i = 0;
do{
if(b==a[i]){
console.log("Number found at "+ i + " index");
flag=true;
break;
}
i++
}while(i<a.length)

if(flag==false){
    console.log("Number is not found");
}