var checkForCustomerName = function(name) {
	var re = /^[a-zA-Z ]{2,30}$/;
	return re.test(name);
}

var checkForAddress = function(address) {
	var re = /^[a-zA-Z0-9\s,'-]*$/;
	return re.test(address);
}

var checkForProductName = function(prod_name) {
	var re = /[a-zA-Z\d-,\/]+/;
	return re.test(prod_name);
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
	var cities = ['Ahmedabad', 'Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Madras', 'Pune', 'Delhi'];

	addr_split = addr.split(" ");
	for (var i=addr_split.length - 1; i>=0; i--) {
		if (cities.indexOf(addr_split[i]) > -1) {
			console.log(addr_split[i]);
			return true;
		}
	}
	return false;

}


//shift this to script.js
var arr = ['External Brand elements as per the agreed designs and specifications', 'External brand prints as per the agreed designs and specifications', 
'Floor Directory as per the agreed designs and specifications', 'Design/ Agency  Charges', 'Packaging, Loading, Unloading, Installation Charges', 
'2', '3', '4', '5' , '2', '1', '2', '₹ 100.00', '₹ 200.00', '₹ 300.00', '₹ 200.00', '₹ 200.00', '₹ 600.00', '₹ 10.00', '₹ 20.00', '₹ 1,030.00', '₹ 23,540.00', '-₹ 2,817.50', 
'₹ 3.71', '₹ 28,000.00', '₹ 2,676.21', 'Apr 09, 2015', 'CABS/INV/15-16/MV/001', 'CABS/EST/14-15/MV/048', 'XXX/NO/PROJ/PO/2014-15/10/025', 'Mr Amod Jha', 'XXX YYT New Delhi']

for (var i = 0; i< arr.length; i++) {

	if (checkForDate(arr[i])) {
		console.log(arr[i] + " is date");
	}
	else if (checkForCustomerName(arr[i])) {
		console.log(arr[i] + " is Customer Name");
	}
	else if (checkForAddress(arr[i]) && checkForPlaceInAddr(arr[i])) {
		console.log(arr[i] + " is Address");
	}
	else if (checkForProdQuant(arr[i])) {
		console.log(arr[i] + " is product quantity");
	}
	else if (checkForPrices(arr[i]) || checkForCurrencySymbol(arr[i])) {
		console.log(checkForCurrencySymbol(arr[i]));
		console.log(arr[i] + " is price");
	}
	else if (checkForProductName(arr[i])) {
		console.log(arr[i] + " product name");
	}
	else if (checkForMobileNo(arr[i])) {
		console.log(arr[i] + " is mobile no");
	}
	
}