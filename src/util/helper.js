// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
let d = new Date()
function getYear(){
    
    return (d.getFullYear())
}
module.exports.year = getYear()

function getMonth(){
   return (d.getMonth())
   }
module.exports.month =getMonth()

function getBatchInfo(){
    return (" Amol, W5D1, the topic for today is Nodejs module system’")
}
module.exports.batch = getBatchInfo()