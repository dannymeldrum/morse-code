define(['jquery'], function($) {

	var textarea = $('textarea'),
		translate = $('button.btn'),
		close = $('a.close'),
		textandmorse = [
		    {"letter":'A', 'morse':".-"},
		    {"letter":'B', 'morse':"-..."},
		    {"letter":'C', 'morse':"-.-."},
		    {"letter":'D', 'morse':"-.."},
		    {"letter":'E', 'morse':"."},
		    {"letter":'F', 'morse':"..-."},
		    {"letter":'G', 'morse':"--."},
		    {"letter":'H', 'morse':"...."},
		    {"letter":'I', 'morse':".."},
		    {"letter":'J', 'morse':".---"},
		    {"letter":'K', 'morse':"-.-"},
		    {"letter":'L', 'morse':".-.."},
		    {"letter":'M', 'morse':"--"},
		    {"letter":'N', 'morse':"-."},
		    {"letter":'O', 'morse':"---"},
		    {"letter":'P', 'morse':".--."},
		    {"letter":'Q', 'morse':"--.-"},
		    {"letter":'R', 'morse':".-."},
		    {"letter":'S', 'morse':"..."},
		    {"letter":'T', 'morse':"-"},
		    {"letter":'U', 'morse':"..-"},
		    {"letter":'V', 'morse':"...-"},
		    {"letter":'W', 'morse':".--"},
		    {"letter":'X', 'morse':"-..-"},
		    {"letter":'Y', 'morse':"-.--"},
		    {"letter":'Z', 'morse':"--.."},
		    {"letter":' ', 'morse':" "}
	    ];	    

	return {

        init: function() {
            this.convert();
            this.close();
        },

        convert: function() {

            translate.on('click',  $.proxy(function(e) {
            	e.preventDefault();
            	input = textarea.val().toUpperCase();

            	if ( input != '' ) {
		            var from = input;
		            var outm = "";
		            for (i = 0; i < from.length; i++) {
		                var from_character = from.charAt(i);
		                for (j = 0; j < textandmorse.length; j++) {
		                    var letter = textandmorse[j].letter;
		                    var morse = textandmorse[j].morse;
		                    if (from_character === letter) {
		                        outm = outm + morse + "/";
		                    }
		                }
		            }

		            textarea.val(outm.substring(0, outm.length-1));

		            $('body').addClass('complete');
            	} else {
					$('body').addClass('error');
            	}

            },this));

        },

        close: function() {
            close.on('click',  $.proxy(function(e) {
            	e.preventDefault();
            	textarea.val('');
            	$('body').removeClass('complete');
            },this));
        }
 
	}

});