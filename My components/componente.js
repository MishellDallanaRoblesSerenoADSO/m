export default{
    data(){
        return{

            obj:null
        }
    },
    methods:{
        crearObjeto(){
            this.obj = {};
        },
        guardarObjeto (e){
            this.obj.dato = document.querySelector("#dataInput").value;
        }
    }
}