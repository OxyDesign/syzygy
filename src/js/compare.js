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
                defaults = { // default settings
                    selection:'.comparison-selection',
                    results:'.comparison-results'
                };

            self.opts = $.extend({}, defaults, opts); // merging custom settings with default settings
            return self.init(elt);
        };

        /**
         * Plugin Prototype
         * @type {Object}
         */
        $[pluginName].prototype = {
            init:function(elt){ // initialization
                var self = this;
                self.elt = $(elt);
                self.ajaxUrl = self.elt.data('url'); // we take the url for the ajax calls on the html (to keep it dynamic)
                self.selection = self.elt.find(self.opts.selection); // selection container (default or custom if is set)
                self.results = self.elt.find(self.opts.results); // results container (default or custom if is set)
                self.resultsUl = self.results.find('>ul'); // container for the datas fetched from the server
                self.selects = self.selection.find('select'); // selects elts we need to observe to know when the user chooses a product
                self.options = self.selects.find('option'); // options in selects to disabled the products already selected
                self.selectsLength = self.selects.length; // number of selects
                self.defaultContent = self.resultsUl.eq(0).html(); // we store the intial content to have it when the user empties the selection

                self.selects.on('change',function(){
                    self.loadProduct($(this)); // when the value in the select changes we call loadProduct to fetch informations about the selected product
                });
            },
            loadProduct:function(jElt){ // loading datas about the selected product
                var self = this,
                    that = jElt, // modified element
                    thatIndex = self.selects.index(that), // index of the modified element
                    thatVal = that.val(), // value of the modified element
                    thatUl = self.resultsUl.eq(thatIndex), // container for the result
                    callIndex = 'call'+thatIndex; // key name where to store the ajax call

                if(self.ajaxCalls && self.ajaxCalls[callIndex]){ // we check if there is already an ajax call for this select
                    self.ajaxCalls[callIndex].abort(); // if it's true we 'kill' the previous call
                }

                self.selected = []; // a new empty array to store all the products selected
                self.options.removeAttr('disabled'); // we remove 'disabled' attributes on all options

                for(var i = 0; i < self.selectsLength; i++){ // we push every value selected to the array, except if it's the empty inital value
                    var value = self.selects.eq(i).val();
                    !(value === '') && self.selected.push(value);
                }

                if(self.selected.length){ // if there is at least one value in the array ...
                    for(var i = 0; i < self.selectsLength; i++){ // ... for each select ...
                        var thisSelect = self.selects.eq(i),
                            options = thisSelect.find('option');

                        for(var j = 0, optsLgth = options.length; j < optsLgth; j++){ // ... then for each option inside ...
                            var option = options.eq(j);
                            if(!option.is(':selected') && ~$.inArray(option.val(),self.selected)){ // ...if the product is already selected (so the value is in the array) in an other select
                                option.prop('disabled','disabled'); // ... we add the 'disabled' attribute
                            }
                        }
                    }
                }

                thatUl.empty(); // we empty the container related to the select

                if(thatVal){ // if there a value on the selected option
                    thatUl.addClass('glyphicon glyphicon-refresh'); // we add a loading icon
                    !self.ajaxCalls && (self.ajaxCalls = {}); // if it's the first ajax call for this instance we create an object to store all the ajax calls
                    self.ajaxCalls[callIndex] = $.ajax({ // we make the call and we store it in the object who stores the pending calls (to abort it later if needed)
                        url: self.ajaxUrl,
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            'prd': thatVal
                        },
                        success: function(data) { // if the call is successful
                            var tpl = '<li><span>Name :</span> '+data.name+'</li><li><span>Price :</span> '+data.price+' €</li><li><span>OS :</span> '+data.os+'</li><li><span>Dimensions :</span> '+data.dimensions.l+' x '+data.dimensions.d+' x '+data.dimensions.w+' mm</li><li><span>Weight :</span> '+data.weight+' kg</li><li><span>Transport Weight :</span> '+data.transportWeight+' kg</li><li><span>Processor :</span> '+data.processor+'</li><li><span>Processor Speed :</span> '+data.processorSpeed+' GHz</li><li><span>RAM :</span> '+data.ram+' GB</li><li><span>Type Of Storage :</span> '+data.typeOfStorage+'</li><li><span>Capacity :</span> '+data.storageCapacity+' GB</li>'; // we create the html content to show the data to the user
                            thatUl.removeClass('glyphicon glyphicon-refresh').html(tpl); // we remove the loading icon and we add the created content
                        },
                        error:function(){ // if the request failed
                            thatUl.removeClass('glyphicon glyphicon-refresh').html('Loading Error'); // we remove the loading icon and we warn the user about the error in the request
                        }
                    });
                }else{thatUl.html(self.defaultContent)} // if there no value on the selected option, we use the initial content

            }
        };

        return $[pluginName];

    }(window));


    $.fn[pluginName] = function(params) {
        return this.each(function() {
            if (!$(this).data(pluginName)) { // we check if there no instance already existing on this element
                $(this).data(pluginName, new $[pluginName](this, params)); // if there no instance we run the plugin and store the instance in the data to retrieve later if needed
            }
        });
    };

})(window.jQuery);
