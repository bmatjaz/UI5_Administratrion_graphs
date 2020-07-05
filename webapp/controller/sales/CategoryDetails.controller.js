sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"../../model/formatter"
], function (
	BaseController, JSONmodel, formatter
) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.sales.CategoryDetails", {
		formatter: formatter,

		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oRouter.getRoute("categoryDetails").attachPatternMatched(this._onProductMatched, this);

			this.oModel = this.getView().getModel();
		},
		/*
		*/
		_onProductMatched: function (oEvent) {
			this.categoryId = oEvent.getParameter("arguments").categoryID;
			this.oModel = this.getView().getModel();

			this.oModel.read("/Categories(" + this.categoryId + ")/Products", {
				filters: [ new sap.ui.model.Filter("Discontinued",sap.ui.model.FilterOperator.EQ, false) ],
				success: function (oRetrievedResult) {
			
					var model = new JSONmodel(oRetrievedResult);
					this.getView().setModel(model, "product");
				}.bind(this)
			})	
			
		},

	});
});