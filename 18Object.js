const obj = {
    name:'Saurabh',
    age:26,
    gender:'Male'
}
obj.occupation= "Software developer";

delete obj.gender;

console.log(obj);
console.log(Object.entries(obj));
console.log(Object.values(obj));
console.log(Object.keys(obj));
