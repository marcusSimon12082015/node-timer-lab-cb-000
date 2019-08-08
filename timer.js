process.argv.shift()
process.argv.shift()

var input = process.argv.shift()
if (input.includes("s")) {
    var inputNumber = parseInt(input.substring(0,input.indexOf("s")));
    var interval = global.setInterval(function(){
    if (inputNumber === 1) {
      global.clearInterval(interval)
    }
    console.log("Left: "+(inputNumber--)+"s")
    },1000)
}

}
