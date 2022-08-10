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

        productModel: null,

        oCore: sap.ui.getCore(),
        
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
            // var productModel = null;
            // return productModel = this.getView().getModel() ? this.getView().getModel() : this.getView().setModel(this.createModel('../models/data.json'));
                
        },


        onBack: function(event) {
            debugger;
        }
        

    })
})