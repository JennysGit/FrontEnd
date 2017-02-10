const getSecret = (secret) => {
	return {
		get: () => secret
	};
};