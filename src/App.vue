<template>
  <div id="app">
    <nav-bar @toggle-handler="toggleHandler"/>
    <div class="content">
      <side-bar @toggle-handler="toggleHandler" :toggle-menu="toggleMenu"/>
      <b-container fluid class="background">
        <div class="app__main">
          <page-title/>
          <router-view/>
        </div>
        <b-alert
          :show="alert"
          class="app__alert"
          @dismissed="alert=0"
          >
          <span class="fas fa-check"></span>
          {{ message }}
        </b-alert>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EventBus from '@/plugins/event-bus';
import NavBar from '@/components/layout/navbar/index.vue';
import SideBar from '@/components/layout/sidebar/sidebar.vue';
import PageTitle from '@/components/layout/page-title/page-title.vue';
import UserService from '@/services/users';

export default {
  components: {
    NavBar,
    SideBar,
    PageTitle,
  },
  data: () => ({
    toggleMenu: false,
    userService: new UserService(),
    alert: false,
    message: '',
  }),
  methods: {
    ...mapActions([
      'setUser',
    ]),
    toggleHandler() {
      this.toggleMenu = !this.toggleMenu;
    },
    getUser() {
      this.userService.getUsers().then((resp) => {
        this.setUser({ name: resp[0].name, avatar: resp[0].avatar });
      });
    },
    configAlert() {
      EventBus.$on('alert', (message) => {
        this.alert = 5;
        this.message = message;
      });
    },
  },
  created() {
    this.configAlert();
    this.getUser();
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
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

  .app
    &__main
      padding: 24px
    &__alert
      background: #20cb91
      color: white
      width: 300px
      border: 0
      display: block
      margin: 0
      position: absolute
      top: 80%
      left: 50%
      text-align: center
      transform: translate(-50%, -50%)

  .content
    display: flex
    min-height: 100vh
  .background
    position: relative
    background: #e1e1e1
    +media-min-md
      padding: 4em
</style>
<style src="./styles/global.sass" lang="sass"></style>
