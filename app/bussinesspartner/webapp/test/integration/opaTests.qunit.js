sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bussinesspartner/test/integration/FirstJourney',
		'bussinesspartner/test/integration/pages/BussinessPartnerList',
		'bussinesspartner/test/integration/pages/BussinessPartnerObjectPage'
    ],
    function(JourneyRunner, opaJourney, BussinessPartnerList, BussinessPartnerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bussinesspartner') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBussinessPartnerList: BussinessPartnerList,
					onTheBussinessPartnerObjectPage: BussinessPartnerObjectPage
                }
            },
            opaJourney.run
        );
    }
);