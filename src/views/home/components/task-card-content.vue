<template>
  <b-row>
    <b-col lg="6" xl="4" class="my-2">
      <div class="card-item">
        <span class="fas fa-check ml-3 mr-2"/>
        <span>
          {{ tasks.aproved }} aprovadas
        </span>
      </div>
    </b-col>
    <b-col lg="6" xl="4" class="my-2">
      <div class="card-item">
        <span class="fas fa-ban ml-3 mr-2"/>
        <span>
          {{ tasks.progress }} progresso
        </span>
      </div>
    </b-col>
    <b-col lg="6" xl="4" class="my-2">
      <div class="card-item">
        <span class="fas fa-ban ml-3 mr-2"/>
        <span>
          {{ tasks.waiting }} esperando
        </span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Object,
    },
  },
};
</script>

<style lang="sass" scoped>
  .card-item
    border: 1px dashed
    border-radius: 20px
    height: 40px
    display: flex
    align-items: center
    font-size: 14px
</style>
