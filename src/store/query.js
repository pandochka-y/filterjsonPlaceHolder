


import {defineStore} from "pinia";


export const useQuery = defineStore('query', {
    state: () => {
        return {
            query: '',
            oldQuery: '',
        }
    },
    actions: {
        setQuery(data) {
            this.query = data
        },
        setOldQuery() {
            this.oldQuery = this.query
        }
    }

})