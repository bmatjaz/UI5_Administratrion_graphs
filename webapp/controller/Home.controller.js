sap.ui.define([
	"./BaseController",
	"../model/formatter"
], function (BaseController, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.Home", {
		formatter: formatter,

		onInit : function () {
		}
	});
});