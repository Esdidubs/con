$(function() {
	buttons();
	listSetup();
});

function buttons() {
	$('#form').on('click', '#heightBtn', function() {
		event.preventDefault();
		convertLength($('#unit').val(), $('#heightCom1').val(), $('#heightCom2').val());
	});
}

function listSetup() {
	/*
	$.each(conversions, function(index) {
		$('<option/>', {
			value : index,
			text  : conversions[index].name
		}).appendTo($('.heightCom'));
    }); */
	let listItems = '';
	for (var key in conversions) {
		listItems += `<option value="${key}">${conversions[key].name}</option>`;
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

function convertLength(unit, con1, con2) {
	const calculation = unit * conversions[con1].size / conversions[con2].size;
	let fixedCalculation = parseFloat(calculation.toFixed(8))
		.toString()
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	let item1 = '';
	let item2 = '';
	unit == 1 ? (item1 = conversions[con1].name) : (item1 = conversions[con1].pluralName);
	fixedCalculation == 1 ? (item2 = conversions[con2].name) : (item2 = conversions[con2].pluralName);
	const statement = unit + ' ' + item1 + ' is equal to ' + fixedCalculation.toString() + ' ' + item2;
	$('#heightResults').replaceWith(`<div id="heightResults">${statement}</div>`);
	return statement;
}
