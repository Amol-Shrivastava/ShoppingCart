sap.ui.define(
  ["tata/fin/led/controllers/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    return BaseController.extend("tata.fin.led.controllers.Welcome", {
      _oModel: null,
      onInit: function () {
        var obj = {
          promotedItems: [],
          recentlyViewedItems: [],
          nothingViewed: [{
            text: "Hi You are here for the first time, Enjoy the experience",
          }],
          nothingCart: [{
            text: "Your Cart is Empty.."
          }]
        };

        let oModel = new JSONModel();
        oModel.setData(obj);

        this.getView().setModel(oModel, "promoted");

        this._oModel = this.getOwnerComponent().getModel("products");

        this._oModel.attachRequestCompleted(() => {
          this._getPromottedItems(this._oModel);
        });
},

      onBeforeRendering: function () {},

      onAfterRendering: function () {
        this._getRecentlyViewedItems();
      },

      _getPromottedItems: function (model) {
        let { products } = model.getData();
        let randomElArr = [];

        let el1 = this._randomElements(products);
        let el2 = this._randomElements(products);

        if (el1 == el2) {
          el2 = this._randomElements(products);
        } else {
          randomElArr.push(el1);
          randomElArr.push(el2);
        }

        this.getView()
          .getModel("promoted")
          .setProperty("/promotedItems", randomElArr);

        console.log(this.getView().getModel("promoted").getProperty('/promotedItems'));
        // debugger;
      },

      _getRecentlyViewedItems: function() {
        // debugger;
        
        let el1, el2 = {};
        let viewedItemsArr = this.getView().getModel().getProperty('/viewedItems');
        let temp = [];
        if(this.selectedProduct.length == 0){

        }else {
          this.getView().byId('recentlyNotViewedProducts').setVisible(false);
          if(viewedItemsArr.length > 1) {
            for(let i=0; i<viewedItemsArr.length;i++) {
              el1 = viewedItemsArr[viewedItemsArr.length - 2];
              el2 = viewedItemsArr[viewedItemsArr.length - 1];
            }
            temp = [el1, el2];
          }else{
            el1 = viewedItemsArr[viewedItemsArr.length - 1];
            temp = [el1];
          }          
        
          this.getView().getModel('promoted').setProperty('/recentlyViewedItems', temp);
          
          // debugger;

          this.getView().byId('recentlyViewedProducts').setVisible(true);
        }
      },

      _randomElements: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      },

      onSelectProduct: function(oEvent) {
        debugger;
      },

      onAddToCart: function(oEvent) {
      let path = oEvent.getSource().getBindingContext('promoted').getPath();
      let product = this.getView().getModel('promoted').getProperty(path);
      let cartArr = this.getView().getModel().getProperty('/cartItems');
      cartArr.push(product);
      this.getView().getModel().setProperty('/cartItems', cartArr);
      this.getView().byId('cartItems').setVisible(true);
      this.getView().byId('noCartItems').setVisible(false);
      debugger;
    },
     

      
    });
  }
);
