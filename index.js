const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("api-mock.json");

const middleware = jsonServer.defaults({"readOnly": "true"});
server.use(middleware);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1"
  })
)
server.use(router);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://liqcalc-jobs.vercel.app/')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

server.listen(3001, () => {
  console.log("JSON Server is running ...");
})

module.exports = server;