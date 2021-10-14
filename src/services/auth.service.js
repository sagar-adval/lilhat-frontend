import API from './api.service';

const AuthService = {
    login: (data) => {
        return API.post('/auth/login', data).then(({data}) => {
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`;
            return data;
        }).catch(err => {
            console.log("Auth error: ", err);
            throw err;
        });
    },
    register: (data) => {
        return API.post('/auth/register', data).then(({data}) => {
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`;
            return data;
        }).catch(err => {
            console.log("Auth error: ", err);
            throw err;
        });
    },
    logout: () => {

    }
};

export default AuthService;
