<template lang="html">
  <b-navbar class="app-navbar" toggleable="lg" variant="white">
    <b-container fluid>
      <b-row align-h="between" align-v="center" class="app-navbar__content w-100">
        <b-col cols="6" lg="4" class="px-0">
          <b-row align-v="center">
            <b-col
              cols="2"
              class="app-navbar__button"
              @click="toggleMenu"
              >
              <i class="fas fa-bars"></i>
            </b-col>
            <b-col cols="4">
              <b-navbar-brand href="/">
                <img src="@/assets/logo.png" alt="">
              </b-navbar-brand>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6" lg="8">
          <b-row v-if="user" align-h="end" align-v="center">
            <b-col cols="3">
              <b-collapse class="app-navbar__right" id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-0 app-navbar__dropdown">
                  <alerts/>
                </b-navbar-nav>
              </b-collapse>
            </b-col>
            <b-col cols="auto">
              <b-collapse class="app-navbar__right" id="nav-collapse" is-nav>
                <avatar v-b-modal.modal-1 :avatar="user.avatar"/>
                <b-navbar-nav class="ml-0 app-navbar__dropdown">
                  <dropdown :user="user"/>
                </b-navbar-nav>
              </b-collapse>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-modal v-if="user" id="modal-1" hide-footer class="app-navbar__modal">
      <modal-content :user="user"/>
    </b-modal>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';
import Avatar from '@/components/avatar/avatar.vue';
import Alerts from '@/components/layout/navbar/alerts.vue';
import Dropdown from '@/components/layout/navbar/dropdown.vue';
import ModalContent from '@/components/layout/navbar/modal-content.vue';

export default {
  components: {
    Avatar,
    Alerts,
    Dropdown,
    ModalContent,
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-handler');
    },
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .app-navbar
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)
    +media-min-md
      padding-left: 0
    &__dropdown
      display: none
      +media-min-md
        display: flex
    &__content
      margin-left: 6px
      +media-min-md
        margin-left: 0
    &__right
      justify-content: flex-end
      display: flex !important
    &__name
      color: #ccc
    &__button
      width: 78px
      cursor: pointer
      font-size: 24px
      color: #0062a4
  .modal-dialog
    max-width: 100%
    margin: 0
    top: 0
    bottom: 0
    left: 0
    right: 0
    height: 100vh
    display: flex
  .modal-header
    border: 0
</style>
