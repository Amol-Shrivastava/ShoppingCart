sap.ui.define([
    'tata/fin/led/controllers/BaseController'
], function(BaseController) {
    return BaseController.extend('tata.fin.led.controllers.product', {
        onInit: function() {
            this._oRouter = this.getOwnerComponent().getRouter();
            this._oRouter.getRoute("ProductPage").attachMatched(this._onRouteMatched, this);
        },
        onAfterRendering: function() {

        },

        _onRouteMatched: function(oEvent) {
            debugger;
        },

        /**
         * @override
         * @param {any} event 
         */
        // onBack: function(event) {
        //    BaseController.prototype.onBack.apply(this, arguments);
        // }
    })
})