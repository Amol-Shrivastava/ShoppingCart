sap.ui.define([
    'tata/fin/led/controllers/BaseController',
    'sap/m/StandardListItem',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Context'
], function(BaseController,
	StandardListItem,
	JSONModel,
    Context) {
    BaseController.extend('tata.fin.led.controllers.category', {
        _categorySelected : '',
        _productModel: null,
               
        onInit: function() {
            this._router = this.getOwnerComponent().getRouter();
            this._router.getRoute("CategoryPage").attachMatched(this._onRouteMatched, this);
            // console.log(++this._counter1);
            // console.log('Inside onInit: '+this.getView().getModel().getData());
        },        

        onAfterRendering: function() {
            // this._productModel = this.getView().getModel() ? this.getView().getModel() : 
            // console.log(this.getModelBase().getData());
        },

        /**
         * onRouteMatched :- onRouteMatched function is written 
         * to navTo selected category screen
         * 
         */
         _onRouteMatched: function(oEvent) {
            debugger;
            // console.log(this.getModelBase().getBindingContext());
            this._categorySelected = oEvent.getParameter('arguments').categoryType;           
            let list = this.getView().byId("productList");
            // let products = this.getView().getModel().getProperty('/products');
            // let selectedArray = products.filter(({type}) => type === this._categorySelected);
            // this.getView().getModel().setProperty('/selectedAccessory', selectedArray);
            // var sPath = this.getView().getModel().getProperty('/selectedAccessory/options');
            // var context = new Context(this.getView().getModel(), sPath);
            // list.setBindingContext(context, "selectedAccessory")
            // debugger;
            // list.getBindingContext().setPath(`/selectedAccessory/${this._categorySelected}`);
            // debugger;
         
            // this.getView().bindElement(`/Products/${this._categorySelected}`)
        },

        /**
         * onBack :- function to be called when navbutton is pressed
         */
         onBack: function(oEvent) {
            this._router.navTo('Home')
        },

        /**
         * onFilter :- function to be called when filter button is pressed
         */
        onFilter: function(oEvent) {
            debugger;
        }
    })
})