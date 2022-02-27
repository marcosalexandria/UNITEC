<template>
    <footer class="row">
        <div class="col">
            <h4>Institucional</h4>
            <p>Vestibular</p>
            <p>Locais</p>
            <p>Sobre</p>
            <br>
            <h4>Aluno</h4>
            <p>EAD 2022</p>
            <p>Rematricula</p>
            <p>Avaliações</p>
        </div>

        <div class="col" id="logo">
            <h1>UNITEC</h1>
            <p>TECNOLOGIA QUE TRANSFORMA VIDAS</p>
        </div>

        <div class="col">
            <a href="https://goo.gl/maps/yqdMjC3oba7mNhuU9" target="_blank"><img src="/img/mapa.png" alt="" id="imgMapa"></a>
        </div>
    </footer>
</template>

<script>

export default {
    name:'Footer'
}
</script>

<style scoped>
footer{
    background-color: #313139;
    padding: 40px;
    color: white;
    margin: 0%;
}

h4{
    color: #FC9612;
}

p{
    margin: 0px;
}

#imgMapa{
    max-width: 300px;
    margin-top: 40px;
}

#logo{
    text-align: center;
    font-weight: bold;
}
</style>