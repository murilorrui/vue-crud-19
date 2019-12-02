<template>
  <b-row class="modal-container" align-v="center" align-h="center">
    <b-col class="modal-container__avatar" cols="12">
      <avatar :avatar="user.avatar" large/>
    </b-col>
    <b-col cols="12" class="mt-2">
      <p>Olá {{ user.name }}</p>
      <p class="modal-container__text">Editar dados</p>
      <p class="modal-container__text">Sair</p>
    </b-col>
  </b-row>
</template>

<script>
import Avatar from '@/components/avatar/avatar.vue';

export default {
  components: {
    Avatar,
  },
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="sass">
  .modal-container
    border: 0
    display: block
    margin: 0
    position: absolute
    top: 50%
    left: 50%
    text-align: center
    transform: translate(-50%, -50%)
    &__avatar
      display: flex
      justify-content: center
    &__text
      color: #0062a4
</style>
