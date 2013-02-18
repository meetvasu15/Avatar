function getDimensionOfDiv(div) {
	var dimension=new Array(2);
	dimension[0]=$(div).height();
	dimension[1]=$(div).width();
	return dimension;
}