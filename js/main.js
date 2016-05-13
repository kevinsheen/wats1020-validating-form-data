/* Custom JS goes here. */
$(document).on('ready', function() {
	
$('#order-form').validate({
	submitHandler: function(form) {
		form.submit(); 
	},
	rules: {
		"your-name": {
			required: true,
			maxlength: 128
		},
		
		"your-state": {
			required: true,
			maxlength: 2
		},
		
		"your-zip": {
			required: true,
			maxlength: 5,
			digits: true
		},
		
		"card-holder-name": {
			required: true,
			maxlength: 128
		}, 
	
		"card-number": {
			required: true,
			maxlength: 16,
			creditcard: true
		},
		
		"expiry-month": {
			required: true
		},		
		
		"cvv": {
			required: true,
			maxlength: 3,
			digits: true
		},
		"shipping-method": {
			required: true
		},
		"comments": {
			required: false,
			maxlength: 500
		}
	  }
	});
// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
}); 