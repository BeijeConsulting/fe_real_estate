import { javaAcademyServiceInstance } from "../javaAcademyService";
import authApi from "./authApi";

/**
 *
 * @param { string } username
 * @param { () => {} } dispatch the redux dispatch
 */
export const addEmployee = (username, dispatch) =>
	authApi.retryAfterRefreshToken(
		(token) =>
			javaAcademyServiceInstance.put(
				"/business/addEmployee/" + username,
				{},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			),
		dispatch
	);

/**
 *
 * @param {{}} body Must containt `businessName`
 * @param { () => {} } dispatch the redux dispatch
 */
export const updateBusinessInfo = (body, dispatch) =>
	authApi.retryAfterRefreshToken(
		(token) =>
			javaAcademyServiceInstance.put("/business/update", body, {
				headers: {
					Authorization: "Bearer " + token,
				},
			}),
		dispatch
	);

/**
 *
 * @param { () => {} } dispatch the redux dispatch
 */
export const getManagedBusiness = (dispatch) =>
	authApi.retryAfterRefreshToken(
		(token) =>
			javaAcademyServiceInstance.get(
				"/business/manager/managedBusiness",
				{},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			),
		dispatch
	);

/**
 *
 * @param {*} businessName
 * @returns
 */
export const getEmployeesList = (businessName, dispatch) =>
	authApi.retryAfterRefreshToken(
		(token) =>
			javaAcademyServiceInstance.get(
				"/business/EmployeeList/" + businessName,
				{},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			),
		dispatch
	);
