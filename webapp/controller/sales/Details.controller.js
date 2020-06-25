sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	'sap/ui/model/BindingMode',
	'sap/viz/ui5/data/FlattenedDataset',
	'sap/viz/ui5/format/ChartFormatter',
	'sap/viz/ui5/api/env/Format'
], function(BaseController, JSONModel, BindingMode, FlattenedDataset, ChartFormatter, Format) {
	"use strict";

	var a = [];

	return BaseController.extend("sap.ui.administration.controller.sales.Details", {
		

		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oRouter.getRoute("sales").attachPatternMatched(this._onProductMatched, this);

			var formatPattern = ChartFormatter.DefaultPattern;

			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        formatString:"",
                        visible: true
                    }
                },
                valueAxis: {
                    label: {
                        formatString: ""
                    },
                    title: {
                        visible: true
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                }
            });
		},
		/*
			quantity product name
		*/
		_onProductMatched: function (oEvent) {
			this.getModel("defaultModel").setProperty("/graphRoute", "categoryDetails");
			this.oModel = this.getView().getModel();

			this.oModel.read("/Category_Sales_for_1997", {
				//add filter!
				success: function (oRetrievedResult) {
					console.log(oRetrievedResult)
					var model = new JSONModel(oRetrievedResult);
					this.getView().setModel(model, "orders");
				}.bind(this)
			})
		},
	});
});