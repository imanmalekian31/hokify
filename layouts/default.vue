<template>
  <div>
    <notification v-for="(notification, index) in notifications" :key="`notification-${index}`" :notification="notification" />
    <navbar />
    <div class="max-w-7xl mx-auto mt-4 sm:mt-10 px-4 sm:px-6 lg:px-8">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['notifications'])
  }
}
</script>
