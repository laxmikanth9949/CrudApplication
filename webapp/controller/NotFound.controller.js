sap.ui.define([
		"com/template/CURDsample/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.template.CURDsample.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);