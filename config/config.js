/**
 * Configuration file for geo-code
 * @author Yogesh Joshi <iyogeshjoshi@gmail.com>
 */

module.exports = {
	/*
	available options:
	google, freegeoip, datasciencetoolkit, openstreetmap, mapquest, openmapquest, agol,
	tomtom, nominatimmapquest, opencage, smartyStreet
	*/
	provider: 'google',

	/*
	available options:
	http, https
	*/
	httpProvider: 'https',

	/*
	Extra options for geocoder module
	*/
	extra: {
		apiKey: '',				// api key for provider
		/*
		available options:
		gpx, string [you need to provide extra.formatterPattern key as follow]
			%P country
			%p country code
			%n street number
			%S street name
			%z zip code
			%T State
			%t state code
		*/
		formatter: null,
		// formatterPattern: '#%n, %S, %T - %z, %P - %p',
	},
};
