/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {
	var model = createListModel(config);
	model.getTotalPrice = function() {
    	var idx;
    	var total = 0;
    	for (idx = 0; idx < this.items.length; ++idx) {
    		total = total + this.items[idx].price;
    	}
    	return total.toFixed(2);

	}; //getTotalPrice()
	model.toJSON = function() {
		JSON.stringify(this.items)
	}
	return model;
} //createCartModel()