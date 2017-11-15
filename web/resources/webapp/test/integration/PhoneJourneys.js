jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"dommy/test/integration/NavigationJourneyPhone",
		"dommy/test/integration/NotFoundJourneyPhone",
		"dommy/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});