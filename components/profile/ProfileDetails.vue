<template>
  <div class="bg-white shadow-lg rounded-lg">
    <div class="bg-primary-100 dark:bg-slate-700 text-white font-bold text-2xl px-4 sm:px-20 py-3 rounded-t-lg">
      profile overview
    </div>
    <div class="px-4 sm:px-20 py-3">
      <span class="font-bold text-lg text-slate-500">
        {{ user.firstName }} {{ user.lastName }}
      </span>
      <br>
      <span class="font-medium text-base text-slate-400">{{ user.email }}</span>
    </div>
    <div v-if="!isEditMode" class="flex justify-center py-4">
      <button
        type="button"
        class="transition col-span-2 inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-50 dark:bg-slate-800 hover:dark:bg-slate-500 hover:bg-blue-100 focus:outline-none"
        @click="changeMode"
      >
        edit profile
      </button>
    </div>

    <form
      v-else
      ref="editForm"
      class="grid grid-cols-2 gap-8 p-5 bg-color-white  my-6 md:my-0"
      @submit.prevent="editProfile"
    >
      <div class="col-span-2 md:col-span-1">
        <label
          for="first-name-input"
          class="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <div class="mt-1">
          <input
            id="first-name-input"
            v-model="form.firstName"
            type="text"
            required
            class="shadow-sm focus:ring-primary-100 focus:dark:ring-slate-700 focus:border-primary-100 focus:dark:border-slate-700 w-full sm:text-sm border-gray-300 rounded-md focus:invalid:dark:border-pink-500 focus:invalid:border-pink-500 focus:invalid:dark:text-pink-600 focus:invalid:text-pink-600 focus:invalid:dark:ring-pink-500 focus:invalid:ring-pink-500"
            placeholder="Simon"
          >
        </div>
      </div>
      <div class="col-span-2 md:col-span-1">
        <label
          for="last-name-input"
          class="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <div class="mt-1">
          <input
            id="last-name-input"
            v-model="form.lastName"
            type="text"
            required
            class="shadow-sm focus:ring-primary-100 focus:dark:ring-slate-700 focus:border-primary-100 focus:dark:border-slate-700 w-full sm:text-sm border-gray-300 rounded-md focus:invalid:dark:border-pink-500 focus:invalid:border-pink-500 focus:invalid:dark:text-pink-600 focus:invalid:text-pink-600 focus:invalid:dark:ring-pink-500 focus:invalid:ring-pink-500"
            placeholder="Tretter"
          >
        </div>
      </div>
      <div class="col-span-2 md:col-span-1">
        <label for="email-input" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input
            id="email-input"
            v-model="form.email"
            type="email"
            required
            class="shadow-sm focus:ring-primary-100 focus:dark:ring-slate-700 focus:border-primary-100 focus:dark:border-slate-700 w-full sm:text-sm border-gray-300 rounded-md focus:invalid:dark:border-pink-500 focus:invalid:border-pink-500 focus:invalid:dark:text-pink-600 focus:invalid:text-pink-600 focus:invalid:dark:ring-pink-500 focus:invalid:ring-pink-500"
            placeholder="simon.tretter@hokify.com"
          >
        </div>
      </div>
      <button
        type="submit"
        class="transition col-span-2 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-50 dark:bg-slate-800 hover:dark:bg-slate-500 hover:bg-blue-100 focus:outline-none"
      >
        save
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      firstName: '',
      lastName: '',
      email: ''
    },

    isEditMode: false
  }),
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['addNotification']),

    changeMode () {
      this.isEditMode = true

      this.form.firstName = this.user.firstName
      this.form.lastName = this.user.lastName
      this.form.email = this.user.email
    },
    editProfile () {
      this.setUser({
        ...this.form
      })

      this.addNotification({
        id: `edit-${Math.random()}`,
        type: 'success',
        message: 'Your profile updated'
      })
      this.resetForm()
      this.isEditMode = false
    },
    resetForm () {
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.$refs.editForm.reset()
    }
  }
}
</script>
