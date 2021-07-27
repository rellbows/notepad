
create_items();

var j = 10; // initial # of items

// tying functions to buttons
document.getElementById( "add_item" ).onclick = function(){ add_item(j); j++ };
var delete_buttons = document.getElementsByClassName( "delete_item" );
for(var i = 0; i < delete_buttons.length; i++) {
	delete_buttons[i].addEventListener('click', delete_item);
}

// function for creating items
function create_items(){

	var parent_node = document.getElementById('notepad');

	for(var x = 0; x < 10; x++){
		
		var new_item = document.createElement('input');
		new_item.setAttribute('type', 'text');
		new_item.setAttribute('name', "item_" + x);

		var new_break = document.createElement('br');

		var new_delete = document.createElement('button');
		new_delete.setAttribute('type', 'button');
		new_delete.setAttribute('class', 'delete_item');
		new_delete.innerHTML = 'delete';

		var add_item_sib = document.getElementById('add_item');
		parent_node.insertBefore(new_item, add_item_sib);
		parent_node.insertBefore(new_delete, add_item_sib);
		parent_node.insertBefore(new_break, add_item_sib);

	}
}

// function for adding item to notepad
function add_item(x){

	var parent_node = document.getElementById('notepad');

	var new_item = document.createElement('input');
	new_item.setAttribute('type', 'text');
	new_item.setAttribute('name', "item_" + x); // need to figure out how to get next item #

	var new_break = document.createElement('br');

	var new_delete = document.createElement('button');
	new_delete.setAttribute('type', 'button');
	new_delete.setAttribute('class', 'delete_item');
	new_delete.innerHTML = 'delete'
	new_delete.addEventListener('click', delete_item);

	var add_item_sib = document.getElementById('add_item');
	parent_node.insertBefore(new_item, add_item_sib);
	parent_node.insertBefore(new_delete, add_item_sib);
	parent_node.insertBefore(new_break, add_item_sib);	

}

// function for deleting item on notepad
function delete_item(){

	var parent_node = document.getElementById('notepad');
	var delete_item_sib = this;

	delete_item_sib.previousSibling.remove();
	delete_item_sib.nextSibling.remove();
	delete_item_sib.remove();

}