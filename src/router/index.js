import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/front/FrontSide.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/front/Home.vue"),
      },
      {
        path: "products",
        component: () => import("../views/front/ProductsFront.vue"),
      },
      {
        path: "/product/:id",
        component: () => import('../views/front/ProductSingle.vue'),
      },
      {
        path: "about",
        component: () => import("../views/front/AboutPage.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/front/paycheck/PayCheck.vue"),
        children: [
          {
            name: "userinfo",
            path: "userinfo",
            component: () => import("../views/front/paycheck/UserInfo.vue"),
          },
          {
            path: ":orderId",
            component: () => import("../views/front/paycheck/CustomerOrder.vue"),
          },

        ]
      },
      {
        path: "/:pathMatch(.*)*",
        component: () =>
          import("../views/404Page.vue"),
      },

    ]
  },
  {
    path: "/login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/admin/Dashboard.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/admin/HomeBack.vue"),
      },
      {
        path: "products",
        component: () => import("../views/admin/ProductsBack.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/admin/OrdersBack.vue"),
      },

    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "navbar-active",
  scrollBehavior(to) {
    return {
      top: to.fullPath.includes('order') ? 300 : 0,
    }
  },
});

export default router;
