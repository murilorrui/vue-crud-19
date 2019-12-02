<template>
  <b-row align-v="center" align-h="end" class="h-100">
    <b-col cols="12">
      <b-card class="user__card">
        <b-container fluid>
          <b-row class="user__actions" align-h="end">
            <b-col cols="2">
              <strong>
                Status:
              </strong>
            </b-col>
            <b-col cols="2">
              <strong>
                Ações:
              </strong>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              v-for="user in users"
              :key="user.id"
              cols="12"
              class="px-0 user__teste"
              >
              <user-details
                class="user__details"
                :user="user"
                @delete-user="deleteUser"
                />
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';
import EventBus from '@/plugins/event-bus';
import UsersService from '@/services/users';
import UserDetails from './components/user-details.vue';

export default {
  components: {
    UserDetails,
  },
  data: () => ({
    usersService: new UsersService(),
    users: [],
  }),
  methods: {
    ...mapActions([
      'setUser',
    ]),
    getUsers() {
      this.usersService.getUsers().then((resp) => {
        this.users = resp;
        this.setUser({ name: resp[0].name, avatar: resp[0].avatar });
      });
    },
    deleteUser(id) {
      this.usersService.delete(id).then(() => {
        EventBus.$emit('alert', 'Deletado com sucesso.');
        this.getUsers();
      });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style lang="sass">
  @import @/styles/mobileFirst
  .user
    &__actions
      display: none
      +media-min-md
        display: flex
    &__card
      padding: 4em
    &__teste
      &:nth-child(2)
        border-bottom: 1px solid #ccc
        border-top: 1px solid #ccc
    &__details
      margin: 2em 0
</style>
