var ghpages = require('gh-pages');

ghpages.publish('_site', {branch:'master'}, function(err) {});