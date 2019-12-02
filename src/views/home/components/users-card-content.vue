<template>
  <b-row class="users-card">
    <b-col lg="6" cols="12" class="my-2">
      <div class="users-card__item">
        <span class="fas fa-check ml-3 mr-2"/>
        <span>
          {{ amountUsers.active }} ativos
        </span>
      </div>
    </b-col>
    <b-col lg="6" cols="12" class="my-2">
      <div class="users-card__item">
        <span class="fas fa-ban ml-3 mr-2"/>
        <span>
          {{ amountUsers.inactive }} inativos
        </span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    amountUsers: {
      type: Object,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import @/styles/mobileFirst
  .users-card
    min-height: 168px
    +media-min-md
      min-height: 112px
    +media-min-lg
      min-height: 56px
    &__item
      border: 1px dashed
      border-radius: 20px
      display: flex
      font-size: 14px
      align-items: center
      height: 40px
</style>
