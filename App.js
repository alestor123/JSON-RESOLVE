var {readFileSync,writeFileSync} = require('fs'),
jsonlint = require("jsonlint"),
err;
function Resolve(path) {
var data = readFileSync(path).toString()
try{
jsonlint.parse(data)
return 'its fine'
}
catch(err){
var line = Number(err.message.split(/\n/)[0].replace(/\D/g,'')),
dupe = [...data.split('\n')]; 
delete dupe[line]
writeFileSync(path,dupe.join('\n'))
Resolve(path)
}
}
module.exports = Resolve