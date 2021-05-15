import customFetch from './customFetch';
import {save, getValue, deleteValue} from './secureStore';

export const getLinkToken = () => {
    return customFetch(`get-link-token/`, {
        method: "POST"
    })
        .then(data => data.link_token)
};
