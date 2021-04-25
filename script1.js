// Lab 5 Question number 1
console.log("Question 1");
let arr=[1,50,40,3,10];

let res=arr.filter(elem=>elem>20).reduce((sum,elem)=>(sum+elem),0);
console.log(res);

// Lab 5 Question number 2
console.log("Question 2");
let strArr=["angular","java","application","javaScript","python","google"]
let strRes=strArr.filter(elem=>elem.length>=5).filter(elem=>elem.includes('a'));
console.log(strRes);