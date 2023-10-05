//require,exports, module, __dirname, __filename

//console.log(__dirname)
//console.log(__filename)

let names=["Sankalp","Ekta","Misra"]
let scores=[10,20,30]
//module.exports can only import one element or object.
//module.exports = names
//now again if you use module.exports for scores then names data will be overridden by score data.
//module.exports = scores
//if you want to export multiple data then use module.exports.<variable_name>
module.exports.names = names
module.exports.scores = scores
//we can also add new data which has not declared, in a way given below
module.exports.data = [1,2,3]
console.log(module)