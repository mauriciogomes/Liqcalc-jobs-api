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
server.listen(3001, () => {
  console.log("JSON Server is running ...");
})

module.exports = server;