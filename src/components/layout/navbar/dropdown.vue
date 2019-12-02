<template lang="html">
  <b-nav-item-dropdown class="dropdown-navbar" right>
    <template class="dropdown-navbar__name" v-slot:button-content>
      Olá, {{ user.name }}
    </template>
    <b-container>
      <b-row>
        <b-col cols="12" class="dropdown-navbar__close">
          <b-button
            class="dropdown-navbar__close-button"
            variant="outline flip"
            pill
            >
            <span class="fas fa-times"/>
          </b-button>
        </b-col>
        <b-col cols="4">
          <avatar :avatar="user.avatar" large/>
        </b-col>
        <b-col cols="8">
          <b-dropdown-item>Olá {{ user.name }}</b-dropdown-item>
          <b-dropdown-item class="dropdown__text">Editar dados</b-dropdown-item>
          <b-dropdown-item class="dropdown__text">Sair</b-dropdown-item>
        </b-col>
      </b-row>
    </b-container>
  </b-nav-item-dropdown>
</template>

<script>
import Avatar from '@/components/avatar/avatar.vue';

export default {
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    Avatar,
  },
  data: () => ({
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg',
  }),
  methods: {
    toggleMenu() {
      this.$emit('toggle-handler');
    },
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .dropdown-navbar
    .dropdown-menu
      width: 400px
    &__name
      color: #ccc
    &__close
      height: 50px
      display: flex
      justify-content: flex-end
    &__close-button
      color: #0062a4
      font-size: 24px
    &__text
      .dropdown-item
        color: #0062a4 !important
</style>
