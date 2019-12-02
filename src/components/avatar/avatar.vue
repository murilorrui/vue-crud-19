<template>
  <div class="avatar" :class="borderSize">
    <img :src="avatar" class="avatar__img" :class="avatarSize">
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    avatarSize() {
      return {
        avatar__img__large: this.large,
      };
    },
    borderSize() {
      return {
        avatar__large: this.large,
      };
    },
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .avatar
    border-radius: 100%
    border: 1px solid #e1e1e1
    display: flex
    align-items: center
    justify-content: center
    width: 55px
    height: 55px
    &__large
      width: 70px !important
      height: 75px !important
      +media-min-md
        width: 115px !important
        height: 115px !important
    &__img
      width: 40px
      height: 40px
      border-radius: 100%
      &__large
        width: 60px !important
        height: 65px !important
        +media-min-md
          width: 85px !important
          height: 85px !important
</style>
