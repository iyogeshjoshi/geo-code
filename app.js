/**
 * App server to find near by locations based on the user's current location
 * @author Yogesh Joshi <iyogeshjoshi@gmail.com>
 */

var Config = require('./config/config');
var geocoder = require('node-geocoder')(Config.provider, Config.httpAdapter, Config.extra);

var address = "Shobhapur Bypass Crossing, Rohta Road, Meerut City, MEERUT - 250002";
var address = "Near Health Care Imagine Centre, 2, Vijay Nagar, Vijay Nagar, Meerut - 250001";

if(process.argv.length > 2){
	address = process.argv[2];
}


geocoder.geocode(address, function(err, res){
	if(err) throw err;
	console.log(res);
});
