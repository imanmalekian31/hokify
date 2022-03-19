<template>
  <header class="bg-primary-100 dark:bg-slate-700">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 whitespace-nowrap">
      <div class="w-full py-4 flex items-center justify-between">
        <div class="flex items-center">
          <nuxt-link to="/">
            <span class="sr-only">Workflow</span>
            <img
              class="h-10 w-auto"
              src="/img/logo-extend.webp"
              alt="hokify-logo"
            >
          </nuxt-link>
          <div class="hidden ml-10 space-x-8 md:block">
            <nuxt-link
              v-for="link in links"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-white hover:border-b-4 border-slate-100 pb-5"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="hidden md:block ml-10 space-x-4">
          <span class="text-white text-2xl align-middle cursor-pointer" @click="toggleTheme">
            <i v-if="!isDarkMode" class="fa-solid fa-sun" />
            <i v-else class="fa-solid fa-moon" />
          </span>
          <nuxt-link
            to="/"
            class="transition inline-flex bg-primary-200 dark:bg-slate-500 py-2 px-8 rounded-full text-base font-bold text-white hover:bg-primary-300 hover:dark:bg-slate-900 focus:outline-none focus:border-primary-300"
          >
            place an ad
          </nuxt-link>
          <nuxt-link
            :to="`${user.firstName ? '/profile': '/'}`"
            class="inline-flex py-3 space-x-2 items-center font-bold text-white"
          >
            <i class="fa-regular fa-circle-user text-xl -mb-1" />
            <span class="hover:underline underline-offset-2"> {{ user.firstName || 'register' }} </span>
          </nuxt-link>
        </div>
        <div class="md:hidden">
          <span class="text-white text-xl cursor-pointer mr-4" @click="toggleTheme">
            <i v-if="!isDarkMode" class="fa-solid fa-sun" />
            <i v-else class="fa-solid fa-moon" />
          </span>
          <nuxt-link
            :to="`${user.firstName ? '/profile': '/'}`"
            class="inline-flex py-3 space-x-2 items-center font-bold text-white"
          >
            <i class="fa-regular fa-circle-user text-xl -mb-1" />
            <span class="hover:underline underline-offset-2"> {{ user.firstName || 'register' }} </span>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    links: [
      { name: 'Job search', href: '/' },
      { name: 'Curriculum vitae', href: '/' }
    ],

    isDarkMode: false
  }),
  computed: {
    ...mapState(['user'])
  },
  methods: {
    toggleTheme () {
      this.isDarkMode = !this.isDarkMode
      document.querySelector('body').classList.toggle('dark')
    }
  }
}
</script>
