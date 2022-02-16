import regex from "./regex";

const ERROR_TYPES = {
	EMPTY: "empty",
	INVALID: "invalid",
};

/**
 * @returns { 'empty' | '' }
 */
const nonEmptyText = (text) =>
	regex.empty.test(text) ? ERROR_TYPES.EMPTY : "";

/**
 * @returns { 'invalid' | '' }
 */
const invalidEmail = (text) =>
	regex.email.test(text) ? ERROR_TYPES.INVALID : "";

/**
 * @returns { 'invalid' | '' }
 */
const invalidPassword = (text) =>
	regex.password.test(text) ? ERROR_TYPES.INVALID : "";

/**
 *
 * @example
 * import validate from './validate';
 *
 * // objects to validate
 *
 * const data1 = {
 *  username: '',
 *  password: ''
 * }
 *
 * const data2 = {
 *  username: 'arcipelagoCostante',
 *  password: 'C1pullo!'
 * }
 *
 * const data3 = {
 *  username: 'RoBrogiBerto',
 *  password: ''
 * }
 *
 * const data4 = {
 *  username: 'RoBrogiBerto',
 *  password: 'NoNumberPassword'
 * }
 *
 * // validation functions
 *
 * const emptyText = (text) => {
 *  const isEmpty = text.trim() === '';
 *
 *  return  isEmpty ? 'empty' : '';
 * }
 *
 * const containsNumber = (text) => {
 *  const isThereAnyNumber = /[0-9]/.test(text);
 *
 *  return isThereAnyNumber ? '' : 'noNumbers'
 * }
 *
 * // mapped object of validations
 *
 * const mappedValidations = {
 *  username: [ emptyText ],
 *  password: [ emptyText, containsNumber ],
 * }
 *
 * const firstValidation = validate.object(data1, mappedValidations);
 *
 * const secondValidation = validate.object(data2, mappedValidations);
 *
 * const thirdValidation = validate.object(data3, mappedValidations);
 *
 * const fourthValidation = validate.object(data4, mappedValidations);
 *
 * console.log(firstValidation) // { noError: false, errors: { username: 'empty', password: 'empty' } }
 * console.log(secondValidation) // { noError: true, errors: { username: '', password: '' } }
 * console.log(thirdValidation) // { noError: false, errors: { username: '', password: 'empty' } }
 * console.log(fourthValidation) // { noError: false, errors: { username: '', password: 'noNumbers' } }
 *
 * @param { { [key in string]: any } } obj
 * An object.
 * Each property is the value to validate through the
 * `mappedObjValidations` param's corresponding key.
 * @param { { [key in string]: ((objProp) => string)[] } } mappedObjValidations
 * An object.
 * For each key is needed an array (empty is acceptable) of functions.
 * Each function takes as parameter the property to validate and returns
 * an error message.
 * The error message must be empty string if no error occurred.
 * NOTE: if multiple errors occur on the same property,
 * only the first error message will be saved in the `errors` obj.
 * @returns {{
 *  noError: boolean;
 *  errors: { [key in string]: string };
 * }}
 * - `noError` default false. True if some validation returned a non empty message.
 * - `errors` is an object mapped from `obj`.
 * Each property is a string containing the error message.
 */
const validateObject = (obj, mappedObjValidations) => {
	let noError = true;

	let errors = {};

	for (const key in obj) {
		if (
			Object.hasOwnProperty.call(obj, key) &&
			Object.hasOwnProperty.call(mappedObjValidations, key)
		) {
			// for each validation function in array
			for (let i = 0; i < mappedObjValidations[key].length; i++) {
				errors[key] = "";

				errors[key] = mappedObjValidations[key][i](obj[key]);

				if (errors[key] !== "") {
					noError = false;
					break;
				}
			}
		}
	}

	return { noError, errors };
};

const defaultExport = {
	ERROR_TYPES,
	nonEmptyText,
	invalidEmail,
	invalidPassword,
	validateObject,
};

export default defaultExport;
