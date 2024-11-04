import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: () => {
            return { name: "test" };
        },
    },
    {
        path: "/login",
        name: "login",
        component: import("../views/Login.vue"),
        meta: { layout: "LoginLayout" },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: import("../layout/ErrorLayout.vue"),
        meta: { layout: "ErrorLayout" },
    },
    {
        path: "/test",
        name: "test",
        component: import("../views/Test.vue"),
        meta: { layout: "MainLayout" },
    },
    {
        path: "/test2",
        name: "test2",
        component: import("../views/Test2.vue"),
        meta: { layout: "MainLayout" },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.afterEach((to: any) => {
    const DEFAULT_TITLE = "Nazorat dasturi loyihasi";
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
