/* eslint-disable*/
const axios = require('axios');
export const Content = {
    namespaced: true,
    state: () => ({
        contentList: [],
        favList: [],
    }),
    getters: {
        getContentList(state) {
            return state.contentList.filter(ele => { if (ele && ele.image && ele.image.medium) { return ele } })
        },
        getFavList(state) {
            return state.favList
        },
        getContentListById: (state) => (id) => {
            return state.contentList.find(ele => ele.id.toString() === id.toString())
        },
    },
    actions: {
        axiosApi() {
            axios({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                data: {
                    title: 'Vue session',
                    body: 'Axios',
                    userId: 1,
                },
            }).then(res => {
                console.log("post||", res)
            }).catch(error => {
                console.log("err||", err)
            })
        },


        testApi() {
            let data = {
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
            return new Promise((resolve, reject) => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        context.commit('setLoading', false, { root: true });
                        resolve(JSON.parse(this.responseText))
                    }
                    else {
                        console.log("error||", "error msg")
                        reject("Content Not found")
                    }
                };
                xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
                xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8")

                xhttp.send(JSON.stringify(data));
            })
        },

        actInfo(context) {




            context.commit('setLoading', true, { root: true })
            return new Promise((resolve, reject) => {
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/data", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result._embedded) {
                            setTimeout(() => {
                                context.commit('setLoading', false, { root: true })
                                resolve(result)

                            }, 2000);
                        } else {
                            context.commit('setLoading', false, { root: true }); reject("Data not found!!");
                        }
                    })
                    .catch(error => {
                        context.commit('setLoading', false, { root: true }); reject("Data not found!!");
                    });

            })


        },
        init() {
            console.log("Content module")
        }
    },
    mutations: {
        setContentList(state, payload) {
            state.contentList = payload
        },
        setFavList(state, payload) {
            state.favList = payload
        },
    }

}