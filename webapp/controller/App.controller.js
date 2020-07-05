sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/ActionSheet"
], function (BaseController, JSONModel, ActionSheet) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.App", {
		onInit : function () {
		},
		/**
		 * Convenience method for accessing the router.
		 * @public
		 * @param {sap.ui.base.Event} oEvent The item select event
		 */
		onItemSelect: function(oEvent) {
			this.getRouter().navTo(oEvent.getParameter('item').getKey());
		},
		onSideNavButtonPress: function() {
			var oToolPage = this.byId("app");
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		}
	});
});