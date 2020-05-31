import store from "@/store";

export const auth = (to, from, next) => {
  if (to.matched.some((match) => match.meta.roles)) {
    const { user } = store.state.auth;
    const roles = to.matched.flatMap((match) => match.meta.roles || []);

    if (user.role && roles.includes(user.role)) {
      next();
    } else {
      store.dispatch("handleError", new Error("Insufficient Permission"));

      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
};
