export const initialState =  {
    formInitialValues: {
        data: {
            amount: 10,
            currency: 'THB'
        },
    },

    payments: {
        isLoading: true,
        items: [],
        total: 0
    },

    charities: {
        isLoading: true,
        items: [],
    }
}
