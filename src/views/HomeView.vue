<template>
  <div class="container">
    <Button @click="openPopup">Начать</Button>
    <div v-if="lastAddedUser" class="last-added">
      Последний добавленный пользователь: 
      <User :userData="lastAddedUser"/>
    </div>
    <div v-else class="last-added">
      Нет ни одного пользователя
    </div>
    <Popup v-if="showPopup" @close="closePopup" @submitForm="submitForm" />
  </div>
</template>

<script>
import Popup from "@/components/Popup/Popup.vue";
import User from "@/components/User/User.vue";
import { mapGetters, mapActions } from 'vuex';

import Button from "@/components/Button/Button.vue";

export default {
  components: {
    Popup,
    User,
    Button,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  computed: {
    ...mapGetters([
      'getUsersList',
    ]),
    lastAddedUser() {
      return this.getUsersList.length ? this.getUsersList[this.getUsersList.length - 1] : null
    }
  },
  methods: {
    ...mapActions([
      'addUserToList',
    ]),
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    submitForm(formData) {
      this.addUserToList(formData);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.last-added {
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
