
create_items();

var j = 10; // initial # of items

// tying functions to buttons
document.getElementById( "add_item" ).onclick = function(){ add_item(j); j++ };
document.getElementsByClassName( "delete_item" ).onclick = function() { delete_item() };

// function for creating items
function create_items(){

	var parent_node = document.getElementById('notepad');

	for(var x = 0; x < 10; x++){
		
		var new_item = document.createElement('input');
		new_item.setAttribute('type', 'text');
		new_item.setAttribute('name', "item_" + x);

		var new_break = document.createElement('br');

		var new_delete = document.createElement('input');
		new_delete.setAttribute('type', 'submit');
		new_delete.setAttribute('class', 'delete_item');
		new_delete.setAttribute('value', 'delete');

		add_item_sib = document.getElementById('add_item');
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

	var new_delete = document.createElement('input');
	new_delete.setAttribute('type', 'submit');
	new_delete.setAttribute('class', 'delete_item');
	new_delete.setAttribute('value', 'delete');

	add_item_sib = document.getElementById('add_item');
	parent_node.insertBefore(new_item, add_item_sib);
	parent_node.insertBefore(new_delete, add_item_sib);
	parent_node.insertBefore(new_break, add_item_sib);	

}

// function for deleting item on notepad
function delete_item(){

}