$(function() {
	buttons();
	listSetup();
});

function buttons() {
	$('#form').on('click', '#heightBtn', function() {
		event.preventDefault();
		console.log('Testing');
		calculateComparison();
	});

	$('#form').on('click', '#unitBtn', function() {
		event.preventDefault();

		listSetup();
	});
}

function listSetup() {
	let listItems = '';
	if ($('#unitSelection').val() == 'heightCompare') {
		for (var key in heightConversions) {
			listItems += `<option value="${key}">${heightConversions[key].name}</option>`;
		}
	} else if ($('#unitSelection').val() == 'weightCompare') {
		for (var key in weightConversions) {
			listItems += `<option value="${key}">${weightConversions[key].name}</option>`;
		}
	} else {
		for (var key in volumeConversions) {
			listItems += `<option value="${key}">${volumeConversions[key].name}</option>`;
		}
	}

	$('#heightCom1').replaceWith(` 
        <select name="heightCom1" id="heightCom1" class="heightCom">
            <option value="" disabled selected>Item 1</option>
            ${listItems}
        </select>`);
	$('#heightCom2').replaceWith(` 
        <select name="heightCom2" id="heightCom2" class="heightCom">
            <option value="" disabled selected>Item 2</option>
            ${listItems}
        </select>`);
}

function calculateComparison() {
	let statement = $('#unit').val();
	let statement2 = $('#heightCom1').val();
	let statement3 = $('#heightCom2').val();
	let unitConversions = [];
	if ($('#unitSelection').val() == 'heightCompare') {
		unitConversions = heightConversions;
	} else if ($('#unitSelection').val() == 'weightCompare') {
		unitConversions = weightConversions;
	} else {
		unitConversions = volumeConversions;
	}

	const calculation = statement * unitConversions[statement2].size / unitConversions[statement3].size;
	let fixedCalculation = 0;
	calculation > 1
		? (fixedCalculation = parseFloat(calculation.toFixed(4)))
		: (fixedCalculation = parseFloat(calculation.toFixed(12)));

	let item1 = '';
	let item2 = '';
	statement == 1 ? (item1 = unitConversions[statement2].name) : (item1 = unitConversions[statement2].pluralName);
	fixedCalculation == 1
		? (item2 = unitConversions[statement3].name)
		: (item2 = unitConversions[statement3].pluralName);
	const resultS = statement + ' ' + item1 + ' is equal to ' + fixedCalculation.toString() + ' ' + item2;
	$('#heightResults').replaceWith(`<div id="heightResults">${resultS}</div>`);
}

/*
let fixedCalculation = parseFloat(calculation.toFixed(8))
		.toString()
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
*/
