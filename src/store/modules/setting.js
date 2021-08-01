const USER_KEY = 'kulong-m-user'

const setting = {
    state: {
        user: JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    },
    mutations: {
        updateUser (state, data) {
            // 1. vuex做更新，使得有响应式
            state.user = data
            console.log(data)
            // 2. localStorage做持久更新
            localStorage.setItem(USER_KEY, JSON.stringify(data))
          },
          // 清除用户信息
          clearUser (state) {
            // 1. vuex做清除，使得有响应式
            state.user = {}
            // 2. localStorage做持久清除
            localStorage.removeItem(USER_KEY)
          }
    },
    actions: {
      
    },
}

export default setting