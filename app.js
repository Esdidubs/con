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
	cubit              : { size: 0.0254 * 18, name: 'cubit', pluralName: 'cubits' },
	finger             : { size: 0.0254 * 0.75, name: 'finger', pluralName: 'fingers' },
	palm               : { size: 0.0254 * 3, name: 'palm', pluralName: 'palms' },
	span               : { size: 0.0254 * 9, name: 'span', pluralName: 'spans' },
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
	wreckItRalph       : { size: 0.0254 * 108, name: 'Wreck It Ralph', pluralName: 'Wreck It Ralphs' },
	jimmyNeutron       : { size: 0.0254 * 56, name: 'Jimmy Neutron', pluralName: 'Jimmy Neutrons' },
	bowser             : { size: 0.0254 * 105, name: 'Bowser', pluralName: 'Bowsers' },
	mario              : { size: 0.0254 * 44, name: 'Mario', pluralName: 'Marios' },
	kirby              : { size: 0.0254 * 8, name: 'Kirby', pluralName: 'Kirbies' },
	charizard          : { size: 0.0254 * 67, name: 'Charizard', pluralName: 'Charizards' },
	sonic              : { size: 0.0254 * 39, name: 'Sonic', pluralName: 'Sonics' },
	hodor              : { size: 0.0254 * 83, name: 'Hodor', pluralName: 'Hodors' },
	masterChief        : { size: 0.0254 * 79, name: 'Master Chief', pluralName: 'Master Chiefs' },
	eiffelTower        : { size: 0.3048 * 1063, name: 'Eiffel Tower', pluralName: 'Eiffel Towers' },
	statueOfLiberty    : { size: 0.3048 * 305, name: 'Statue of Liberty', pluralName: 'Statues of Liberty' },
	leaningTowerOfPisa : { size: 1 * 56.67, name: 'Leaning Tower of Pisa', pluralName: 'Leaning Towers of Pisa' },
	bigBen             : { size: 1 * 96, name: 'Big Ben', pluralName: 'Big Bens' },
	greatPyramidOfGiza : { size: 0.3048 * 481, name: 'Great Pyramid of Giza', pluralName: 'Great Pyramids of Giza' },
	trumpTower         : { size: 0.3048 * 664, name: 'Trump Tower', pluralName: 'Trump Towers' },
	greenMonster       : { size: 0.3048 * 37, name: 'Green Monster wall', pluralName: 'Green Monster walls' },
	burjKhalifa        : { size: 0.3048 * 2717, name: 'Burj Khalifa', pluralName: 'Burj Khalifa' },
	whiteHouse         : { size: 0.3048 * 70, name: 'White House', pluralName: 'White Houses' },
	giraffe            : { size: 0.3048 * 17, name: 'Giraffe', pluralName: 'Giraffes' },
	ostrich            : { size: 0.3048 * 9, name: 'Ostrich', pluralName: 'Ostriches' },
	elephant           : { size: 0.3048 * 13, name: 'Elephant', pluralName: 'Elephants' },
	beeHummbingbird    : { size: 0.0254 * 2.2, name: 'Bee Hummingbird', pluralName: 'Bee Hummingbirds' },
	tyrannosaurusRex   : { size: 0.3048 * 20, name: 'Tyrannosaurus Rex', pluralName: 'Tyrannosaurus Rexes' },
	brachiosaurus      : { size: 0.3048 * 50, name: 'Brachiosaurus', pluralName: 'Brachiosauruses' },
	triceratops        : { size: 0.3048 * 9.8, name: 'Triceratops', pluralName: 'Triceratopses' }
};

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

function calculateComparison() {
	let statement = $('#unit').val();
	let statement2 = $('#heightCom1').val();
	let statement3 = $('#heightCom2').val();
	const calculation = statement * heightConversions[statement2].size / heightConversions[statement3].size;
	let fixedCalculation = 0;
	calculation > 1
		? (fixedCalculation = parseFloat(calculation.toFixed(2)))
		: (fixedCalculation = parseFloat(calculation.toFixed(8)));

	let item1 = '';
	let item2 = '';
	statement == 1 ? (item1 = heightConversions[statement2].name) : (item1 = heightConversions[statement2].pluralName);
	fixedCalculation == 1
		? (item2 = heightConversions[statement3].name)
		: (item2 = heightConversions[statement3].pluralName);
	const resultS = statement + ' ' + item1 + ' is equal to ' + fixedCalculation.toString() + ' ' + item2;
	$('#heightResults').replaceWith(`<div id="heightResults">${resultS}</div>`);
}

/*
let fixedCalculation = parseFloat(calculation.toFixed(8))
		.toString()
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
*/
