sap.ui.define(
  ["tata/fin/led/controllers/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    return BaseController.extend("tata.fin.led.controllers.Welcome", {
      _oModel: null,
      onInit: function () {
        this._oModel = this.getOwnerComponent().getModel("products");

        this._oModel.attachRequestCompleted(() => {
          this._getPromottedItems(this._oModel);
        });
},

      onBeforeRendering: function () {},

      onAfterRendering: function () {
        var obj = {
          promotedItems: [],
          featuredItems: [],
          recentlyViewedItems: [],
        };

        let oModel = new JSONModel();
        oModel.setData(obj);

        this.getView().setModel(oModel, "promoted");
      },

      _getPromottedItems: function (model) {
        let { products } = model.getData();
        let randomElArr = [];

        let el1 = this._randomElements(products);
        let el2 = this._randomElements(products);

        if (el1 == el2) {
          this._randomElements(products);
        } else {
          randomElArr.push(el1);
          randomElArr.push(el2);
        }

        this.getView()
          .getModel("promoted")
          .setProperty("/promotedItems", randomElArr);

        console.log(this.getView().getModel("promoted").getProperty('/promotedItems'));
        debugger;
      },

      _randomElements: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      },

      onSelectProduct: function(oEvent) {
        debugger;
      }
    });
  }
);
