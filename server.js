const mllp = require('mllp-node');

var server = new mllp.MLLPServer('127.0.0.1', 1234);

console.log("HL7 MLLP server is listening on 127.0.0.1:1234");
// Subscribe to inbound messages
server.on('hl7', function (data) {
  console.log('received payload:', data);
});


setTimeout(() => {
  // Send outbound messages
  server.send('127.0.0.1', 1234,
    `MSH|^~\&|HMIS|KIWI_TEAM|PACS|DCM4CHEE|20230307171125||OMI^O23^OMI_O23|20230307171125|P|2.5.1||||||UNICODE UTF-8
    PID|||A223456789^^^Issuer^NH~DDS-30939^^^DDS&1.3.2^PI||PatientName||19760612201400|M
    ORC|NW|12028^IHE_OM_OP^1.2.20230307.17.10.1^ISO|12850^IHE_OM_OF^1.2.20230307.17.10.2^ISO||SC
    OBR|1|12028^IHE_OM_OP^1.2.20230307.17.10.1^ISO|||||||||||||||||OMRP202303071710|||||CT`
    , function (err, ackData) {
      // async callback code here
    });
}, 3000);