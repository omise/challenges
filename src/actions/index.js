export function UpdateTotalDonate(amount) {
	return {
        type: 'UPDATE_TOTAL_DONATE',
        amount,
    }
}

export function UpdateMessage(message) {
	return {
		type: 'UPDATE_MESSAGE',
	    message: message,
	}
}