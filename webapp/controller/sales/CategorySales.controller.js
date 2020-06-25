sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function(
	BaseController, JSONmodel
) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.sales.CategorySales", {
		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oRouter.getRoute("salesMade").attachPatternMatched(this._onProductMatched, this);

			this.oModel = this.getView().getModel();
		},
		/* 
		*/
		_onProductMatched: function (oEvent) {
			this.categoryId = oEvent.getParameter("arguments").categoryID;
			this.oModel = this.getView().getModel();

			if(this.categoryId == undefined)
				this.categoryId = 1;

			this.oModel.read("/Sales_by_Categories", {
				//add filter!
				success: function (oRetrievedResult) {
					console.log(oRetrievedResult)
					var model = new JSONmodel(oRetrievedResult);
					this.getView().setModel(model, "category");
				}.bind(this)
			})

			this.getModel("defaultModel").setProperty("/graphRoute", "salesByCategory");

		},

	});
});