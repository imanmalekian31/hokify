<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="text-primary-100 dark:text-slate-700 flex flex-col justify-center">
        <h1 class="text-3xl font-bold">
          <span class="inline-block w-full">Job here - hokify!</span>
          In 3 minutes to a new job with hokify!
        </h1>
        <h3 class="text-xl font-medium mt-5">
          Faster to your new job in trade, gastronomy, trade and office in
          Austria.
        </h3>
      </div>
      <register-form v-if="!user.email" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>
