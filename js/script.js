const app = new Vue({
    el:'#app',
    data: {
        email:[],
        tmp:[],
    },
    created(){
        
        for (let i=0;i<10;i++){
            this.call();
        };

        console.log(this.tmp);
        this.email=(this.tmp);

    },
    methods:{
        call : function(){
            // https://flynn.boolean.careers/exercises/api/random/mail
           axios.get('http://casaalmada.hostinggratis.it/API/?nome=gigi&cognome=Rossi')
         .then((response) => {
            this.tmp.push(response.data.response);            
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed

        });
        }
    }


});



