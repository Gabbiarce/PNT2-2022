const obj = Vue.createApp({
    data() {
        return {
            objetosVoladores: [{codigo: 1, nombre: 'Drone'},
                               {codigo: 2, nombre: 'Elicoptero'},
                               {codigo: 3, nombre: 'Superman'}],
            volador: {codigo: 0, nombre:''},
            mensajeError: ''
        }
    },
    methods: {
        agregarVolador(){
            if(this.volador.codigo <= 0){
                this.mensajeError = "El codigo tiene que ser mayor a 0"
            }else{
                let copia = {codigo: this.volador.codigo,
                             nombre: this.volador.nombre}
                this.objetosVoladores.push(copia)
            }
        }
    }
}).mount('#app')