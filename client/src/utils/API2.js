import axios from "axios";

export default {
  // Gets all books
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves a book to the database
  saveMyTeam: function(data) {
    return axios.put("/api/myteam", data);
  },
  getAllPlayers: function() {
    return axios.get('/api/players')
  }
};


