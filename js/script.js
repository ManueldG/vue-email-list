const app = new Vue({
    el:'#app',
    data: {
        email:'',
    },
    created(){
        //axios.get('http://casaalmada.hostinggratis.it/API/?nome=gigi&cognome=Rossi') 
        /*
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) => {
         // handle success
            ***************************************
            /*for ( i in response.data )          *
             console.log(i+": "+response.data[i]);*/
             /*************************************/
            /* console.log(response.data);
             this.email = response.data.response;
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed

        });*/
        for (let i=0;i<10;i++)
        this.call();

        
    },
    methods:{
        call : function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) => {
         // handle success
            /*for ( i in response.data )
             console.log(i+": "+response.data[i]);*/
             console.log(response.data);
             this.email = response.data.response;
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



