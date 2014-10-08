/**
 * October 2014
 * jQuery Plugin for comparison
 */
(function($) {
    'use strict';

    var pluginName = 'compare';

    $[pluginName] = (function(w) {

        var $w = $(w);

        /**
         * Plugin Constructor
         */
        $[pluginName] = function(elt, opts) {
            var self = this,
                defaults = {};

            self.opts = $.extend({}, defaults, opts);
        };

        /**
         * Plugin Prototype
         * @type {Object}
         */
        $[pluginName].prototype = {};

        return $[pluginName];

    }(window));


    $.fn[pluginName] = function(params) {
        return this.each(function() {
            if (!$(this).data(pluginName)) {
                $(this).data(pluginName, new $[pluginName](this, params));
            }
        });
    };

})(window.jQuery);
