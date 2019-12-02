<template lang="html">
  <b-nav-item-dropdown id="dropdown-offset" offset="25" class="alerts" right>
    <template class="alerts__name" v-slot:button-content>
      <b-button
        pill
        class="mr-3 alerts__button"
        >
        <span class="fas fa-bell"/>
      </b-button>
    </template>
    <b-container>
      <b-row
        v-for="i in 2"
        :key="i"
        class="alerts__item p-2"
        >
        <span class="alerts__date">DD/MM/AAAA - HH:MM</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </b-row>
    </b-container>
  </b-nav-item-dropdown>
</template>

<script>

export default {
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .alerts
    .dropdown-menu
      width: 300px
      background: rgba(0, 0, 0, 0.73) !important
      color: white !important
    .dropdown-toggle::after
      display: none !important
    &__button
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
    &__date
      color: #ccc
    &__item
      &:nth-child(2)
        border-top: 1px solid #ccc
</style>
