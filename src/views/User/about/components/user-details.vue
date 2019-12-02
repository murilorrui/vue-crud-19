<template>
  <b-row align-v="center">
    <b-col class="user-details__avatar" cols="4" md="4" lg="3" xl="2">
      <avatar :avatar="user.avatar" large/>
    </b-col>
    <b-col cols="8" md="8" lg="5" xl="6">
      <b-row class="user-details__name">{{user.name}}</b-row>
      <b-row class="user-details__job">{{user.job}}</b-row>
      <b-row alig-v="center" class="user-details__phone">
        <span class="user-details__icon fas fa-phone-alt"/>
        {{user.phone}}
      </b-row>
      <b-row alig-v="center" class="user-details__email">
        <span class="user-details__icon fas fa-envelope"/>
        {{user.email}}
      </b-row>
    </b-col>
    <b-col class="user-details__space" cols="4" md="6" lg="2">
      <b-form-checkbox v-model="user.status" name="check-button" size="lg" switch>
      </b-form-checkbox>
      <span
         class="user-details__status-text"
        :class="{ 'user-details__status': user.status}"
        >
        {{ statusText(user.status) }}
      </span>
    </b-col>
    <b-col class="user-details__space" cols="8" md="6" lg="2">
      <b-row align-v="center" align-h="center">
        <b-col class="user-details__actions" cols="6">
          <b-button
            variant="outline"
            class="user-details__button"
            @click="editUser(user.id)"
            >
            <span class="user-details__button-icon fas fa-pencil-alt"/>
          </b-button>
          <b-row align-h="center">Editar</b-row>
        </b-col>
        <b-col class="user-details__actions" cols="6">
          <b-button
            variant="outline"
            class="user-details__button"
            @click="deleteUser(user.id)"
            >
            <span class="user-details__button-icon fas fa-trash-alt"/>
          </b-button>
          <b-row align-h="center">Excluir</b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import Avatar from '@/components/avatar/avatar.vue';

export default {
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    Avatar,
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    statusText(status) {
      return status ? 'Ativado' : 'Desativado';
    },
    editUser(id) {
      this.$router.push({ name: 'user', params: { id } });
    },
    deleteUser(id) {
      this.$emit('delete-user', id);
    },
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .user-details
    &__status
      color: #20cb91
    &__status-text
      font-size: 12px
    &__avatar
      display: flex
      justify-content: center
    &__name
      font-size: 14px
      font-weight: bold
    &__job
      text-align: initial
      font-size: 14px
    &__phone
      color: #0062a4
      font-size: 14px
    &__email
      color: #0062a4
      font-size: 14px
    &__icon
      font-size: 14px
      +media-min-md
        margin-right: 6px
    &__button
      color: #0062a4
      border-radius: 100%
      border: 1px solid #ccc
      margin-bottom: 6px
    &__actions
      font-size: 12px
      text-align: center
      color: #0062a4
    &__space
      margin-top: 16px
      +media-min-md
        margin-top: 0
  .custom-control-input:checked~.custom-control-label::before
    background-color: #20cb91
    border-color: #20cb91
  .custom-control-input:checked ~ .custom-control-label::after
    transform: translateX(1.65rem) !important
  .custom-control-label
    &::before
      width: 2.55em !important
      height: 1.35em !important
      border-radius: 1em !important
    &::after
      width: calc( 1.6rem - 4px) !important
      height: calc( 1.6rem - 4px) !important
</style>
