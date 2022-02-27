<template>
    <section id="dv1">
        <h1>Notícias:</h1>

        <div 
        v-for="minhasNoticias in minhasNoticias" 
        :key="minhasNoticias"
        id="divNoticias"
        >
            <img :src="minhasNoticias.img" class="imgNoticias">
            <h4 class="tituloNoticia">{{minhasNoticias.titulo}}</h4>
            <p>{{minhasNoticias.status}}</p>
            <br>
            
        </div>
    </section>
</template>

<script>

export default {
    name:'Noticias',

    data(){
        return{
            minhasNoticias:[
                {
                    img:'/img/noticias/logo-enem.jpg',
                    titulo:'INGRESSE COM A NOTA DO ENEM!',
                    status:'Garanta até 80% de DESCONTO usando sua nota do enem para ingressar na UNITEC.',
                },
                {
                    img:'/img/noticias/logo-tecnologia.jpg',
                    titulo:'UNITEC FAZ PARCERIAS COM EMPRESAS DE TECNOLOGIA.',
                    status:'Empreas de TI irão contribuir com pesquisas e disponibilizar capacitação e vagas para os alunos.',
                }
            ]
        }
    }
}
</script>


<style scoped>
#dv1{
    margin-top: 50px;
}

#divNoticias{
    margin-top: 40px;
}

.tituloNoticia{
    color: #FA920B;
}

.imgNoticias{
    width: 150px;
    float: left;
    margin-right: 20px;
}
</style>