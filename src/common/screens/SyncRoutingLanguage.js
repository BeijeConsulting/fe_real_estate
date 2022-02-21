import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const SyncRoutingLanguage = () => {
	const { i18n } = useTranslation();
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const [state, setState] = useState({ prevLang: i18n.language });
	useEffect(() => {
		// changed language
		if (i18n.language !== state.prevLang) {
			const regex = new RegExp(`^/${params.lang}`);

			const newPath = location.pathname.replace(regex, `/${i18n.language}`);

			navigate(newPath, {
				replace: true,
			});

			setState({ ...state, prevLang: i18n.language });
		}
		// changed param.lang and it exists
		else if (!!params.lang && params.lang !== i18n.language) {
			// take available translation languages
			const availableLanguages = Object.keys(i18n.services.resourceStore.data);

			// param.lang is available in translations
			if (availableLanguages.findIndex((l) => l === params.lang) > -1) {
				i18n.changeLanguage(params.lang);
			}
			// param.lang is not available -> fallback to current language
			else {
				navigate(`/${i18n.language}`, { replace: true });
			}
		} // param.lang is null or undefined, should not happen
		else if (!params.lang) {
			console.error(
				"'params.lang' is undefined. You most likey put this component outside of the correct Route."
			);
		}
	}, [
		i18n,
		i18n.language,
		location.pathname,
		navigate,
		params.lang,
		state,
		state.prevLang,
	]);

	return <Outlet />;
};

export default SyncRoutingLanguage;
