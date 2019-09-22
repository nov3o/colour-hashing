strip = function( str ) {
	return str.replace(/^\s+|\s+$/g, '');
}

hash = function( str ){
	res = 0, i = 0, len = str.length;
	while( i < len ){
	    res  = ((res << 5) - res + str.charCodeAt(i++)) << 0;
	    res %= 4096;
	}
	if( res % 10 == 10 || res % 10 == 0 )
	    res = ( res * (9 - res%10) * (res%10 + 1) ) % 4096;
	else
	    res = ( res * (10 - res%10) * (res%10) ) % 4096;
	return res;
};

getInvertedColour = function( colour ){
	r = 15 - parseInt(colour[0], 16);
	g = 15 - parseInt(colour[1], 16);
	b = 15 - parseInt(colour[2], 16);
	return r.toString(16) + g.toString(16) + b.toString(16);
}

getColourValue = function( value ){
	str = value.toString(16); 
	for( i = str.length; i < 3; i++ )
		str = '0' + str;
	return str; 
}

isDark = function( colorValue ){
	redConst = 0.299*parseInt(colorValue[0],16);
	greenConst = 0.587*parseInt(colorValue[1],16);
	blueConst = 0.114*parseInt(colorValue[2],16);
	darkness = 1 - (redConst + greenConst + blueConst)/16;
	if( darkness < 0.5 )
		return false; // It's a light color
	else
		return true; // It's a dark color
}

// Colour is background colour
addBubble = function( name ){
	name = strip(name);
	colour = getColourValue( hash(name) ); 
	invColour = getInvertedColour(colour);
	newEl = document.createElement("div"); 
	main = document.getElementById("main-block"); 
	newEl.style.backgroundColor = '#' + colour;
	newEl.innerHTML = name[0].toUpperCase() + "<span>" + name + "</span>"; 
	// There's two ways of setting of text colour: 
	//   inverted colour of background and white or black colour 

	// newEl.style.color = '#' + invColour;
	if( isDark(colour) )
		newEl.style.color = "white";
	else
		newEl.style.color = "black";

	// Also, you can enable border
	// newEl.style.border = '2px solid #' + invColour;
	main.appendChild(newEl);
}	