import baseUrl from '../settings';
import {save, getValue, deleteValue} from './secureStore';

const handleError = (res, throwError, authorized) => {
    if (!!throwError && !res.ok) {
        let error = new Error();
        if (!!authorized && (res.status === 401)) {
            // deleteValue('token');
            null;
            // TODO: try using username/password to log in again
        }
        error.status = res.status;
        error.statusText = res.statusText;
        error.response = res.json();
        throw error;
    }
    return res.json();
}

const customFetch = (endpoint, options) => {
    let method = !options.method ? 'GET' : options.method;
    let params = options.params;
    let body = !!options.body ? options.body : null;
    let authorized = options.authorized === undefined ? true : options.authorized;

    let throwError = options.throwError === undefined ? true : options.throwError;

    if (!options.method) {
        options.method = 'GET';
    }
    let url = baseUrl + endpoint;
    url += url.slice(-1) === '/' ? '' : '/';
    if (!!params) {
        let first = true;
        for (let key in params) {
            url += !first ? '&' : '?';
            url += key + '=';
            url += params[key];
            first = false;
        }
    }
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    if (!!authorized) {
        return getValue('token').then(token => {
          if (!!token) {
              headers['Authorization'] = `jwt ${token}`;
          } else {
              if (authorized != 'optional') {
                dispatch(logUserOut());
                if (window.location.pathname.includes('session_expired')) {
                    return null // TODO: proper way to show that there's an error
                }
                window.location.href = '/session_expired?next=' + window.location.pathname + window.location.search;
                return;
              }
          }

          return fetch(url, {
              method: method,
              headers: headers,
              body: !!body ? JSON.stringify(body) : null
          }).then(res => handleError(res, throwError, authorized));
        });
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body: !!body ? JSON.stringify(body) : null
    })
        .then(res => handleError(res, throwError, authorized))
};

export default customFetch;
