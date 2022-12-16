// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
const lodash =require("lodash")
function month (){
const lodash =require("lodash")
const month = ['jan','feb','march','april','may','jun','july','aug','sep','oct','nov','dec']
const cate = lodash.chunk(month,4)

let arr =[]
for (let i = 0; i < 20; i++) {
    if (i % 2 !=0){arr.push(i)}
    }
console.log(lodash.tail(arr))
return(JSON.stringify(cate))}

module.exports.month=month()



//- Create 5 arrays of numbers containing a few duplicate values. 
// Using the function union create a merged array with only unique values and print them on console

let a =[11,22,33] ,b =[33,44,55],c=[55,66,77],d=[66,77,88],e=[88,99,10]
const different =lodash.union(a,b,c,d,e)
console.log(different)

// Use the function fromPairs to create an object containing key value pairs.
// For example 
let list =[["horror","The Shining"],["drama","Titanic"],
["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
let pair = lodash.fromPairs(list)
console.log(pair)