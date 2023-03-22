export default{
    data(){
        return{
            lista:[],
            dato:null
        }
    },
    methods:{
        enviar(){
            this.lista.push(this.dato),
            this.dato=null
            console.log(this.lista)
        }
    }
}