<template lang="html">
  <b-navbar toggleable="lg" type="dark" variant="white">
    <b-container fluid>
      <b-row align-h="between" class="w-100">
        <b-col cols="auto" class="px-0">
          <b-row align-v="center" align-h="between">
            <b-col
              cols="6"
              class="app-navbar__button px-0"
              @click="toggleMenu"
              >
              <i class="fas fa-bars"></i>
            </b-col>
            <b-col cols="6">
              <b-navbar-brand href="/">Casasoft</b-navbar-brand>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="auto">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$emit('toggle-handler');
    },
  },
};
</script>

<style lang="sass">
  .app-navbar
    &__button
      cursor: pointer
      font-size: 24px
      color: #0062a4
</style>
