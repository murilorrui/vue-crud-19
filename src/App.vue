<template>
  <div id="app">
    <nav-bar/>
    <div class="content">
      <side-bar/>
      <b-container class="container">
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
.container
  background: #e1e1e1
</style>
<style src="./styles/global.sass" lang="sass"></style>
