sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device',

], function( Controller,
	JSONModel,
	Device) {
    return Controller.extend('tata.fin.led.controllers.BaseController', {
        init: function() {
            console.log('Inside BaseController');
        },   
        
        createModel: function(url) {
            var deviceModel = new JSONModel();
            deviceModel.loadData(url);
            return deviceModel;
        },

        setModelBase: function(modelIns, modelName) {
            if(modelName) {
                this.getView().setModel(modelIns, modelName);
            }else {
                this.getView().setModel(modelIns);
            }
        },

        getModelBase: function() {
            return this.getView().getModel();
        },

        getI18nModel: function(prop) {
            return this.getView().getModel('i18n').getProperty(prop);
        },


        onBack: function(event) {
            debugger;
        }
        

    })
})