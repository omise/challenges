import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../../helpers';
import { UpdateTotalDonate, UpdateMessage } from '../../actions'

export function fetchCharities() {
	const self = this;
	return function() {
		fetch('http://localhost:3001/charities')
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
        	self.setState({ charities: data }) 
        });
    }
}

export function fetchDonate() {
	let amount = 0;
	return function(dispatch) {
		fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
        	amount = summaryDonations(data.map((item) => (item.amount && item.amount>0) ? item.amount : 0)),
        	dispatch(UpdateTotalDonate(amount));
        })
	}
}

export function postDonate(id, amount, currency) {
	const self = this;
	return function(dispatch) {
		fetch('http://localhost:3001/payments', {
			method: 'POST',
			headers: new Headers({'content-type': 'application/json'}),
			body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
		})
		.then(function(resp) { return resp.json(); })
		.then(function() {
			dispatch(UpdateTotalDonate(amount));
			dispatch(popMessage.call(self, `Thanks for donate ${amount}!`));
		});
	}
}

export function popMessage(msg) {
	const self = this;
	return function (dispatch) {
		self.setState({ popMessage: true });
		dispatch(UpdateMessage(msg));
		setTimeout(function() {
			self.setState({ popMessage: false })
		}, 2000);
	}
}