const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("api-mock.json");

const middleware = jsonServer.defaults();
server.use(middleware);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1"
  })
)
server.use(router);

/*
server.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'https://liqcalc-jobs.vercel.app/')
  res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Headers', '*')
  // res.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
  next()
})
*/

server.listen(3000, () => {
  console.log("JSON Server is running ...");
})

module.exports = server;