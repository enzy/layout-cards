/**
 * Vertical cards layout style generator
 * @param  {HTMLElement} parent [description]
 * @param  {NodeList} cards  [description]
 *
 * @author Matej Simek (www.matejsimek.cz)
 */
var layoutCards = function(parent, cards, margin){
	var count = cards.length;
	var columns = 0;
	var floors = [];

	var parentTop = parent.offsetTop;
	var parentLeft = parent.offsetLeft;

	// Determinate number of columns based on null top position
	for (var i = 0; i < count; i++) {
		var el = cards[i];
		var top = el.offsetTop - margin - parentTop;
		var left = el.offsetLeft - parentLeft;
		if(top <= 0){
			columns++;
			floors[left] = 0;
		} else {
			break;
		}
	};

	// Store bottom position of each column to move next row at it
	// Start from first column
	var column = 0;
	// Move every card to latest floor value and update it with card height
	for (var i = 0; i < count; i++) {
		var el = cards[i];
		el.style.top = 0;
		var top = el.offsetTop - margin - parentTop ;
		var left = el.offsetLeft - parentLeft;
		// Move element up
		el.style.top = floors[left] - top + 'px';
		// Store bottom floor of column
		floors[left] += el.offsetHeight + margin*2;
	};
};
