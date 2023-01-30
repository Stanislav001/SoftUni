function validate(obj) {
    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/;
    let messageRegex = /^[^<>\\&'"]*$/;

    if (!(obj.method && validMethod.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(obj.uri && (uriRegex.test(obj.uri) || obj.uri == "*"))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(obj.version && validVersion.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(obj.hasOwnProperty("message") && (messageRegex.test(obj.message) || obj.message == ""))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

validate({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
});