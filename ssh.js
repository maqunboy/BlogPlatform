const Client = require('ssh2').Client;

var conn = new Client();

conn.on('ready', function() {
  console.log('Client :: ready');
  conn.exec('***********', function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream-close-code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    })
  });
}).connect({
  host: 'host',
  username: 'username',
  password: 'password'
});
