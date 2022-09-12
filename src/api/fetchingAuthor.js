import {instance} from "../helpers/instance";


export default class FetchingAuthor {
    static async getAuthor(params) {
        const response = await instance.get('/users', {
            params: {
                ...params
            }
        })
        return response.data
    }
}