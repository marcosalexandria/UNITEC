<template>
    <section id="sec1">
        <h1>GRADUAÇÃO</h1>

        <img src="/img/faixas/faixa-graduacao.jpg" alt="" class="container-fluid">
        
        <div class="row row-cols-3">
            <div
            class="cursos col"
            v-for="cursos in cursosGraduacao"
            :key="cursos"
            >
            <h4>🔸{{cursos.nome}}</h4>
            <p>{{cursos.tipo}}</p>
            <p>{{cursos.duracao}}</p>
            <p>{{cursos.modalidade}}</p>
            <button type="button" class="btn btn-outline-danger">DETALHES</button>
            </div>
        </div>
        
    </section>
</template>

<script>

export default {
    name:'Graduacao',

    data(){
        return{
            cursosGraduacao:[
                {
                    nome:'ANALISE DE SISTEMAS',
                    tipo:'Tecnologo',
                    duracao:'2 anos',
                    modalidade:'EAD/Presencial'
                },
                {
                    nome:'BANCO DE DADOS',
                    tipo:'Bacharel',
                    duracao:'4 anos',
                    modalidade:'EAD/Presencial'
                },
                {
                    nome:'ENGENHARIA DE SOFTWARE',
                    tipo:'Bacharel',
                    duracao:'4 anos',
                    modalidade:'EAD/Presencial'
                },
                {
                    nome:'TECNOLOGIA DA INFORMAÇÃO',
                    tipo:'Tecnologo',
                    duracao:'2 anos',
                    modalidade:'EAD/Presencial'
                },
                {
                    nome:'MARKETING',
                    tipo:'Tecnologo',
                    duracao:'2 anos',
                    modalidade:'EAD/Presencial'
                },
                {
                    nome:'SISTEMAS DE INFORMAÇÃO',
                    tipo:'Tecnologo',
                    duracao:'2 anos',
                    modalidade:'EAD/Presencial'
                },
                {
                    nome:'TECNOLOGIA DE HR',
                    tipo:'Tecnologo',
                    duracao:'2 anos',
                    modalidade:'EAD/Presencial'
                },
            ]
        }
    }
}
</script>

<style scoped>

#sec1{
    background-color: #001325;
    color: white;
    text-align: center;
    padding: 40px;
}

h1{
    font-weight: bold;
}

.cursos{
    margin-top: 40px;
    width: 400px;
}
</style>