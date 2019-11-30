<template>
  <div id="app">
    <nav-bar @toggle-handler="toggleHandler"/>
    <div class="content">
      <side-bar :toggle-menu="toggleMenu"/>
      <b-container fluid class="background mx-0">
        <router-view/>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/layout/navbar/index.vue';
import SideBar from '@/components/layout/sidebar/sidebar.vue';

export default {
  components: {
    NavBar,
    SideBar,
  },
  data: () => ({
    toggleMenu: false,
  }),
  methods: {
    toggleHandler() {
      this.toggleMenu = !this.toggleMenu;
    },
  },
};
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

.content
  display: flex
.background
  background: #e1e1e1
</style>
<style src="./styles/global.sass" lang="sass"></style>
