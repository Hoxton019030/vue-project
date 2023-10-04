console.log('Hello vue')



const app =Vue.createApp({
    data(){
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: '45'

        }
    },
    methods:{
        changeTitle(title){
            this.title = title
        },
        handleEvent(e){
            console.log(e)
        }
    }
})
app.mount('#app')