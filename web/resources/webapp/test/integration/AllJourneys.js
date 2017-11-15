jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"dommy/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dommy/test/integration/pages/App",
	"dommy/test/integration/pages/Browser",
	"dommy/test/integration/pages/Master",
	"dommy/test/integration/pages/Detail",
	"dommy/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dommy.view."
	});

	sap.ui.require([
		"dommy/test/integration/MasterJourney",
		"dommy/test/integration/NavigationJourney",
		"dommy/test/integration/NotFoundJourney",
		"dommy/test/integration/BusyJourney",
		"dommy/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});