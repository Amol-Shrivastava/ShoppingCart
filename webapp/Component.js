sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent){
    return UIComponent.extend('tata.fin.led.Component', {
        metadata: {
            manifest: 'json'
        },

        init: function() {
            UIComponent.prototype.init.apply(this);

            var oRouter = this.getRouter();
            oRouter.initialize();
        }
    })
})