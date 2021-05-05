import customFetch from './customFetch';
import {save, getValue, deleteValue} from './secureStore';

export const getUser = (token) => {
    return customFetch(`get-user/`, {}).catch(error => null);
}

export const login = (email, password) => {
    let body = {email: email, password: password};
    return customFetch('token-auth/', {
        method: "POST",
        body: body,
        authorized: false
    })
        .then(data => {
            save('token', data.token);
            return token;
        })
        .catch(error => {
            if (error.response == undefined) {
                return 'other_problem';
            }
            return error.response.then(res => {
                if ((error.status === 401) && (!!res.inactive)) {
                    return 'inactive';
                }
                if (error.status === 400) {
                    return 'incorrect';
                } else {
                    return 'other_problem';
                }
            })
        });
}
