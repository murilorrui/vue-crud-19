<template>
  <b-nav
    class="sidebar"
    vertical
    :class="toggleClassHandler"
    >
    <div class="sidebar__content">
      <b-nav-item
        v-for="item in sidebar.itens"
        class="sidebar__item"
        :key="item.text"
        @click="route(item.routeName)"
        :class="{ 'sidebar__item-active': activeRoute === item.route }"
        >
        <span
          :class="item.icon"
          class="fa fa-edit sidebar__icon"
          />
        <span v-if="!toggleMenu">
          {{ item.text }}
        </span>
      </b-nav-item>
    </div>
  </b-nav>
</template>

<script>
import sidebar from './sidebar.json';

export default {
  name: 'sidebar',
  props: {
    toggleMenu: {
      type: Boolean,
    },
  },
  data: () => ({
    sidebar,
  }),
  computed: {
    activeRoute() {
      return this.$route.fullPath;
    },
    toggleClassHandler() {
      return {
        'w-25': !this.toggleMenu,
      };
    },
  },
  methods: {
    route(path) {
      this.$router.push({ path });
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
