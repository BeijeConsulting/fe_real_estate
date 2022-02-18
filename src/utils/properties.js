const ROUTES = {
	FE: {
		BASE: {
			SELF: "/:lang",
			HOME: "",
			ABOUT_US: "about-us",
			WHAT_WE_OFFER: "what-we-offer",
			ASSESS_BUILDING: "assess-building",
			FAQ: "FAQ",
			ADS_LIST: "ads/:advType/:buildingType/:city",
			DETAILS_AD: "adv/:buildingId",
			AUTH: {
				SELF: "auth",
				LOGIN: "login",
				SIGNUP: {
					SELF: "signup",
					BUSINESS: "business",
					PRIVATE: "private",
				},
				FORGOT_PASSWORD: "forgotpsw",
			},
		},
	},
};

export { ROUTES };
