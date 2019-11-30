<template>
  <b-nav class="sidebar w-25" vertical>
    <div class="sidebar__content">
      <b-nav-item
        v-for="item in sidebar.itens"
        class="sidebar__item"
        :key="item.text"
        :href="item.route"
        :class="{ 'sidebar__item-active': activeRoute === item.route }"
        >
        <span
          :class="item.icon"
          class="fa fa-edit sidebar__icon"
          />
        {{ item.text }}
      </b-nav-item>
    </div>
  </b-nav>
</template>

<script>
import sidebar from './sidebar.json';

export default {
  data: () => ({
    sidebar,
  }),
  computed: {
    activeRoute() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="sass">
  .sidebar
    height: calc(100vh - 56px)
    background: #0062a4
    color: white
    &__content
      margin: 12px 0
    &__item
      display: flex
      line-height: 32px
      a
        color: white
      &-active
        background: rgba(0, 0, 0, .4)
    &__icon
      margin: 12px
      font-size: 20px
</style>
