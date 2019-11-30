<template>
  <div class="home">
    <b-row>
      <b-col
        cols="6"
        v-for="i in 4"
        :key="i"
        class="home__col"
        >
        <b-card class="home__card">
          <div class="home__title">
            <span class="fa fa-edit"/>
            Minhas tarefas
          </div>
          <div class="home__divider"/>
          <b-card-text class="home__card-text">
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="sass">
  .home
    &__col
      margin: 16px 0
    &__card
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)
      .card-body
        padding: 0 !important
    &__card-text
      padding: 16px
    &__title
      color: #0062a4
      margin: 12px
      text-align: start
    &__divider
      width: 100%
      border-bottom: 1px solid #e0d8d8
</style>
