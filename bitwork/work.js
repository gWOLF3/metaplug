const bitwork = require("bitwork")
const bit = new bitwork({
  rpc: { user: "root", pass: "bitcoin" },
  peer: { host: "167.99.15.90" }
})

const fs = require("fs")

let mBitcom = process.env.BITCOM
console.log("bitcom set to ", mBitcom)

bit.use("parse", "bob")

// first, filter for particular bitcom namespace
if (process.env.BITCOM) {
  bit.use("filter", e => {
    try {
      console.log(e.tx.h)
      console.log(e.out[0].tape[1].cell[0])
      return e.out[0].tape[1].cell[0].s === mBitcom
    } catch (e) {
      console.log("could not find " + mBitcom + "... ", e)
    }
  })
}

// filter the response based on desired protocol settings

// make sure pool exists
if (!fs.existsSync('/mnt/pool')) {
    fs.mkdirSync('/mnt/pool')
  }

bit.on("mempool", e => {
  fs.writeFileSync("mnt/pool/" + e.tx.h, JSON.stringify(e), "utf8")

  // example bitcom protol parser
//  if process.env.PROTO_B {
//      
//}  
  //  for testing:
  console.log("hit ")
})

