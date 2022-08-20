sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device',
    'sap/ui/core/routing/History',
    'sap/ui/core/UIComponent'

], function( Controller,
	JSONModel,
	Device,
	History,
	UIComponent) {
    return Controller.extend('tata.fin.led.controllers.BaseController', {
        selectedProduct: [],
        init: function() {
            console.log('Inside BaseController');
        },   

        _getRouter: function() {
            return UIComponent.getRouter();
        },
        
        createModel: function(url) {
            var deviceModel = new JSONModel();
            deviceModel.setData(url);
            return deviceModel;
        },


        getModelBase: function() {
            return this.getView().getModel();
        },

        getI18nModel: function(prop) {
            return this.getView().getModel('i18n').getProperty(prop);
        },


        onBack: function() {
            debugger;
            var prevHash = History.getInstance().getPreviousHash();
            if(prevHash !== undefined) {
                window.history.go(-1);
            } else {
                this._getRouter().navTo("home");
            }
            
        }
        

    })
})