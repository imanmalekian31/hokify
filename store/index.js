import { idGenerator } from '~/utils'

const getId = idGenerator()

export const state = () => ({
  user: {
    firstName: '',
    lastName: '',
    email: ''
  },
  notifications: []
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setNotifications (state, notifications) {
    state.notifications = notifications
  }
}

export const actions = {
  registerUser ({ commit, dispatch }, user) {
    commit('setUser', user)

    const notification = {
      id: getId(),
      type: 'success',
      title: 'You have successfully registered',
      message: `Hello ${user.firstName} ${user.lastName} at hokify`
    }
    dispatch('addNotification', notification)
  },

  addNotification ({ state, commit, dispatch }, notification) {
    commit('setNotifications', [...state.notifications, notification])
    setTimeout(() => {
      dispatch('removeNotification', notification.id)
    }, 3000)
  },

  removeNotification ({ state, commit }, notificationId) {
    const notifications = state.notifications.filter(
      notification => notification.id !== notificationId
    )

    commit('setNotifications', notifications)
  }
}
