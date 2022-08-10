sap.ui.define([
    'tata/fin/led/controllers/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController,Filter,FilterOperator) {
    return BaseController.extend('tata.fin.led.controllers.master', {
        onInit: function() {
            console.log('Inside master controller');
            this._router = this.getOwnerComponent().getRouter();
            // console.log(this.getOwnerComponent().getModel().getData());
        },

        /**
         * onSearch :- function is written to get search result for 
         * search box
         */
        onSearch: function(event) {
            debugger;
            let aFilter= [];
            let search = event.getParameter('query');
            if(search)
                aFilter = new Filter('type', FilterOperator.Contains, search);
            let list = this.getView().byId('accessoryList');
            let listItems = list.getBinding("items");
            listItems.filter(aFilter);            
        },

        /**
         * onCategoryPress - function written to take user to selected 
         * category product screen;
         * @param {*} event 
         */

        onCategoryPress: function(event) {
            // debugger;
            var binding = event.getSource().getBindingContext();
            var productModel = binding.getModel();
            var category = productModel.getProperty(binding.getPath()).type;
            this._router.navTo("CategoryPage", {
                categoryType: category
            })
        }
    })
})