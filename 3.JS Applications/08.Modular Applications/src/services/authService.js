const baseUrl = 'http://localhost:3030/users';

const saveUserData = (user) => {
    if (user) {
        localStorage.setItem('_id', user._id);
        localStorage.setItem('email', user.email);
        localStorage.setItem('username', user.username);
        localStorage.setItem('accessToken', user.accessToken);
    }
}

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(user => {
            saveUserData(user);
            return user;
        })
}

export const register = (email, password, username) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
    })
        .then(res => res.json())
        .then(user => {
            saveUserData(user);
            return user;
        })
}

export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');

    return Boolean(accessToken);
}

export const getUser = () => {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');

    let user = {
        username,
        email,
    }

    return user;
}

export const logout = () => {
    const accessToken = localStorage.getItem('accessToken');

    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    }).then(res => {
        localStorage.clear();
    })
}