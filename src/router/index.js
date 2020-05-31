import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes';
import {auth} from './guards';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(auth);

export default router;
