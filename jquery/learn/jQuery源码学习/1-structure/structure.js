(function(global, factory) {

    factory(global);

})(window, function(window, noGlobal) {
    "use strict";
    var jQuery = function(select, context) {
        return new jQuery.fn.init(selector, context);
    }
    var version = "0.0.0";

    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
    }

    
})
// })(window, function(){

// })(window, function(window, noGlobal){
// 	"use strict";
// 	var jQuery = function(select, context){
// 		return new jQuery.fn.init(selector, context);
// 	}

// 	jQuery.fn = jQuery.prototype = {
// 		jquery: version,
// 		constructor: jQuery,
// 		length: 0,
// 		// toArray: function(){
// 		// 	return slice.call(this);
// 		// }
// 	}
// });
