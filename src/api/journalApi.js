import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://journal-learn-default-rtdb.firebaseio.com'
})

export default journalApi