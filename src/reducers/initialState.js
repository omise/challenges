export const initialState = 
    {
        charities: {
            isLoading: true,
            items: []
        },

        donations: {
            isLoading: true,
            payments: [],
            amounts: 0,
        },

        charityForm: {
            charitiesId: null,
            amount: 10,
        }
    }


