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
                defaults = {
                    selection:'.comparison-selection',
                    results:'.comparison-results'
                };

            self.opts = $.extend({}, defaults, opts);
            return self.init(elt);
        };

        /**
         * Plugin Prototype
         * @type {Object}
         */
        $[pluginName].prototype = {
            init:function(elt){
                var self = this;
                self.elt = $(elt);
                self.ajaxUrl = self.elt.data('url');
                self.selection = self.elt.find(self.opts.selection);
                self.results = self.elt.find(self.opts.results);
                self.resultsLi = self.results.find('>li');
                self.selects = self.selection.find('select');
                self.options = self.selects.find('option');
                self.selectsLength = self.selects.length;
                self.defaultContent = self.resultsLi.eq(0).text();

                self.selects.on('change',function(){
                    self.loadProduct($(this));
                });
            },
            loadProduct:function(jElt){
                var self = this,
                    that = jElt,
                    thatIndex = self.selects.index(that),
                    thatVal = that.val(),
                    thatLi = self.resultsLi.eq(thatIndex);

                if(self.ajaxCalls && self.ajaxCalls['call'+thatIndex]){
                    self.ajaxCalls['call'+thatIndex].abort();
                }

                self.selected = [];
                self.options.removeAttr('disabled');

                for(var i = 0; i < self.selectsLength; i++){
                    var value = self.selects.eq(i).val();
                    !(value === '') && self.selected.push(value);
                }

                if(self.selected.length){
                    for(var i = 0; i < self.selectsLength; i++){
                        var thisSelect = self.selects.eq(i),
                            options = thisSelect.find('option');

                        for(var j = 0, optsLgth = options.length; j < optsLgth; j++){
                            var option = options.eq(j);
                            if(!option.is(':selected') && ~$.inArray(option.val(),self.selected)){
                                option.prop('disabled','disabled');
                            }
                        }
                    }
                }

                thatLi.empty();

                if(thatVal){
                    thatLi.addClass('loading');
                    !self.ajaxCalls && (self.ajaxCalls = {});
                    self.ajaxCalls['call'+thatIndex] = $.ajax({
                        url: self.ajaxUrl,
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'prd': thatVal
                        },
                        success: function(data) {
                            var tpl = '<ul><li><span>Name :</span>'+data.name+'</li><li><span>Price :'+data.price+' €</li><li><span>OS :'+data.os+'</li><li><span>Dimensions :'+data.dimensions.l+'x'+data.dimensions.d+'x'+data.dimensions.w+'</li><li><span>Weight :'+data.weight+'</li><li><span>Transport Weight :'+data.transportWeight+'</li><li><span>Processor :'+data.processor+'</li><li><span>Processor Speed :'+data.processorSpeed+'</li><li><span>RAM :'+data.ram+'</li><li><span>Type Of Storage :'+data.typeOfStorage+'</li><li><span>Capacity :'+data.storageCapacity+'</li></ul>';
                            thatLi.removeClass('loading').html(tpl);
                        },
                        error:function(){
                            thatLi.removeClass('loading').html('Loading Error');
                        }
                    });
                }else{thatLi.text(self.defaultContent)}

            }
        };

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
