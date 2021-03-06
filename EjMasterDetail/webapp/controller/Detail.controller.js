sap.ui.define([
        "sap/ui/core/mvc/Controller",
         "sap/ui/core/History"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, History) {
		"use strict";

		return Controller.extend("EjMasterDetail.EjMasterDetail.controller.Detail", {
			onInit: function () {             
               
           
            },       

            
            onBack: function(){
                var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				// There is no history!
				// Naviate to master page
				this.getOwnerComponent().getRouter().navTo("RouteMaster", {}, true);
			}
		}
    

                    
		});
	});