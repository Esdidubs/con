const heightConversions = {
	kilometer          : { size: 1000, name: 'kilometer', pluralName: 'kilometers' },
	hectometer         : { size: 100, name: 'hectometer', pluralName: 'hectometers' },
	decameter          : { size: 10, name: 'decameter', pluralName: 'decameters' },
	meter              : { size: 1, name: 'meter', pluralName: 'meters' },
	decimeter          : { size: 0.1, name: 'decimeter', pluralName: 'decimeters' },
	centimeter         : { size: 0.01, name: 'centimeter', pluralName: 'centimeters' },
	millimeter         : { size: 0.001, name: 'millimeter', pluralName: 'millimeters' },
	nauticalMile       : { size: 1852, name: 'nautical mile', pluralName: 'nautical miles' },
	mile               : { size: 1609.344, name: 'mile', pluralName: 'miles' },
	yard               : { size: 0.9144, name: 'yard', pluralName: 'yards' },
	foot               : { size: 0.3048, name: 'foot', pluralName: 'feet' },
	inch               : { size: 0.0254, name: 'inch', pluralName: 'inches' },
	bradPitt           : { size: 0.0254 * 71, name: 'Brad Pitt', pluralName: 'Brad Pitts' },
	dannyDevito        : { size: 0.0254 * 58, name: 'Danny Devito', pluralName: 'Danny Devitos' },
	warwickDavis       : { size: 0.0254 * 42, name: 'Warwick Davis', pluralName: 'Warwick Davises' },
	tonyCox            : { size: 0.0254 * 42, name: 'Tony Cox', pluralName: 'Tony Coxes' },
	peterDinklage      : { size: 0.0254 * 52, name: 'Peter Dinklage', pluralName: 'Peter Dinklages' },
	vinceVaughn        : { size: 0.0254 * 77, name: 'Vince Vaughn', pluralName: 'Vince Vaughns' },
	chrisHemsworth     : { size: 0.0254 * 75, name: 'Chris Hemsworth', pluralName: 'Chris Hemsworths' },
	willSmith          : { size: 0.0254 * 74, name: 'Will Smith', pluralName: 'Will Smiths' },
	shaq               : { size: 0.0254 * 85, name: 'Shaq', pluralName: 'Shaqs' },
	yaoMing            : { size: 0.0254 * 90, name: 'Yao Ming', pluralName: 'Yao Mings' },
	tomCruise          : { size: 0.0254 * 67, name: 'Tom Cruise', pluralName: 'Tom Cruises' },
	beyonce            : { size: 0.0254 * 67, name: 'Beyonce', pluralName: 'Beyonces' },
	taylorSwift        : { size: 0.0254 * 70, name: 'Taylor Swift', pluralName: 'Taylor Swifts' },
	scarlettJohansson  : { size: 0.0254 * 63, name: 'Scarlett Johansson', pluralName: 'Scarlett Johanssons' },
	emmaWatson         : { size: 0.0254 * 65, name: 'Emma Watson', pluralName: 'Emma Watsons' },
	eiffelTower        : { size: 0.3048 * 1063, name: 'Eiffel Tower', pluralName: 'Eiffel Towers' },
	statueOfLiberty    : { size: 0.3048 * 305, name: 'Statue of Liberty', pluralName: 'Statues of Liberty' },
	leaningTowerOfPisa : { size: 1 * 56.67, name: 'Leaning Tower of Pisa', pluralName: 'Leaning Towers of Pisa' },
	whiteHouse         : { size: 0.3048 * 70, name: 'White House', pluralName: 'White Houses' }
};
$('#title').replaceWith(
	` <h1 id="title">Units Comparisons</h1> `
); /*
$(function() {
	buttons();
	listSetup();
});

function buttons() {
	$('#form').on('click', '#heightBtn', function() {
		event.preventDefault();
		console.log('Testing');
		convertLength($('#unit').val(), $('#heightCom1').val(), $('#heightCom2').val());
	});
}

function listSetup() {
	
	let listItems = '';
	for (var key in heightConversions) {
		listItems += `<option value="${key}">${heightConversions[key].name}</option>`;
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
	const calculation = unit * heightConversions[con1].size / heightConversions[con2].size;
	let fixedCalculation = parseFloat(calculation.toFixed(8))
		.toString()
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	let item1 = '';
	let item2 = '';
	unit == 1 ? (item1 = heightConversions[con1].name) : (item1 = heightConversions[con1].pluralName);
	fixedCalculation == 1 ? (item2 = heightConversions[con2].name) : (item2 = heightConversions[con2].pluralName);
	const statement = unit + ' ' + item1 + ' is equal to ' + fixedCalculation.toString() + ' ' + item2;
	$('#heightResults').replaceWith(`<div id="heightResults">${statement}</div>`);
	return statement;
} 
*/
