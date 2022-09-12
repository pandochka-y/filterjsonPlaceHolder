import {instance} from "../helpers/instance";


export default class FetchingPosts {
    static async getPosts(params) {
        const response = await instance.get('/posts', {
            params: {
                ...params,
                _limit: 25
            }
        })
        return response.data
    }
}