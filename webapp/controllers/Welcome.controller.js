sap.ui.define(
  [
    "tata/fin/led/controllers/BaseController",
    "sap/ui/model/json/JSONModel"
],
  function (BaseController) {
    return BaseController.extend("tata.fin.led.controllers.Welcome", {
      _oModel: null,
      onInit: function () {
        var obj = {
          promottedItems: [],
          featuredItems: [],
          recentlyViewedItems: []
        };

        this._oModel = this.getOwnerComponent().getModel("products");
       
       this._oModel.attachRequestCompleted(() =>{});
        
        console.log(this._oModel);
      },

      onBeforeRendering: function() {
       
        
      },

      onAfterRendering: function() {
            //  this._getProductArr();
            // var oModel = this.getOwnerComponent().getModel("products");
            // this.getView().setModel(oModel, "products");
            // debugger;
      },

      _getProductArr: function() {
        debugger;
        // var productArr = this.getView().getModel().getProperty('/products');
        
      }

    });

    
  }
);
