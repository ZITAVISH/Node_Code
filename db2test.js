var ibmdb = require("ibm_db"),
  //connString = "DATABASE=database;HOSTNAME=hostname;PORT=port;PROTOCOL=TCPIP;UID=username;PWD=password;";
  connString = "DATABASE=TEST;HOSTNAME=localhost;UID=ROUNAK;PWD=Farcry@5;PORT=50000;PROTOCOL=TCPIP";
module.exports.connect=function(matcher){
let result;
try {
  var option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
  var conn = ibmdb.openSync(connString, option);
  let value=matcher;
  let queryst=`select * from CROUTINE as CROUTINE where TNAME='${value}'`;
 let res=conn.querySync(queryst);
  return res;
} catch (e) {
  console.log(e.message);
}
//console.log("Outside function");
//console.log("this is returned value");
//return result;
};
/**
 * , function (err, rows) {
    if (err) {
      console.log(err);
    }
    else {
      result = rows;
    }
    console.log("Inside function");
    console.log(result);
    
    conn.closeSync();
    console.log("Inside function after con close");
    console.log(result);
    return result;
    //console.log(rows);
 * 
 */