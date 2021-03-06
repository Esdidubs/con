const conversions = {

	// Heights calculated based on meter
	heightConversions : {
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
	},

	// Weights calculated based on gram
	weightConversions : {
		kilogram           : { size: 1000, name: 'kilogram', pluralName: 'kilograms' },
		hectogram          : { size: 100, name: 'hectogram', pluralName: 'hectograms' },
		decagram           : { size: 10, name: 'decagram', pluralName: 'decagrams' },
		gram               : { size: 1, name: 'gram', pluralName: 'grams' },
		decigram           : { size: 0.1, name: 'decigram', pluralName: 'decigrams' },
		centigram          : { size: 0.01, name: 'centigram', pluralName: 'centigrams' },
		milligram          : { size: 0.001, name: 'milligram', pluralName: 'milligrams' },
		pound              : { size: 453.59237, name: 'pound', pluralName: 'pounds' },
		ounce              : { size: 453.59237 / 16, name: 'ounce', pluralName: 'ounces' },
		stone              : { size: 453.59237 * 14, name: 'stone', pluralName: 'stones' },
		tonne              : { size: 1000000, name: 'tonne', pluralName: 'tonnes' },
		springTempleBuddha : { size: 1000000 * 1000, name: 'Spring Temple Buddha', pluralName: 'Spring Temple Buddhas' },
		statueOfLiberty    : { size: 453.59237 * 450000, name: 'Statue of Liberty', pluralName: 'Statues of Liberty' },
		greatPyramidOfGiza : { size: 1000000 * 5290000, name: 'Great Pyramid of Giza', pluralName: 'Great Pyramids of Giza' },
		twinkie            : { size: 38.5, name: 'Twinkie', pluralName: 'Twinkies' },
		bigMac             : { size: 240, name: 'Big Mac', pluralName: 'Big Macs' },
		usDollar           : { size: 1, name: 'U.S. Dollar Bill', pluralName: 'U.S. Dollar Bills' },
		donaldTrump        : { size: 453.59237 * 243, name: 'Donald Trump (2019)', pluralName: 'Donald Trumps' },
		bradPitt           : { size: 453.59237 * 155, name: 'Brad Pitt in Fight Club', pluralName: 'Brad Pitts in Fight Club' },
		jonBrowerMinnoch   : { size: 453.59237 * 1400, name: 'Jon Brower Minnoch', pluralName: 'Jon Brower Minnochs' },
		cow                : { size: 453.59237 * 1600, name: 'Cow', pluralName: 'Cows' },
		pygmyMarmoset      : { size: 453.59237 / 16 * 3.5, name: 'Pygmy Marmoset', pluralName: 'Pygmy Marmosets' },
		giraffe            : { size: 453.59237 * 3850, name: 'Giraffe', pluralName: 'Giraffes' },
		beeHummbingbird    : { size: 453.59237 / 16 * 0.5, name: 'Bee Hummingbird', pluralName: 'Bee Hummingbirds' }
	},

	// Volumes calculated based on liter
	volumeConversions :  {
		kiloliter    : { size: 1000, name: 'kiloliter', pluralName: 'kiloliters' },
		hectoliter   : { size: 100, name: 'hectoliter', pluralName: 'hectoliters' },
		decaliter    : { size: 10, name: 'decaliter', pluralName: 'decaliters' },
		liter        : { size: 1, name: 'liter', pluralName: 'liters' },
		deciliter    : { size: 0.1, name: 'deciliter', pluralName: 'deciliters' },
		centiliter   : { size: 0.01, name: 'centiliter', pluralName: 'centiliters' },
		milliliter   : { size: 0.001, name: 'milliliter', pluralName: 'milliliters' },
		fluidOunce   : { size: 0.0295735296875, name: 'U.S. fluid ounce', pluralName: 'U.S. fluid ounces' },
		cup          : { size: 0.0295735296875 * 8, name: 'cup', pluralName: 'cups' },
		pint         : { size: 0.0295735296875 * 16, name: 'pint', pluralName: 'pints' },
		quart        : { size: 0.0295735296875 * 32, name: 'quart', pluralName: 'quarts' },
		gallon       : { size: 0.0295735296875 * 128, name: 'gallon', pluralName: 'gallons' },
		teaspoon     : { size: 0.0295735296875 / 6, name: 'teaspoon', pluralName: 'teaspoons' },
		tablespoon   : { size: 0.0295735296875 / 2, name: 'tablespoon', pluralName: 'tablespoons' },
		cubicInches  : { size: 0.0163871, name: 'Cubic Inch', pluralName: 'Cubic Inches' },
		cubicFeet    : { size: 0.0163871 * 1728, name: 'Cubic Foot', pluralName: 'Cubic Feet' },
		oilBarrel    : { size: 158.9873, name: 'Oil Barrel', pluralName: 'Oil Barrels' },
		canOfCoke    : { size: 0.0295735296875 * 12, name: 'Can of Coca Cola', pluralName: 'Cans of Coca Cola' },
		basketball   : { size: 0.0163871 * 455.9, name: 'Basketball', pluralName: 'Basketballs' },
		baseball     : { size: 0.0163871 * 13.39, name: 'Baseball', pluralName: 'Baseballs' },
		golfBall     : { size: 0.0163871 * 2.482, name: 'Golf Ball', pluralName: 'Golf Balls' },
		bottleOfWine : { size: 1 * 0.75, name: 'Bottle of Wine', pluralName: 'Bottles of Wine' },
		olympicPool  : { size: 0.0163871 * 1728 * 88263, name: 'Olympic Pool', pluralName: 'Olympic Pools' },
		boeing747    : { size: 0.0163871 * 1728 * 35.314667 * 1035, name: 'Boeing 747-400', pluralName: 'Boeing 747-400s' }
	}

}