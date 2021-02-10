const app = Vue.createApp({
    data(){
        return {
            msg: 'Hello World!',
            roses: [
                { name:"red" , image:'./img/red.jpg' },
                {  name:"yellow" , image:'./img/yellow.jpg' },
                {  name:"white" , image:'./img/white.jpg' }
              ],
            
            fav: './img/fav.png',
            unfav: './img/unfav.png',
            favCount: 0,
            isFav: false,
            isUnFav: true
        }
    },
    methods: {
        updateFav() {
                if(this.isFav == false){
                    this.isFav = true
                    this.isUnFav = false
                        this.favCount += 1
                }else{
                    this.isFav = false
                    this.isUnFav = true
                    this.favCount -= 1

                }
        }
    },
    compute: {
        count(){
            this.favCount = this.roses.lenght
        }
    }
})

app.mount('#app')