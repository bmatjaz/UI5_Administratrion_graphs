sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.administration.Component", {

		metadata: {
			manifest: "json"
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this function, the device models are set and the router is initialized.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function and create the App view
			UIComponent.prototype.init.apply(this, arguments);

			// initialize the router
			this.getRouter().initialize();

			var oModel = new JSONModel({
				graphRoute: "categoryDetails"
			});
			this.setModel(oModel, "defaultModel")
		}
	});
});
