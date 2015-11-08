var http = require('http');
var Twitter = require('twitter');
const PORT=3000; 



var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});


function twitStream () {

  var client = new Twitter({
    consumer_key: '3RG5azgnrtq2czFImY285cH5r',
    consumer_secret: '7mGEjD6YAnCdoVa5mpC47FPDvX0QTrqFR2DnUTWQm4fUuc7y46',
    access_token_key: '192961792-YM83W8U1WV4fiUAVZnjnfZ8K6OHa5A2mznH1GB1R',
    access_token_secret: 'hxaUdDCrnYT3PWsIT4fgRwDkT9gciUkSAXFynnuZbUVeu'
  });

  client.stream('statuses/filter', {track: 'beyonce'}, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });
     
    stream.on('error', function(error) {
      console.log('error ',error)
      throw error;
    });
  });

}

twitStream()

function handleRequest(request, response){
    response.write ("test\n");
    response.end('It Works!! Path Hit: ' + request.url);
}