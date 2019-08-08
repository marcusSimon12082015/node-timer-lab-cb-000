process.argv.shift()
process.argv.shift()

var input = process.argv.shift()
if (input.includes("s")) {
  global.setInterval(function(input){
    var inputNumber = parseInt(input.substring(0,input.indexOf("s")));
    console.log("Left: "+ inputNumber -1);
  },1)
} else {

}
