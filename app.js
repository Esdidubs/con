// Run on load
$(function() {
	buttons();
	listSetup();
});

// Button and select events
function buttons() {
	$('#form').on('click', '#heightBtn', function() {
		event.preventDefault();
		calculateComparison();
	});

	$('#unitSelection').on('change', function() {
		event.preventDefault();
		listSetup();

		// Clear the last conversion and the current number inputted
		$('#heightResults').html('');
		$('#unit').val('');
	});
};

// Populates the dropdowns based on the unit selected
function listSetup() {
	let listItems = '';
	let conversion = $('#unitSelection').val();

	for (var key in conversions[conversion]) {
		listItems += `<option value="${key}">${conversions[conversion][key].name}</option>`;
	}

	$('#heightCom1').html(`<option value="" disabled selected>Item 1</option>${listItems}`);
	$('#heightCom2').html(`<option value="" disabled selected>Item 2</option>${listItems}`);
};

// calculates the conversion and updates the name to be plural if needed
function calculateComparison() {
	let quantity = $('#unit').val();
	let unit1 = $('#heightCom1').val();
	let unit2 = $('#heightCom2').val();
	let conversion = $('#unitSelection').val();

	const calculation = quantity * conversions[conversion][unit1].size / conversions[conversion][unit2].size;

	// Fixes decimal point places based on whether answer is more or less than 1
	let fixedCalculation = 0;
	calculation > 1 ? (fixedCalculation = parseFloat(calculation.toFixed(4))) : (fixedCalculation = parseFloat(calculation.toFixed(12)));

	let item1 = '';
	let item2 = '';

	console.log(quantity);

	// If 1, unit should be singular. Otherwise it's plural.
	quantity == 1 ? (item1 = conversions[conversion][unit1].name) : (item1 = conversions[conversion][unit1].pluralName);
	fixedCalculation == 1 ? (item2 = conversions[conversion][unit2].name) : (item2 = conversions[conversion][unit2].pluralName);

	const resultS = quantity + ' ' + item1 + ' is equal to ' + fixedCalculation.toString() + ' ' + item2;
	$('#heightResults').html(`${resultS}`);
};