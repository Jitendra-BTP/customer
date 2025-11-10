sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customer/test/integration/pages/PassengerList",
	"customer/test/integration/pages/PassengerObjectPage",
	"customer/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, PassengerList, PassengerObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customer') + '/test/flpSandbox.html#customer-tile',
        pages: {
			onThePassengerList: PassengerList,
			onThePassengerObjectPage: PassengerObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

