function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var checkForFloat = function(n) {
	var numeric = parseInt(numeric);
	return n === Number(n) && n % 1 !== 0;
}
var checkForInt = function(n) {
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
	return re.test(address) && checkForPlaceInAddr(address);
}

var checkForProdQuant = function(prod_quant) {
	var re = /^0$|^[1-9][0-9]*$/;
	return re.test(prod_quant);
}

var checkForPrices = function(prod_prices) {
	//check for currency also
	var re = /(?:Rs.|[₹]|Rs)?\s{1}\d+(?:\.\d+)?/;
	return re.test(prod_prices);
}

var checkForMobileNo = function(mobile_no) {
	var re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
	return re.test(mobile_no);
}

var checkForInvoiceNo = function(invoice_no) {
	//implementing

}

var getValueFromPrice = function(price) {
	//remove the currency symbols if there any 
	var rx = /\d+(?:\.\d+)?/;
  	var rx_arr = price.match(rx);
  	var value = parseInt(rx_arr[0]); 
  	return value
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
	return fields_dict;
}

rows_checked = []
//get the products
var getProducts = function(output_array) { 
	var product_array = {};
	var count = 1
	product_array["product#" + count] = Array();
	for (key in output_array) {
		//console.log(key);
		//console.log(output_array[key].length);
		//console.log("----------------------");
		if (output_array[key].length === 5) {
			//checking for serial no
			//console.log("length is 5");
			//console.log(output_array[key][0]);
			if (checkForInt(output_array[key][0]) || true) {
				//console.log("it is a serial no");

				if (checkForProductName(output_array[key][1])) {
					//console.log("It is a product name");
				
					if (checkForProdQuant(output_array[key][2])) {
						var unitProdQuant = parseInt(output_array[key][2]);
						//console.log("It is a quanity");
				
						if (checkForPrices(output_array[key][3])) {
							//var price = parseInt(output_array[key][3]);
							var price = getValueFromPrice(output_array[key][3]);
							//console.log("It is a price");

							if (checkForPrices(output_array[key][4])) {
								var lineTotal = getValueFromPrice(output_array[key][4]);
								//console.log(lineTotal);
								//console.log(price);
								//console.log(unitProdQuant);
								if (parseInt(lineTotal) === (price*unitProdQuant)) {
									//console.log("It is line total");
									product_array["product#" + count++] = Array(output_array[key][0], output_array[key][1], output_array[key][2], output_array[key][3], output_array[key][4]);
									rows_checked.push(key);
									
								}
							}
						}

					}
				}
			}

		}

	}
	return product_array;
}

var getTheField = function(row_data, function_called) {
	var field = [];
	for (key in row_data) {
		
		if (!(isInArray(key, rows_checked))) {
			//console.log(key);
			//console.log(row_data[key]);

			for (var i = 0; i<row_data[key].length; i++) {
				if (function_called(row_data[key][i])) {
					field.push(row_data[key][i]);
				}
			}
		}
	}
	return field
}

var row_data = arrangeByRow(arr)
var products = getProducts(row_data);
var date = getTheField(row_data, checkForDate);
var customer_name = getTheField(row_data, checkForCustomerName);
var address = getTheField(row_data, checkForAddress);
console.log(address);
console.log(customer_name);
console.log(date);
console.log(products);



