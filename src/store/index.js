import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?"
  },
  getters: {
    _isAuthenticated: (state) => state.user != null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password; //?. optional chaining  // password diye bir şey varsa bunu sil 
      return user;
    },
    _saltKey: state => state.saltKey
  },
});
