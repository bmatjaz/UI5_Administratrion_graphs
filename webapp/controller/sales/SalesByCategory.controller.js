sap.ui.define([
	"./BaseController",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (
	BaseController, JSONmodel, Filter, FilterOperator
) {
	"use strict";

	return BaseController.extend("sap.ui.administration.controller.sales.SalesByCategory", {

		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oRouter.getRoute("salesByCategory").attachPatternMatched(this._onProductMatched, this);
		},
		/*
		*/
		_onProductMatched: function (oEvent) {
            this.categoryId = oEvent.getParameter("arguments").categoryID;

            if(this.categoryId == undefined)
                this.categoryId = 1;
            
			this.oModel = this.getView().getModel();

            this.oModel.read("/Sales_by_Categories", {
                filters: [ new sap.ui.model.Filter("CategoryID",sap.ui.model.FilterOperator.EQ, this.categoryId) ],
				success: function (oRetrievedResult) {
					var model = new JSONmodel(oRetrievedResult);
					this.getView().setModel(model, "products");
				}.bind(this)
            })
            this.getModel("defaultModel").setProperty("/graphRoute", "salesByCategory");
		}
	});
});