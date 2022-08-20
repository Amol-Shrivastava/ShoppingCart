sap.ui.define([
    'tata/fin/led/controllers/BaseController'
], function(BaseController) {
    BaseController.extend('tata.fin.led.controllers.category', {
        _categorySelected : '',
        _productModel: null,
               
        onInit: function() {
            this._router = this.getOwnerComponent().getRouter();
            this._router.getRoute("CategoryPage").attachMatched(this._onRouteMatched, this);            
        },        

        onAfterRendering: function() {
        },

        /**
         * onRouteMatched :- onRouteMatched function is written 
         * to navTo selected category screen
         * 
         */
         _onRouteMatched: function(oEvent) {
            var productModel = this.getView().getModel().getProperty('/products');
            this._categorySelected = oEvent.getParameter('arguments').categoryType;   
            this.byId('categoryPage').setTitle(this._categorySelected);        
            var productsArr = productModel;
            var selectedProductArr = productsArr.filter(({type}) => type === this._categorySelected)[0].options;
            this.getView().getModel().setProperty('/selectedAccessory', selectedProductArr);
        },       
        /**
         * function to navigate to detail section of an Item
         * 
         */
         onItemSelect: function(oEvent) {
            // debugger;
            var item = oEvent.getParameter('listItem');
            var path = item.getBindingContext().getPath();
            var index = path.split('/')[path.split('/').length - 1];
            this.selectedProduct.push(path);
            this._router.navTo('ProductPage', {
                categoryType: this._categorySelected,
                sIndex: index
            })
            debugger;
        },

        /**
         * onFilter :- function to be called when filter button is pressed
         */
        onFilter: function(oEvent) {
            debugger;
        }
    })
})