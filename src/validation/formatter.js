// Module 3: src/validator/formatter.js
// 	- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// 	- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// 	- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
let string ="  FunctionUp   "


function format (){
return( string.trim())
}
module.exports.str = format()


function toLower(){
return (string.toLowerCase())
}
module.exports.lower=toLower()

function toUpper(){
    return (string.toLocaleUpperCase())
    }
module.exports.upper=toUpper()
