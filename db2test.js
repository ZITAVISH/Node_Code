var ibmdb = require('ibm_db');
let result;
module.exports.connect=function(matcher){
ibmdb.open("DATABASE=TEST;HOSTNAME=localhost;UID=ROUNAK;PWD=Farcry@5;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);
  let value=matcher;
  let queryst=`select * from CROUTINE as CROUTINE where TNAME='${value}'`;
  conn.query(queryst, function (err, data) {
    if (err) console.log(err);
    else {
    result=data;
    }
    conn.close(function () {
      console.log('connection closed');
    });
  });
});
console.log(result);
return result;
}
module.exports.resul=result;