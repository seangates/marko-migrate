/*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

exports.Taglib = require('./Taglib');
exports.loader = require('./taglib-loader');
exports.lookup = require('./taglib-lookup');
exports.buildLookup = exports.lookup.buildLookup;
var registerTaglib = exports.registerTaglib = exports.lookup.registerTaglib;
exports.excludeDir = exports.lookup.excludeDir;
exports.clearCaches = function() {
    exports.lookup.clearCaches();
    require('./taglib-finder').clearCaches();
};


registerTaglib(require.resolve('./marko-taglib-core.json'));
registerTaglib(require.resolve('./marko-taglib-html.json'));
registerTaglib(require.resolve('./marko-taglib-caching.json'));
registerTaglib(require.resolve('./marko-taglib-layout.json'));
registerTaglib(require.resolve('./marko-taglib-async.json'));
registerTaglib(require.resolve('./marko-taglib-marko-widgets-patch.json'));