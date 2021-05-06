import customFetch from './customFetch';

export const getAccounts = () => {
    return customFetch('accounts/', {
        method: "GET",
        params: {offer_accounts_only: false}
    })
};
