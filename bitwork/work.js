const bitwork = require('bitwork')
// Remember to replace the "user" and "pass" with your OWN JSON-RPC username and password!
const bit = new bitwork({ rpc: { user: 'root', pass: 'bitcoin'} , peer: { host: '167.99.15.90'} , chain: { prune: '100', chain: './' } })
bit.use("parse", "bob")
bit.on("ready", async () => {
  bit.get("mempool").then((mempool) => {
    console.log("mempool transactions = ", mempool.tx)
  })
})
