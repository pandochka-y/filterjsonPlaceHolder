import {defineStore} from "pinia";
import FetchingPosts from "../api/fetchingPosts";


export const usePosts = defineStore('posts', {
    state: () => {
        return {
            posts: [],
            isLoading: false,
        }
    },
    actions: {
        emptyPosts(data) {
            this.posts = []
        },
       async fetchPosts(params) {
            try {
                this.isLoading = true;
                this.posts = await FetchingPosts.getPosts(params)
            } catch (e) {
                console.log(e)
            } finally {
                this.isLoading = false;
            }
        }
    }

})