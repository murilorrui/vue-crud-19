<template>
  <b-nav
    class="sidebar"
    vertical
    :class="toggleClassHandler"
    >
    <div class="sidebar__content">
      <div class="sidebar__close">
        <b-button
          class="sidebar__close-button"
          variant="outline flip"
          @click="toggleHandler"
          pill
          >
          <span class="fas fa-times"/>
        </b-button>
      </div>
      <b-nav-item
        v-for="item in sidebar.itens"
        class="sidebar__item"
        :key="item.text"
        @click="route(item.routeName)"
        :disabled="!item.routeName"
        :class="{ 'sidebar__item-active': activeRoute === item.routeName }"
        >
        <span
          :class="item.icon"
          class="fa fa-edit sidebar__icon"
          />
        <span v-if="toggleMenu">
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
        'w-10': !this.toggleMenu,
        sidebar__mobile: this.toggleMenu,
      };
    },
    isMobile() {
      return window.innerWidth < 426;
    },
  },
  methods: {
    toggleHandler() {
      this.$emit('toggle-handler');
    },
    route(path) {
      if (this.isMobile) {
        this.$emit('toggle-handler');
      }
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .sidebar
    background: #0062a4
    color: white
    display: none
    +media-min-md
      display: flex
    &__close
      height: 50px
      display: flex
      justify-content: flex-end
      +media-min-md
        display: none
    &__close-button
      color: white !important
      font-size: 24px
    &__mobile
      position: absolute
      width: 95%
      top: 0
      bottom: 0
      z-index: 20
      display: flex
      +media-min-md
        width: 25%
        position: initial
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
