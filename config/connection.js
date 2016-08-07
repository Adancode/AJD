var mysql = require('mysql');
var whichConnection = {
	localhost: {
		port: 8080,
		host: 'localhost',
		user: 'root',
		password: "Generic123",
		database: "c9"
	}	
  }
if(process.env.JAWSDB_URL){
	var connection = mysql.createConnection( process.env.JAWSDB_URL);
}
else {
	var connection = mysql.createConnection( whichConnection.localhost);
}
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
