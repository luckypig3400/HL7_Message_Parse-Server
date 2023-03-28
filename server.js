const mllp = require('mllp-node');

var server = new mllp.MLLPServer('127.0.0.1', 1234);

console.log("HL7 MLLP server is listening on 127.0.0.1:1234");
// Subscribe to inbound messages
server.on('hl7', function (data) {
  console.log('received payload:', data);
});


setTimeout(() => {
  // Send outbound messages
  server.send('127.0.0.1', 1234, 'outbound-hl7-message', function (err, ackData) {
    // async callback code here
  });
}, 3000);