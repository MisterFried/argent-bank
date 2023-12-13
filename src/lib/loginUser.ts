import { returnType } from "../types/types";

export default async function loginUser(email: string, password: string) {
	const url = "http://localhost:3001/api/v1/user/login";

	const userCredentials = {
		email: email,
		password: password,
	};

	const requestOptions = {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(userCredentials),
	};

	const returnValue: returnType = {
		token: "",
		error: undefined,
	};

	try {
		const response = await fetch(url, requestOptions);

		if (response.ok) {
			const responseJSON = await response.json();
			returnValue.token = responseJSON.body.token;
		} else {
			switch (response.status) {
				case 400:
					returnValue.error = "User credentials are incorrect";
					break;
				case 500:
					returnValue.error = "A server error has occured";
					break;
				default:
					returnValue.error = "An error has occured";
					break;
			}
		}
		return returnValue;
	} catch (error) {
		returnValue.error = "An error has occured";
		return returnValue;
	}
}
