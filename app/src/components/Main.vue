<template>
    <main>
        <div id="dv2" class="row">
            <div 
            class="col" 
            v-for="propaganda in propaganda" 
            :key="propaganda">
                <img :src="propaganda.img" alt="" class="propImg">
                <h3>🔸 {{propaganda.curso1}}</h3>
                <h3>🔸 {{propaganda.curso2}}</h3>
                <h3>🔸 {{propaganda.curso3}}</h3>
                <h3>🔸 {{propaganda.curso4}}</h3>
                <h3>🔸 {{propaganda.curso5}}</h3>
                <h3>🔸 {{propaganda.curso6}}</h3>
                <h3>🔸 {{propaganda.curso7}}</h3>
            </div>
        </div>

        <Noticias/>
    </main>
</template>

<script>
    import Noticias from './Noticias.vue'
export default {
    name:'Main',

    components:{
        Noticias
    },

    data(){
        return{
            propaganda:[
                {
                    //GRADUAÇÃO
                    img:'/img/img-G.jpeg',
                    curso1:'Analise e Desenvolvimento de Sistemas',
                    curso2:'Banco de Dados',
                    curso3:'Engenharia de Software',
                    curso4:'Tecnologia da Informação',
                    curso5:'Marketing',
                    curso6:'Sistemas de Informação',
                    curso7:'Tecnologia de RH',
                },
                {
                    //PÓS-GRADUAÇÃO
                    img:'/img/img-P.jpeg',
                    curso1:'Ciência de Dados',
                    curso2:'Banco de Dados',
                    curso3:'Engenharia de Software',
                    curso4:'Desenvolvimento de App Movel',
                    curso5:'Business Intelligence',
                    curso6:'Jogos Digitais',
                    curso7:'Desenvolvimento Web'
                },
                {
                    //CURSOS LIVRES
                    img:'/img/img-C.jpeg',
                    curso1:'Frontend',
                    curso2:'Backend',
                    curso3:'Redes',
                    curso4:'Linux - Fundamentos',
                    curso5:'Banco de Dados Relacionais',
                    curso6:'Gestão de T.I',
                    curso7:'P.O.O'
                }
            ]
        }
    }
}
</script>

<style scoped>
/* Conteudo principal */
main{
    background-color: #001325;
    color: white;
    padding: 30px;
}

#dv2{
    text-align: center;
}

/* div dos cursos */
.col{
    margin-top: 30px;
}

/* Imagens do grind */
.propImg{
    width: 200px;
    margin-bottom: 20px;
}
</style>
