<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">MENU</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link r-link">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/graduacao" class="nav-link r-link">GRADUAÇÃO</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pos" class="nav-link r-link">PÓS-GRADUAÇÃO</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cursoslivres" class="nav-link r-link">CURSOS LIVRES</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sobre" class="nav-link r-link">SOBRE</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>

export default {
    name:'Nav'
}
</script>