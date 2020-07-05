sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("sap.ui.administration.controller.Settings", {

		onSavePressed: function() {
			//do something with changed data here
		},
		onCancelPressed: function() {
			//do nothing when cancel is pressed
		}


	});
});