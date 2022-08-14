sap.ui.define([
    'tata/fin/led/controllers/BaseController'
], function(BaseController) {
    return BaseController.extend('tata.fin.led.controllers.product', {
        _selectedProduct : null,
        _selectedCategory: '',
        onInit: function() {
            this._oRouter = this.getOwnerComponent().getRouter();
            this._oRouter.getRoute("ProductPage").attachMatched(this._onRouteMatched, this);
        },
        onAfterRendering: function() {

        },

        _onRouteMatched: function(oEvent) {
            
            var {categoryType, sIndex} = oEvent.getParameter('arguments');
            this._selectedCategory = categoryType;
            this._selectedProduct = this.getView().getModel().getProperty('/selectedAccessory')[sIndex];
            this.getView().getModel().setProperty('/productDetail', this._selectedProduct);
            this.getView().byId('prodTitle').setText(this._selectedCategory);
            this._changeLabels();
        },

        _changeLabels: function() {
            
            var propArr = [];
            var valArr = [];

            switch (this._selectedCategory) {
                case 'Screens': 
                propArr = [this.getI18nModel('Product_ScreenResolution'), this.getI18nModel('Product_RefreshRate'), this.getI18nModel('Product_Manufacturer')];

                valArr =  [this.getModelBase().getProperty('/productDetail/resolutions'), this.getModelBase().getProperty('/productDetail/refreshRate'), this.getModelBase().getProperty('/productDetail/company')];

                this._fillLabels(propArr, valArr);
                break;

                case 'Mice': 
                
                propArr = [this.getI18nModel('Product_Interface'), this.getI18nModel('Product_DPI'),  this.getI18nModel('Product_buttons')];
                valArr = [this.getModelBase().getProperty('/productDetail/interface'), this.getModelBase().getProperty('/productDetail/dpi'), this.getModelBase().getProperty('/productDetail/buttons')];

                this._fillLabels(propArr, valArr)
                break;

                case 'CPUs': 

                propArr = [this.getI18nModel('Product_architecture'), this.getI18nModel('Product_Core'), this.getI18nModel('Product_BaseFrequency')];
                valArr = [this.getModelBase().getProperty('/productDetail/architecture'), this.getModelBase().getProperty('/productDetail/Cores/threads'), this.getModelBase().getProperty('/productDetail/baseFreq')]

                this._fillLabels(propArr, valArr);
                break;

                case 'Keyboards': 

                propArr = [this.getI18nModel('Product_Connectivity'), this.getI18nModel('Product_Size'), this.getI18nModel('Product_Type')];
                valArr = [this.getModelBase().getProperty('/productDetail/connectivity'), this.getModelBase().getProperty('/productDetail/size'), this.getModelBase().getProperty('/productDetail/type')];

                this._fillLabels(propArr, valArr);

                break;


                case 'Speakers': 

                
                propArr = [this.getI18nModel('Product_Speaker_Connectivity'), this.getI18nModel('Product_Charge'), this.getI18nModel('Product_Voice')];
                valArr = [this.getModelBase().getProperty('/productDetail/connectivity'), this.getModelBase().getProperty('/productDetail/charge'), this.getModelBase().getProperty('/productDetail/voice')];

                this._fillLabels(propArr, valArr);

                break;
            }

        },

        _fillLabels: function(propArr, valArr) {
            var prop1 = this.getView().byId('prop1');
            var prop2 = this.getView().byId('prop2');
            var prop3 = this.getView().byId('prop3');

            prop1.setTitle(propArr[0]);
            prop1.setText(valArr[0]);

            prop2.setTitle(propArr[1]);
            prop2.setText(valArr[1]);

            prop3.setTitle(propArr[2]);
            prop3.setText(valArr[2]);
        }


        /**
         * @override
         * @param {any} event 
         */
        // onBack: function(event) {
        //    BaseController.prototype.onBack.apply(this, arguments);
        // }
    })
})