
enum MethodType {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

const requestFunction = <R>(url: string, payload: any, method: MethodType, auth: string):Promise<R> => {
    const options: RequestInit = {
        method,
        ...(!!auth && {
            headers: {
                Authorization: `Bearer ${auth}`,
            }
        }),
    };
    let parsedUrl = url;
    if (method === MethodType.POST || method === MethodType.PUT && payload) {
        options.body = JSON.stringify(payload);
    } else if (payload) {
        const query: string = Object.keys(payload).map((key: string) => {
          return `${key}=${(payload[key])}`;
        }).join('&');
        parsedUrl = `${url}?${query}`;
    }
    return new Promise((resolve, reject) => {
        fetch(parsedUrl, options)
            .then(res => res.json()
                .then(data => {
                    if (res.status !== 200) reject(Error(`Result status code of ${res.status}`));
                    return data;
                }))
            .then(json => resolve(json))
            .catch(err => reject(err));
    });
};

const request = {
    post: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.POST, auth),
    get: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.GET, auth),
    put: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.PUT, auth),
    delete: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.DELETE, auth),
};

export default request;
