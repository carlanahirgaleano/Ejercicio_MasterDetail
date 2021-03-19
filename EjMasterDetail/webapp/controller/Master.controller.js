sap.ui.define(
  ["sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
"sap/ui/Device"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Device) {
    "use strict";

    return Controller.extend(
      "EjMasterDetail.EjMasterDetail.controller.Master",
      {
        onInit: function () {
          var oData ={
              value:[
            {
              codigo_producto: "5641563132",
              desc_producto: "Producto 1",
              productId: 0,
            },
            {
              codigo_producto: "2641563125",
              desc_producto: "Producto 2",
             productId: 1,
            },
            {
              codigo_producto: "164483132",
              desc_producto: "Producto 3",
                productId: 2,
            } 
        ]
    };
            let oModel= new JSONModel (oData);
            this.getOwnerComponent().setModel(oModel , "modelProductos")
            this.getOwnerComponent().getRouter().getRoute("RouteMaster").attachPatternMatched(this._onRoutedMatched, this);
        },
        _onRoutedMatched: function (oEvent){
            if(!Device.system.phone){
                var oModel= this.getOwnerComponent().getModel("modelProductos");
                var oProdSeleccionado= oModel.getProperty("/value/0");

                var oModelProducto= new JSONModel(oProdSeleccionado);
                this.getOwnerComponent().setModel(oModelProducto , "modelSeleccionado")

                this.getOwnerComponent().getRouter().navTo("RouteDetail");
                

            }
        },
         onListItemPress: function(oEvent){
         var sProductId= oEvent.getSource().getSelectedItem().getBindingContext("modelProductos").getPath();
            var oModel = this.getOwnerComponent().getModel("modelProductos");
            var oProductoSeleccionado = oModel.getProperty(sProductId)

            var oModelProducto= new JSONModel(oProductoSeleccionado);
                this.getOwnerComponent().setModel(oModelProducto , "modelSeleccionado")

                this.getOwnerComponent().getRouter().navTo("RouteDetail");
            }
        }


      
    );
  }
);
