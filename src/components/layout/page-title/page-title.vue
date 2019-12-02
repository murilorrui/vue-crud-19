<template>
  <b-row align-v="center" class="page-title">
    <b-button
      pill
      v-if="routeMeta.backRoute"
      class="mr-3 page-title__back-button"
      @click="backToUsers"
      >
      <span class="fas fa-chevron-left"/>
    </b-button>
    <span class="fa mr-3" :class="routeMeta.icon"/>
    <span v-html="routeMeta.title"></span>
  </b-row>
</template>

<script>
export default {
  computed: {
    routeMeta() {
      return this.$route.meta;
    },
  },
  methods: {
    backToUsers() {
      this.$router.push({ name: this.$route.meta.backRoute });
    },
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .page-title
    color: #0062a4
    height: 50px
    border-bottom: 2px solid #cacaca
    margin-bottom: 30px
    +media-min-md
      font-size: 22px
    &__back-button
      background: #0062a4 !important
</style>
