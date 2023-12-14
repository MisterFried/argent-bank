export default async function updateUserInDB(firstName: string, lastName: string, token: string) {
	const url = "http://localhost:3001/api/v1/user/profile";

	const updatedUser = {
		firstName: firstName,
		lastName: lastName,
	};

	const requestOptions = {
		method: "PUT",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(updatedUser),
	};

	try {
		const response = await fetch(url, requestOptions);

		// Successfully updated user first/last names
		if (response.ok) {
			return true;
		} else {
			// Error from backend
			console.log("An error has occured");
		}
	} catch (error) {
		// Unknown error
		console.log(error);
	}
}
