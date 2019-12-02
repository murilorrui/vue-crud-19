<template>
  <div class="home">
    <b-row>
      <b-col
        cols="12"
        md="6"
        class="home__col"
        >
        <home-card
          :title="'Minhas tarefas'"
          :icon="'fa-clipboard-check'"
          >
          <task-card-content
            :tasks="tasks"
            />
        </home-card>
      </b-col>
      <b-col
        cols="12"
        md="6"
        class="home__col"
        >
        <home-card
          :title="'Minhas mensagens'"
          :icon="'fa-envelope'"
          >
          <messages-card-content
            :messages="messages"
            />
        </home-card>
      </b-col>
      <b-col
        cols="12"
        md="6"
        class="home__col"
        >
        <home-card
          :title="'Usuários'"
          :icon="'fa-user'"
          >
          <users-card-content
            :amount-users="amountUsers"
            />
        </home-card>
      </b-col>
      <b-col
        cols="12"
        md="6"
        class="home__col"
        >
        <add-shortcut/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HomeService from '@/services/home';
import HomeCard from './components/home-card.vue';
import TaskCardContent from './components/task-card-content.vue';
import MessagesCardContent from './components/messages-card-content.vue';
import UsersCardContent from './components/users-card-content.vue';
import AddShortcut from './components/add-shortcut.vue';

export default {
  name: 'home',
  components: {
    HomeCard,
    TaskCardContent,
    UsersCardContent,
    MessagesCardContent,
    AddShortcut,
  },
  data: () => ({
    homeService: new HomeService(),
    amountUsers: {
      active: 0,
      inactive: 0,
    },
    messages: 0,
    tasks: {
      aproved: 0,
      progress: 0,
      waiting: 0,
    },
  }),
  methods: {
    getAmoutUsers() {
      this.homeService.getAmoutUsers().then((resp) => {
        this.amountUsers = resp;
      });
    },
    getMessages() {
      this.homeService.getMessages().then((resp) => {
        this.messages = resp.messages;
      });
    },
    getTasks() {
      this.homeService.getTasks().then((resp) => {
        this.tasks = resp;
      });
    },
  },
  created() {
    this.getAmoutUsers();
    this.getMessages();
    this.getTasks();
  },
};
</script>

<style lang="sass">
  .home
    &__col
      margin: 16px 0
</style>
