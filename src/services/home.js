import http from './http';

export default class HomeService {
  getAmoutUsers() {
    return http.get('/amount-users').then(resp => resp.data);
  }

  getTasks() {
    return http.get('/my-tasks').then(resp => resp.data);
  }

  getMessages() {
    return http.get('/messages').then(resp => resp.data);
  }
}
