sap.ui.define(
  ["tata/fin/led/controllers/BaseController"],
  function (BaseController) {
    return BaseController.extend("tata.fin.led.controllers.product", {
      _selectedProduct: null,
      _selectedCategory: "",
      onInit: function () {
        this._oRouter = this.getOwnerComponent().getRouter();
        this._oRouter
          .getRoute("ProductPage")
          .attachMatched(this._onRouteMatched, this);
      },
      onAfterRendering: function () {},

      _onRouteMatched: function (oEvent) {
        var { categoryType, sIndex } = oEvent.getParameter("arguments");
        this._selectedCategory = categoryType;
        this._selectedProduct = this.getView()
          .getModel()
          .getProperty("/selectedProducts")[sIndex];
        this.getView()
          .getModel()
          .setProperty("/selectedProduct", this._selectedProduct);
        this.getView().byId("prodTitle").setText(this._selectedCategory);
        var viewedItems = this.getView().getModel().getProperty("/viewedItems");
        viewedItems.push(this._selectedProduct);
        this.getView().getModel().setProperty("/viewedItems", viewedItems);
        this._changeLabels();
      },

      _changeLabels: function () {
        var propArr = [];
        var valArr = [];

        switch (this._selectedCategory) {
          case "Screens":
            propArr = [
              this.getI18nModel("Product_ScreenResolution"),
              this.getI18nModel("Product_RefreshRate"),
              this.getI18nModel("Product_Manufacturer"),
            ];

            valArr = [
              this.getModelBase().getProperty("/selectedProduct/resolutions"),
              this.getModelBase().getProperty("/selectedProduct/refreshRate"),
              this.getModelBase().getProperty("/selectedProduct/company"),
            ];

            this._fillLabels(propArr, valArr);
            break;

          case "Mice":
            propArr = [
              this.getI18nModel("Product_Interface"),
              this.getI18nModel("Product_DPI"),
              this.getI18nModel("Product_buttons"),
            ];
            valArr = [
              this.getModelBase().getProperty("/selectedProduct/interface"),
              this.getModelBase().getProperty("/selectedProduct/dpi"),
              this.getModelBase().getProperty("/selectedProduct/buttons"),
            ];

            this._fillLabels(propArr, valArr);
            break;

          case "CPUs":
            propArr = [
              this.getI18nModel("Product_architecture"),
              this.getI18nModel("Product_Core"),
              this.getI18nModel("Product_BaseFrequency"),
            ];
            valArr = [
              this.getModelBase().getProperty("/selectedProduct/architecture"),
              this.getModelBase().getProperty("/selectedProduct/Cores/threads"),
              this.getModelBase().getProperty("/selectedProduct/baseFreq"),
            ];

            this._fillLabels(propArr, valArr);
            break;

          case "Keyboards":
            propArr = [
              this.getI18nModel("Product_Connectivity"),
              this.getI18nModel("Product_Size"),
              this.getI18nModel("Product_Type"),
            ];
            valArr = [
              this.getModelBase().getProperty("/selectedProduct/connectivity"),
              this.getModelBase().getProperty("/selectedProduct/size"),
              this.getModelBase().getProperty("/selectedProduct/type"),
            ];

            this._fillLabels(propArr, valArr);

            break;

          case "Speakers":
            propArr = [
              this.getI18nModel("Product_Speaker_Connectivity"),
              this.getI18nModel("Product_Charge"),
              this.getI18nModel("Product_Voice"),
            ];
            valArr = [
              this.getModelBase().getProperty("/selectedProduct/connectivity"),
              this.getModelBase().getProperty("/selectedProduct/charge"),
              this.getModelBase().getProperty("/selectedProduct/voice"),
            ];

            this._fillLabels(propArr, valArr);

            break;
        }
      },

      _fillLabels: function (propArr, valArr) {
        var prop1 = this.getView().byId("prop1");
        var prop2 = this.getView().byId("prop2");
        var prop3 = this.getView().byId("prop3");
        console.log(valArr);
        prop1.setTitle(propArr[0]);
        prop1.setText(valArr[0]);

        prop2.setTitle(propArr[1]);
        prop2.setText(valArr[1]);

        prop3.setTitle(propArr[2]);
        prop3.setText(valArr[2]);
      },

      /**
       * @override
       * @param {any} event
       */
      // onBack: function(event) {
      //    BaseController.prototype.onBack.apply(this, arguments);
      // }
    });
  }
);
