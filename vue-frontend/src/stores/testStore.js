import { defineStore } from "pinia";
import axiosClient from "../axios.js";

export const useTestStore = defineStore("testStore", {
    state: () => {
        return {
            data: []
        }
    },
    actions: {
        getTestData() {
            return axiosClient.get('/test')
                .then((res) => {
                    this.data.push(res.data.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
    }
})
