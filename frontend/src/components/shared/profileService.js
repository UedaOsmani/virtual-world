import http from './http'

const saveContact = data => {
    return http.post('/save-profile', data)
};

const getContact = id => {
    return http.get(`/get-profile/${id}`)
}

export default {
    saveContact,
    getContact
}