sap.ui.define([
	"./BaseController"
], function(
	BaseController
) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.sales.Master", {

		onInit: function() {

		},
		showDetails: function(oEvent) {
			console.log(this.getModel("defaultModel").getProperty("/graphRoute"))
			this.getRouter().navTo(this.getModel("defaultModel").getProperty("/graphRoute"), {categoryID: oEvent.getSource().getBindingContext().getObject().CategoryID});
		}
	});
});