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
        changeTitle(){
            console.log('幹破你娘')
        }
    }
})
app.mount('#app')