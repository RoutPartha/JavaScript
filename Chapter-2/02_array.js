const marvel_heroes=["Thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","Batman"]

marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
const allheroes=marvel_heroes.concat(dc_heroes)
console.log(allheroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes]//spread operation
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Partha"));
console.log(Array.from("Partha"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[100,200,300]




