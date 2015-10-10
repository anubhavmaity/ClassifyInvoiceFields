var checkForFloat = function(numeric) {
	var numeric = parseInt(numeric);
	return n === Number(n) && n % 1 !== 0;
}
var checkForInt = function(numeric) {
	var numeric = parseInt(numeric);
	return Number(n) === n && n % 1 === 0;
}
//checks for string of alphabets and numbers
var checkForProductName = function(prod_name) {
	var re = /[a-zA-Z\d-,\/]+/;
	return re.test(prod_name);
}

var checkForCustomerName = function(name) {
	var re = /^[a-zA-Z ]{2,30}$/;
	return re.test(name);
}

var checkForAddress = function(address) {
	var re = /^[a-zA-Z0-9\s,'-]*$/;
	return re.test(address);
}

var checkForProdQuant = function(prod_quant) {
	var re = /^0$|^[1-9][0-9]*$/;
	return re.test(prod_quant);
}

var checkForPrices = function(prod_prices) {
	//check for currency also
	var re = /^-?\d*(\.\d+)?$/;
	return re.test(prod_prices);
}

var checkForMobileNo = function(mobile_no) {
	var re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
	return re.test(mobile_no);
}

var checkForInvoiceNo = function(invoice_no) {
	//implementing

}

var findUnitPriceUnitQuanity = function() {
	//will require postion
	//other than that getting difficult to get the data, it is taking lot of time to multiply everything
	//optimize it
}

var checkForCurrencySymbol = function(price) {
	//have to recheck the code
	var currencySymbols = ['Rs.', '\u20B9'];
	
}

var checkForDate = function(date) {
	var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
	var re1 = /^(([0-9])|([0-2][0-9])|([3][0-1]))\-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\-\d{4}$/
	var re2 = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(([0-9])|([0-2][0-9])|([3][0-1]))\,\s\d{4}$/
	if (re.test(date)) {
		return true;
	}
	else if(re1.test(date)) {
		return true;
	}
	else if(re2.test(date)){
		return true;
	}
}

var checkForPlaceInAddr = function(addr) {
	//list of cities to be created in another file and to be imported in this file
	//less no of cities now, will include later
	var cities = ['Ahmedabad', 'Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Madras', 'Pune', 'Delhi'];

	addr_split = addr.split(" ");
	for (var i=addr_split.length - 1; i>-1; i--) {
		if (cities.indexOf(addr_split[i]) > -1) {
			//console.log(addr_split[i]);
			return true;
		}
	}
	return false;

}


//shift this to script.js
// var arr = [{'field': 'External Brand elements as per the agreed designs and specifications', 'position': 'upper left'}, 
// {'field':'External brand prints as per the agreed designs and specifications', 'position': 'upper right'}, 
// {'field': 'Floor Directory as per the agreed designs and specifications', 'Design/ Agency  Charges', 'Packaging, Loading, Unloading, Installation Charges', 
// '2', '3', '4', '5' , '2', '1', '2', '₹ 100.00', '₹ 200.00', '₹ 300.00', '₹ 200.00', '₹ 200.00', '₹ 600.00', '₹ 10.00', '₹ 20.00', '₹ 1,030.00', '₹ 23,540.00', '-₹ 2,817.50', 
// '₹ 3.71', '₹ 28,000.00', '₹ 2,676.21', 'Apr 09, 2015', 'CABS/INV/15-16/MV/001', 'CABS/EST/14-15/MV/048', 'XXX/NO/PROJ/PO/2014-15/10/025', 'Mr Amod Jha', 'XXX YYT New Delhi']

var arr = [{'data':'Mr Amod Jha, XXX, YYT, New Delhi', 'position': '3A'}, {'data':'Apr 09, 2015', 'position':'3E'}, 
{'data': 'CABS/INV/15-16/MV/001', 'position':'4E'}, {'data': 'CABS/EST/14-15/MV/048', 'position': '5E'}, 
{'data': 'XXX/NO/PROJ/PO/2014-15/10/025', 'position': '6E'}, {'data': 'Mr Amod Jha', 'position': '7E'}, {'data': '1', 'position':'14A'}, 
{'data': 'External Brand elements as per the agreed designs and specifications', 'position':'14BC'},
{'data': '2', 'position':'14D'}, {'data': '₹ 100.00', 'position':'14E'}, {'data': '₹ 200.00', 'position':'14F'}, {'data': '2', 'position':'15A'},
{'data': 'External brand prints as per the agreed designs and specifications	', 'position':'15BC'}, {'data': '1', 'position':'15D'}, 
{'data': '₹ 200.00', 'position':'15E'}, {'data': '₹ 200.00', 'position':'15F'},
{'data': '3', 'position':'16A'}, {'data': 'Floor Directory as per the agreed designs and specifications	', 'position':'16BC'}, 
{'data': '2', 'position':'16D'}, {'data': '₹ 300.00', 'position':'16E'}, {'data': '₹ 600.00', 'position':'16F'},
{'data': '4', 'position': '17A'}, {'data': 'Design/ Agency  Charges', 'position':'17BC'}, {'data': '₹ 10.00', 'position':'17F'},
{'data': '5', 'position': '18A'}, {'data': 'Packaging, Loading, Unloading, Installation Charges', 'position':'18BC'}, 
{'data': '₹ 20.00', 'position':'18F'}, {'data': '₹ 1,030.00', 'position': '22F'}, {'data': '₹ 23,540.00', 'position': '23F'},
{'data': '-₹ 2,817.50', 'position': '24F'}, {'data': '₹ 3.71', 'position': '25F'}, {'data': '₹ 28,000.00', 'position': '26F'},
{'data': '₹ 2,676.21', 'position': '27F'}]

var classifyFields = function(arr) {
	var output_arr = [];
	for (var i = 0; i< arr.length; i++) {

		
		var fields_dict = {};
		fields_dict["field"] = arr[i];
		fields_dict["category"] = []

		if (checkForDate(arr[i])) {
			//console.log(arr[i] + " is date");
			
			fields_dict["category"].push("date");
		}
		if (checkForAddress(arr[i]) && checkForPlaceInAddr(arr[i])) {
			//console.log("hi");
			//console.log(checkForAddress(arr[i]));
			//console.log(checkForP,laceInAddr(arr[i]));
			fields_dict["category"].push("address");
		}
		if (checkForCustomerName(arr[i])) {
			//console.log(arr[i] + " is Customer Name");
			fields_dict["category"].push("Customer name");
		}
		
		if (checkForProdQuant(arr[i])) {

			fields_dict["category"].push("product quantity");
		}
		if (checkForPrices(arr[i]) || checkForCurrencySymbol(arr[i])) {
			//console.log(checkForCurrencySymbol(arr[i]));
			//console.log(arr[i] + " is price");
			fields_dict["category"].push("prices");
		}
		if (checkForProductName(arr[i])) {
			//console.log(arr[i] + " product name");
			fields_dict["category"].push("product name");
		}
		if (checkForMobileNo(arr[i])) {
			fields_dict["category"].push("mobile no");
		}
		output_arr.push(fields_dict);
	}
	console.log(output_arr);
}

var arrangeByRow = function(arr) {
	var output_arr = [];
	var row_no = parseInt(arr[0]['position']);
	count = 0;
	var fields_dict = {};
	fields_dict[count] = [];
	for (var i=0; i<arr.length; i++) {
		
		
		var current_row_no = parseInt(arr[i]['position']);
		//console.log(current_row_no);
		if (current_row_no === row_no) {
			fields_dict[count].push(arr[i]['data']);
		}
		else {
			row_no = current_row_no;
			//console.log(row_no);
			count = count + 1;
			fields_dict[count] = [];
			fields_dict[count].push(arr[i]['data']);

		}

	}
	console.log(fields_dict);
}

arrangeByRow(arr);


