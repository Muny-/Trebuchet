

// Variable to store total length of all 2x4's used in project
__total_2x4_length = 0;



/*
	Argument is number in feet, return is same number but in inches
*/
ft = function(feet) {
    return feet*12;
}

/*
	.setColor function requires value from 0-1, so this function converts an 3x8-bit RGB color to a float
*/
rgb = function(red, green, blue) {
    return [red/255, green/255, blue/255];
}

var __premade_2x4s = {}

/*
	Returns a cube whose dimensions are that of a '2x4' piece of lumber, with the specified length
*/
twoby4 = function(length, is_subtractive=false) {

	// If this 2x4 isn't being used to subtract from another object, 
	// add this to the statistical counter for total length of
	// 2x4's used in project
    if (!is_subtractive)
        __total_2x4_length += length;

    if (__premade_2x4s[length] === undefined)
    	__premade_2x4s[length] = cube({size: [length, 1.5, 3.5]});

    return __premade_2x4s[length];
}

// Bolts for bolthole function
FIVE_SIXTEENTHS = (5/16)/2;
THREE_EIGHTHS = (3/8)/2;

var __premade_bolts = {
	[FIVE_SIXTEENTHS]: {},
	[THREE_EIGHTHS]: {}
};

/*
	Returns a cylinder whose dimensions are that of the hole required for the specified bolt
*/
bolthole = function(bolt, length) {

	if (__premade_bolts[bolt][length] === undefined)
		__premade_bolts[bolt][length] = cylinder({r: bolt, h: length}).center();

	return __premade_bolts[bolt][length];

}