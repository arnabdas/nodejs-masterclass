var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

//create a server object:
var server = http.createServer(function(req, res) {
  // get the url and parse it
  // true: to parse the query parameters
  var parsedUrl = url.parse(req.url, true);

  // get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+s/g, '');

  // get the query parameters as an object
  var qryStrObj = parsedUrl.query;

  // get the HTTP method
  var method = req.method.toUpperCase();

  // get the headers as an object
  var headers = req.headers;

  // get the payload, if any
  var decoder = new StringDecoder('utf-8');
  var payload = '';
  req.on('data', function(data) {
    payload += decoder.write(data);
  });
  req.on('end', function() {
    payload += decoder.end();

    var str =
      'Request received at: ' +
      trimmedPath +
      ', with method: ' +
      method +
      ', with query parameters: ' +
      JSON.stringify(qryStrObj) +
      ', headers: ' +
      JSON.stringify(headers);
    if (payload) {
      str += ' and  payload: ' + JSON.stringify(payload);
    }
    // send the response
    res.end(str);
    //res.end(str);

    // log the request path
    console.log(str);
  });
});

server.listen(8080, function() {
  console.log('Server is listening on port: 8080');
});
