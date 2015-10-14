//shift this to script.js
// var arr = [{'field': 'External Brand elements as per the agreed designs and specifications', 'position': 'upper left'}, 
// {'field':'External brand prints as per the agreed designs and specifications', 'position': 'upper right'}, 
// {'field': 'Floor Directory as per the agreed designs and specifications', 'Design/ Agency  Charges', 'Packaging, Loading, Unloading, Installation Charges', 
// '2', '3', '4', '5' , '2', '1', '2', '₹ 100.00', '₹ 200.00', '₹ 300.00', '₹ 200.00', '₹ 200.00', '₹ 600.00', '₹ 10.00', '₹ 20.00', '₹ 1,030.00', '₹ 23,540.00', '-₹ 2,817.50', 
// '₹ 3.71', '₹ 28,000.00', '₹ 2,676.21', 'Apr 09, 2015', 'CABS/INV/15-16/MV/001', 'CABS/EST/14-15/MV/048', 'XXX/NO/PROJ/PO/2014-15/10/025', 'Mr Amod Jha', 'XXX YYT New Delhi']

/*
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
*/

// var classifyFields = function(element) {
// 	if (checkForDate(arr[i])) {
// 			//console.log(arr[i] + " is date");
			
// 			fields_dict["category"].push("date");
// 	}
// 	else if (checkForAddress(arr[i]) && checkForPlaceInAddr(arr[i])) {
// 			//console.log("hi");
// 			//console.log(checkForAddress(arr[i]));
// 			//console.log(checkForP,laceInAddr(arr[i]));
// 			fields_dict["category"].push("address");
// 	}
// 	else if (checkForCustomerName(arr[i])) {
// 			//console.log(arr[i] + " is Customer Name");
// 			fields_dict["category"].push("Customer name");
// 	}
		
// 		if (checkForProdQuant(arr[i])) {

// 			fields_dict["category"].push("product quantity");
// 		}
// 		if (checkForPrices(arr[i]) || checkForCurrencySymbol(arr[i])) {
// 			//console.log(checkForCurrencySymbol(arr[i]));
// 			//console.log(arr[i] + " is price");
// 			fields_dict["category"].push("prices");
// 		}
// 		if (checkForProductName(arr[i])) {
// 			//console.log(arr[i] + " product name");
// 			fields_dict["category"].push("product name");
// 		}
// 		if (checkForMobileNo(arr[i])) {
// 			fields_dict["category"].push("mobile no");
// 		}
// }