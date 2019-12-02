<template>
  <b-card class="card">
    <div class="card__title">
      <div>
        <span class="fas mx-3 card__icon" :class="icon"/>
        {{ title }}
      </div>
      <div>
        <span class="fas fa-arrows-alt card__icon-drag"/>
      </div>
    </div>
    <div class="card__divider"/>
    <b-card-text class="card__card-text">
      <slot/>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="sass">
  .card
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)
    .card-body
      padding: 0 !important
    &__icon
      font-size: 24px
    &__icon-drag
      color: #ccc
      font-size: 20px
    &__card-text
      padding: 16px
    &__title
      display: flex
      justify-content: space-between
      align-items: center
      color: #0062a4
      margin: 14px
      font-weight: bold
      text-align: start
    &__divider
      width: 100%
      border-bottom: 1px solid #e0d8d8
</style>
