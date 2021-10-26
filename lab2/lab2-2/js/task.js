console.log("task 1");

let myarray = [1,3,1,7,9];

// basic array operations

console.log(myarray);
console.log(myarray[1]);
console.log(myarray.length);

myarray.sort();
console.log(myarray);

let index = myarray.findIndex(x => x==7);
console.log(index);

index = myarray.indexOf(7);
console.log(index);

myarray.reverse();
console.log(myarray);

myarray.pop();
console.log(myarray);

index = myarray.findIndex(x => x==9);
myarray.splice(index,1);
console.log(myarray);

// filter, map and reduce

myarray = [1,3,1,7,9];
console.log(myarray);

let filtered = myarray.filter(x => x<6);
console.log(filtered);
console.log(myarray);
console.log(myarray.filter(x => x == 1));

let squared = myarray.map(x => x * x);
console.log(squared);

let add3 = myarray.map(x => x + 3);
console.log(add3);

let pairs = myarray.map(x => [x, String.fromCharCode(x + 64)]);
console.log(pairs);

let sumoflist = myarray.reduce((x,y) => x + y);
console.log(sumoflist);

let productoflist = myarray.reduce((x,y) => x * y);
console.log(productoflist);

let maxoflist = myarray.reduce((x,y) => Math.max(x,y));
console.log(maxoflist);

let flat = myarray.flatMap(x => [x, String.fromCharCode(x + 64)]);
console.log(flat);

// challenge

let coordinates = [[0,1], [3,4], [-5,12], [2,2]];

function distance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1, 2));
}

let distances = coordinates.map(([x,y]) => distance(0,0,x,y));
console.log(distances);

let average = distances.reduce((x,y) => x + y)/distances.length;
console.log(average);
