import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Link from "@/components/link.vue";
import Login from "@/components/login.vue";
import Registrasi from "@/components/register.vue";
import Navbar from "@/components/navbar.vue";


Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Registrasi",
      component: Registrasi,
    },
    {
        path: "/link",
        name: "Link",
        component: Link,
      },
      {
        
        path: "/navbar",
        name: "Navbar",
        component: Navbar,
      }
  ];
}

const link = new Router({
  mode: "history",
  routes: configRoutes(),
//   scrollBehavior: () => ({ y: 0 }),
});
export default link;