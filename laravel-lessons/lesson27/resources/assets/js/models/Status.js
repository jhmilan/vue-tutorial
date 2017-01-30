class Status {
    static all(then) {
        return axios.get('/api/statuses').then(({data}) => then(data));
    }
}

export default Status;