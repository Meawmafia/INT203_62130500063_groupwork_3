const app = Vue.createApp({
    data(){
        return {
            msg: 'Hello World!',
            roses: [
                { name:"red" , image:'./img/red.jpg', isFav: false },
                {  name:"yellow" , image:'./img/yellow.jpg', isFav: false },
                {  name:"white" , image:'./img/white.jpg', isFav: false }
              ],
            
            fav: './img/fav.png',
            unfav: './img/unfav.png',
            favCount: 0,
        }
    },
    methods: {
        updateFav(index) {

                    this.roses[index].isFav = !this.roses[index].isFav
                    if(this.roses[index].isFav){
                        this.favCount += 1
                    }else{
                        this.favCount -= 1
                    }
                
        }
    },
    computed: {
        calculate(){
       return this.roses.length
        }
    }
})

app.mount('#app')