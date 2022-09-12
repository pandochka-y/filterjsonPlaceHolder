import {defineStore} from "pinia";
import FetchingAuthor from "../api/fetchingAuthor";


export const useAuthor = defineStore('author', {
    state: () => {
        return {
            authors: [],
            isLoading: false,
        }
    },
    actions: {
       async fetchAuthors(params) {
            try {
                this.isLoading = true;
                const response = await FetchingAuthor.getAuthor(params)
                if (!response.length) return false
                this.authors = response
                return response[0].id
            } catch (e) {
                console.log(e)
            } finally {
                this.isLoading = false;
            }
        }
    }

})