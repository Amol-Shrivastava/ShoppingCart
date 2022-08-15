sap.ui.define(
  ["tata/fin/led/controllers/BaseController", 
'sap/ui/Device'],
  function (BaseController, Device
	) {
    return BaseController.extend("tata.fin.led.controllers.App", {
      onInit: function () {
        console.log("Inside App controller");        
        var params = {
          busy: false,
          delay: 0,
          layout: "TwoColumnsMidExpanded",
          smallScreenMode: true
      } 
      var appModel = this.createModel(params);
      this.getView().setModel(appModel, 'appView');
      
      var deviceModel = this.createModel(Device);
      this.getView().setModel(deviceModel, 'device');
      
      },

      onStateChange: function(event) {
        var layout = event.getParameter('layout');
        var maxColumn = event.getParameter('maxColumnsCount');
        if(maxColumn === 1)
          this.getView().getModel('appView').setProperty('smallScreenMode', true);
        else {
          this.getView().getModel('appView').setProperty('smallScreenMode', false)
          if(layout === 'OneColumn'){
            this._setLayout('Two');
          }
        }
      },

      _setLayout: function(columnCount) {
        this.getView().getModel('appView').setProperty('/layout', columnCount+"Column"+(columnCount === "One" ? "": "sMidExpanded"))
      }
    });
  }
);
