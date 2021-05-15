import customFetch from './customFetch';
import {save, getValue, deleteValue} from './secureStore';

export const getAvailableOffers = () => {
    return customFetch('all-offers/', {
        method: "GET"
    })
}

export const getUserOffers = () => {
    return customFetch('get-offers/', {
        method: "GET"
    })
}

export const getOfferPreview = (offer_id) => {
    return customFetch('get-test-instance/', {
        method: 'GET',
        authorized: false,
        params: {offer_id: offer_id}
    })
}
