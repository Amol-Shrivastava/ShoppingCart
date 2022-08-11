sap.ui.define([
    'tata/fin/led/controllers/BaseController',
    'sap/m/StandardListItem',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Context',
    'sap/ui/core/Fragment'
], function(BaseController,
        Fragment
    ) {
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
            // var oModel = new JSONModel('models/data.json');
            // this.getView().setModel(oModel);
        },

        /**
         * onRouteMatched :- onRouteMatched function is written 
         * to navTo selected category screen
         * 
         */
         _onRouteMatched: function(oEvent) {
            var productModel = this.getView().getModel().getProperty('/products');
            this._categorySelected = oEvent.getParameter('arguments').categoryType;           
            var productsArr = productModel;
            var selectedProductArr = productsArr.filter(({type}) => type === this._categorySelected)[0].options;
            this.getView().getModel().setProperty('/selectedAccessory', selectedProductArr);
        },

        /**
         * factory function to product listItems on click of category
         * 
         */
        listFragment: null,
        showCategory: function(id, context) {
            if(!this.listFragment) {
            Fragment.load({
                id: id, 
                name: 'tcs.fin.led.fragments.listItem',
                controller: this
            }).then(oValue => {
                this.listFragment = oValue;
            });
            this.listFragment.bindAggregation('items', {
                path: '/selectedAccessory'
            })

        }else{

        }

        return this.listFragment;
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