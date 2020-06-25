sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function(
	BaseController, JSONmodel
) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.sales.CategoryQuantity", {
		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oRouter.getRoute("quantityStock").attachPatternMatched(this._onProductMatched, this);

			this.oModel = this.getView().getModel();
		},
		/* 
		*/
		_onProductMatched: function (oEvent) {
			this.categoryId = oEvent.getParameter("arguments").categoryID;
			this.oModel = this.getView().getModel();

			if(this.categoryId == undefined)
				this.categoryId = 1;

			this.oModel.read("/Categories(" + this.categoryId + ")/Products", {
				filters: [ new sap.ui.model.Filter("Discontinued",sap.ui.model.FilterOperator.EQ, "false") ],
				parameters: {expand: "Category"},
				success: function (oRetrievedResult) {
					console.log(oRetrievedResult)
					var model = new JSONmodel(oRetrievedResult);
					this.getView().setModel(model, "product");
				}.bind(this)
			})
			this.getModel("defaultModel").setProperty("/graphRoute", "quantityStock");

		},

	});
});