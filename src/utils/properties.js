const ROUTES = {
	FE: {
		BASE: {
			SELF: "/:lang",
			HOME: "",
			ABOUT_US: "about-us",
			WHAT_WE_OFFER: "what-we-offer",
			ASSESS_BUILDING: "assess-building",
			FAQ: "FAQ",
			ADS_LIST: {
				SELF: "ads/:advType/:buildingType/:city",
				getPath: (advType, buildingType, city) =>
					"ads/" + advType + "/" + buildingType + "/" + city,
			},
			DETAILS_AD: {
				SELF: "adv/:buildingId",
				getPath: (buildingId) => "adv/" + buildingId,
			},
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
			USER: {
				SELF: "user",
				DASHBOARD: "",
				EDIT_PROFILE: "edit-profile",
				POSTED_ADS: "posted-ads",
				SAVED_ADS: "saved-ads",
			},
		},
	},
};

export { ROUTES };
