module.exports = {
	//DATABASE CONFIGURATION 
	// the database url to connect
	// url: 'mongodb://localhost:27017/mydbdash'
	url: 'mongodb://'+ process.env.DB_USER +':'+ process.env.DB_USER_PASSWORD +'pass@ds025782.mlab.com:25782/hivemindnews'
	
}
