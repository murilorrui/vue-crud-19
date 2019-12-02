<template>
  <b-row class="h-100">
    <span class="mb-3">Aqui voce pode adicionar, excluir ou gerenciar seus usuarios:</span>
    <b-col cols="12">
      <b-card class="user__card">
        <b-row align-v="center" class="h-100">
          <b-col class="user__avatar" cols="12" lg="2">
            <avatar :avatar="user.avatar" large/>
          </b-col>
          <b-col cols="12" lg="10">
            <b-col cols="12" lg="7">
              <b-row class="user__alert">* campos obrigatórios</b-row>
              <div class="user__input">
                <strong>Nome:</strong>
                <span class="user__alert">*</span>
                <b-form-input v-model="user.name"></b-form-input>
              </div>
              <div class="user__input">
                <strong>Email:</strong>
                <span class="user__alert">*</span>
                <b-form-input v-model="user.email"></b-form-input>
              </div>
            </b-col>
            <b-col cols="12" lg="5">
              <div class="user__input">
                <strong>Telefone:</strong>
                <span class="user__alert">*</span>
                <b-form-input v-model="user.phone"></b-form-input>
              </div>
              <div class="user__input">
                <strong>Nível de acesso:</strong>
                <span class="user__alert">*</span>
                <b-form-select v-model="user.accessLevel" :options="options"></b-form-select>
              </div>
              <b-row>
                <b-col cols="6">
                  <b-form-checkbox
                    v-model="user.status"
                    name="check-button"
                    size="lg"
                    switch
                    >
                  </b-form-checkbox>
                </b-col>
                <b-col cols="6">
                  <b-button
                    variant="outline"
                    class="user__button"
                    @click="deleteUser"
                    >
                    <span class="user__icon fas fa-trash-alt"/>
                  </b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6">
                  <span
                    class="user__status-text"
                    :class="{ 'user__status': user.status}"
                    >
                    {{ statusText(user.status) }}
                  </span>
                </b-col>
                <b-col cols="6">
                  <b-row align-h="center" class="user__delete">Excluir</b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-button pill block class="user__save-button" @click="save">
                  Salvar
                </b-button>
              </b-row>
            </b-col>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import EventBus from '@/plugins/event-bus';
import UsersService from '@/services/users';
import Avatar from '@/components/avatar/avatar.vue';

export default {
  components: {
    Avatar,
  },
  data: () => ({
    usersService: new UsersService(),
    user: {},
    options: [
      { value: 'user', text: 'Usuário' },
      { value: 'admin', text: 'Administrador' },
    ],
  }),
  methods: {
    getUser(id) {
      this.usersService.getUser(id).then((resp) => {
        this.user = resp;
      });
    },
    statusText(status) {
      return status ? 'Ativado' : 'Desativado';
    },
    save() {
      this.usersService.edit(this.user).then(() => {
        EventBus.$emit('alert', 'Salvo com sucesso.');
      });
    },
    deleteUser() {
      this.usersService.delete(this.user.id).then(() => {
        EventBus.$emit('alert', 'Deletado com sucesso.');
        this.$router.push({ name: 'about' });
      });
    },
  },
  created() {
    const { id } = this.$route.params;
    this.getUser(id);
  },
};
</script>

<style lang="sass">
  .user
    &__status-text
      font-size: 12px
    &__status
     color: #20cb91
    &__save-button
      background: #20cb91
      border: 0
      margin-top: 16px
      height: 45px
    &__button
      color: #0062a4
      border-radius: 100%
      border: 1px solid #ccc
      margin-bottom: 6px
    &__delete
      color: #0062a4
    &__alert
      color: red
      text-align: initial
      margin: 0 6px
    &__avatar
      display: flex
      justify-content: center
      align-items: center
    &__input
      text-align: initial
      margin: 24px 0
    &__card
      padding: 24px
    &__details
      margin: 24px 0
  .custom-control-input:checked~.custom-control-label::before
    background-color: #20cb91
    border-color: #20cb91
  .custom-control-input:checked ~ .custom-control-label::after
    transform: translateX(1.65rem) !important
  .custom-control
    margin-bottom: 20px
  .custom-control-label
    &::before
      width: 2.55em !important
      height: 1.35em !important
      border-radius: 1em !important
    &::after
      width: calc( 1.6rem - 4px) !important
      height: calc( 1.6rem - 4px) !important
</style>
