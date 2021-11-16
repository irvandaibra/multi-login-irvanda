<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/navbar">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/link">Link</a>
      </li>
    </ul>
    
    <a style="margin-left: 830px" v-if="logout === null" href="/login">Login</a>
    <a style="margin-left: 830px" v-if="logout !== null" @click="out" href="/">Logout</a>
    
  </div>
</nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default{
name: "App",
computed: {
  logout() {
    return JSON.parse(sessionStorage.getItem("USER_DATA"));
  },
},
  methods: {
    out(){
      sessionStorage.clear();
    },
  },
}

</script>
