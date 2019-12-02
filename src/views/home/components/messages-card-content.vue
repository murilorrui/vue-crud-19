<template>
  <b-row class="message-card" align-v="center" align-h="center">
    <b-col cols="12" xl="6">
      Voce possui <strong>{{ messages }} mensagens novas</strong>
    </b-col>
    <b-col cols="12" xl="6">
      <b-button pill class="card-item__button">
        Ver mensagens
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    messages: {
      type: Number,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import @/styles/mobileFirst

  .message-card
    min-height: 168px
    +media-min-md
      min-height: 112px
    +media-min-lg
      min-height: 56px
  .card-item
    border: 1px dashed
    border-radius: 20px
    height: 40px
    display: flex
    align-items: center
    &__button
      width: 200px
      background: #0062a4
</style>
