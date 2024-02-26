<template>
  <div class="popup-container" @click.self="closePopup">
    <div class="popup">
      <h2 class="popup__title">Форма ввода</h2>
      <div class="form-container">

        <div class="form-container__input">
          <label for="name" class="input__label">Имя:</label>
          <Input type="text" id="name" v-model="name" />
        </div>
        <div class="form-container__input">
          <label for="surname" class="input__label">Фамилия:</label>
          <Input type="text" id="surname" v-model="surname" />
        </div>
        <div class="form-container__input">
          <label for="email" class="input__label">Email:</label>
          <Input type="email" id="email" v-model="email" />
        </div>
        <div class="form-container__input">
          <label for="phone" class="input__label">Телефон:</label>
          <Input type="tel" id="phone" v-model="phone" />
        </div>
        <div class="form-container__input">
          <label for="address" class="input__label">Адрес:</label>
          <Input type="text" id="address" v-model="address" />
        </div>
      </div>
      <Button @click="submitForm">Отправить</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Input/Input.vue";

export default {
  components: {
    Button,
    Input,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    submitForm() {
      const formData = {
        name: ["Имя", this.name],
        surname: ["Фамилия", this.surname],
        email: ["Email", this.email],
        phone: ["Телефон", this.phone],
        address: ["Адрес", this.address],
      };
      this.$emit('submitForm', formData);
      this.closePopup();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "index.scss"
</style>
