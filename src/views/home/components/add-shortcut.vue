<template>
  <div class="add-shortcut">
    <b-row align-h="center" align-v="center" class="h-100">
      <div class="add-shortcut__content">
        <span class="fas fa-plus mx-3"/>
        <span>Adicionar atalho</span>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .add-shortcut
    color: #0062a4
    font-size: 18px
    font-weight: bold
    height: 147px
    background: #d1d1d1
    border-radius: 5px
    &__content
      height: 80%
      border: 1px dashed #8c8b8b
      border-radius: 5px
      display: flex
      align-items: center
      justify-content: center
      width: 85%
      +media-min-md
        width: 90%
</style>
