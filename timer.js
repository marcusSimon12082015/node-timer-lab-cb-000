process.argv.shift()
process.argv.shift()

var input = process.argv.shift()
if (input.includes("s")) {
    var inputNumber = parseInt(input.substring(0,input.indexOf("s")));
    var interval = global.setInterval(function(){
      if (inputNumber === 0) {
        global.clearInterval(interval)
        process.exit()
      }
      console.log("Left: "+(--inputNumber)+"s")
    },1000)
} else {
  var inputNumber = parseInt(input.substring(0,input.indexOf("m")));
  var interval = global.setInterval(function(){
    if (inputNumber === 0) {
      global.clearInterval(interval)
      process.exit()
    }
    if (inputNumber <= 60) {
      console.log("Left: "+(--inputNumber)+"s")
    } else {
      console.log("Left: "+(--inputNumber)+"s")
    }
  },1000)
}
