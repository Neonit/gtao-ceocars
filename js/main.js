function generateTable()
{
	var table = $('<table/>');
	$('<thead><tr><th>Plate</th><th>Range</th><th>Name</th><th>Notes</th></tr></thead>')
		.appendTo(table);
	var tbody = $('<tbody/>').appendTo(table);

	for (var i = 0; i < database.length; ++i)
	{
		var entry = database[i];
		var tr = $('<tr/>').appendTo(tbody);

		for (var j = 0; j < 4; ++j)
		{ $('<td/>', {text: entry[j]}).appendTo(tr); }
	}

	return table;
}

function main()
{
	var table = generateTable();
	table.prop('id', 'car_table');
	$('#frame').append(table);
	table.DataTable({paging: false});
}

$(main);
