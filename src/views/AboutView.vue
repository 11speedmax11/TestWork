<template>
  <div>
    <div v-if="getUsersList.length">
      <User v-for="(user) in getUsersList" :key="user.id" :userData="user"
        class="user-wrapper" />
    </div>
    <div v-else class="user-wrapper">
      Нет ни одного пользователя
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import User from "@/components/User/User.vue";
export default {
  components: {
    User
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'getUsersList',
    ]),

  },
  methods: {
  },
};
</script>
<style>
.user-wrapper {
  margin-top: 10px;
}
</style>
