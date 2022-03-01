<template>
    <section id="sec1">
        <h1>PÓS-GRADUAÇÃO</h1>

        <img src="/img/faixas/faixa-pos.jpg" alt="" class="container-fluid">

        <div class="row row-cols-3">
            <div
            class="cursos col"
            v-for="cursos in cursosPos"
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
    name:'Pos',

    data(){
        return{
            cursosPos:[
                {
                    nome:'CIÊNCIA DE DADOS',
                    tipo:'Pós-Graduação',
                    duracao:'11 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'BANCO DE DADOS',
                    tipo:'Pós-Grasuação',
                    duracao:'6 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'ENGENHARIA DE SOFTWARE',
                    tipo:'Pós-Graduação',
                    duracao:'6 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'DESENVOLVIMENTO DE APP MOVEL',
                    tipo:'Pós-Graduação',
                    duracao:'6 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'BUSINESS INTELIGENCE',
                    tipo:'Pós-Graduação',
                    duracao:'6 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'JOGOS DIGITAIS',
                    tipo:'Pós-Graduação',
                    duracao:'12 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'DESENVOLVIMENTO WEB',
                    tipo:'Pós-Graduação',
                    duracao:'11 meses',
                    modalidade:'EAD'
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