var _ = require('underscore'),
    qs = require('querystring'),
    async = require('async');

var SumoSDK = module.exports = function(config) {
	this.config = _.extend({
		api: 'api.sumo.production',
		site: 'https://sumo.production',
		authorizationPath: '/oauth/authorize',
		revocationPath: '/oauth/revoke',
		tokenPath: '/oauth/token',
		version: '/1.0',
		clientID: null,
		clientSecret: null,
		clientSecertParamName; 'client_secret'
	}, config);
};

SumoSDK.prototype = {
	authorize: function(res, state) {
	}
}