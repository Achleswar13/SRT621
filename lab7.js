const port = 8989,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request, response) => {
      console.log("Received an incoming request!");
      response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      });
      let today = new Date();
      response.write("The time right now is  "+today);
      response.end();
      console.log(`Sent a response : ${today}`);
    });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
