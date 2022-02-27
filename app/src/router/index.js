import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Graduacao from '../views/Graduacao.vue'
import Pos from '../views/Pos.vue'
import Sobre from '../views/Sobre.vue'
import CursosLivres from '../views/CursosLivres.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/graduacao',
    name: 'Graduacao',
    component: Graduacao
  },
  {
    path: '/pos',
    name: 'Pos',
    component: Pos
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/cursoslivres',
    name: 'CursosLivres',
    component: CursosLivres
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
