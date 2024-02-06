import { defineStore } from 'pinia'

export const useAlbumStore = defineStore('albums', {
    state: () => ({
        /** @type {{ name: string, id: number, image_num: number, intro: string }[]} */
        albums: [],
    }),
    getters: {
        // getAblumById: (state) => {
        //     return (albumId) => state.albums.find((album) => album.id === albumId)
        // }
    },
    actions: {
        // // 任何数量的参数，返回一个 Promise 或者不返回
        // addTodo(text) {
        //     // 你可以直接改变状态
        //     this.todos.push({ text, id: this.nextId++, isFinished: false })
        // },
        setAlbums(albums) {
            this.albums = albums
        },
    },
})