import Vue from 'vue'

const store = new Vue({
  data: {
    messages: [],
    user: null,
    users: []
  },
  created () {
    Vue.nextTick(() => {
      // @ts-ignore
      this.$api.onError((data) => {
        console.error('Error from API:', data)
      })
      // @ts-ignore
      this.$api.onMessage((data) => {
        store.messages.push(data.message)
      })
      // @ts-ignore
      this.$api.onUsersUpdate(({ type, user, users }) => {
        // Probably first setup
        if (store.users.length === 0 && users.length > 0) {
          store.users = users.map((user) => {
            user.color = getRandomColor()
            return user
          })
        } else {
          switch (type) {
            case 'join':
              user.color = getRandomColor()
              store.users.push(user)
              break
            case 'left':
              let i = store.users.findIndex((u) => user.username === u.username)
              i && store.users.splice(i, 0)
          }
        }
      })

      const getRandomColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    })
  }
})

export default store
