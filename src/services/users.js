import http from './http';

export default class UsersService {
  getUsers() {
    return http.get('/user').then(resp => resp.data);
  }

  getUser(id) {
    return http.get(`/user/${id}`).then(resp => resp.data);
  }

  edit(user) {
    return http.put(`/user/${user.id}`, user).then(resp => resp.data);
  }

  delete(id) {
    return http.delete(`/user/${id}`).then(resp => resp.data);
  }
}
