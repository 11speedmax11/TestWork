<template>
  <main class="wrapper">
    <header class="app-header">
      <router-link
        to="/"
        class="nav-link"
        :class="{ active: $route.path === '/' }"
        >Добавление</router-link
      >
      <router-link
        to="/about"
        class="nav-link"
        :class="{ active: $route.path === '/about' }"
        >Пользователь</router-link
      >
    </header>
    <div class="main-content">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.app-header {
  background-color: #007bff;
  color: white;
  padding: 10px 0;
  text-align: center;
}

.nav-link {
  margin-right: 20px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #0056b3;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}
.nav-link.active {
  text-decoration: underline;
}
</style>

