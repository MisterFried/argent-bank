import { UserInfo } from "../types/types";

export async function retrieveUserInfo(token: string) {
	const url = "http://localhost:3001/api/v1/user/profile";

	const requestOptions = {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await fetch(url, requestOptions);

		// Successfully retrieved user infos
		if (response.ok) {
			const responseJSON = await response.json();
			return responseJSON.body as UserInfo;
		} else {
			// Error from backend
			console.log("An error has occured");
		}
	} catch (error) {
		// Unknown error
		console.log(error);
	}
}
