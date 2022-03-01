<template>
    <section id="sec1">
        <h1>Cursos Livres</h1>

        <img src="/img/faixas/faixa-cursos.jpg" alt="" class="container-fluid">
        
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
    name:'CursosLivres',

    data(){
        return{
            cursosGraduacao:[
                {
                    nome:'FRONTEND',
                    tipo:'Livre',
                    duracao:'4 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'BACKEND',
                    tipo:'Livre',
                    duracao:'4 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'REDES',
                    tipo:'Livre',
                    duracao:'3 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'LINUX - FUNDAMENTOS',
                    tipo:'Livre',
                    duracao:'2 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'BANCO DE DADOS RELACIONAIS',
                    tipo:'Livre',
                    duracao:'4 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'GESTÃO DE T.I',
                    tipo:'Livre',
                    duracao:'2 meses',
                    modalidade:'EAD'
                },
                {
                    nome:'P.O.O',
                    tipo:'Livre',
                    duracao:'2 meses',
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