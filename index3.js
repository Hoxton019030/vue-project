console.log('Hello vue')

const app = Vue.createApp({
    data() {
        return {
            blog: 'https://hoxtonhsu.com/',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', isFav: true },
            ]

        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        handleEvent(e) {
            console.log(e)
        },
        changeFav(book) {
            book.isFav =!book.isFav

        },
        print(message) {
            console.log(message)
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=> book.isFav).map((book)=> book.title);
            
        }
    }
})
app.mount('#app')