import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Legals from '@/components/Legals'
import Terms from '@/components/Terms'
import About from '@/components/About'
import Community from '@/components/Community'
import DocumentationHome from '@/components/Documentation/Home'
import DocumentationPage from '@/components/Documentation/Page'
import ShopIndex from '@/components/Shop/Index'
import ShopItem from '@/components/Shop/Item'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/legals',
            name: 'Legals',
            component: Legals
        },
        {
            path: '/terms',
            name: 'Terms',
            component: Terms
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/community',
            name: 'Community',
            component: Community
        },
        {
            path: '/docs',
            name: 'DocumentationHome',
            component: DocumentationHome
        },
        {
            path: '/docs/:slug',
            name: 'DocumentationPage',
            component: DocumentationPage
        },
        {
            path: '/shop',
            name: 'ShopIndex',
            component: ShopIndex
        },
        {
            path: '/shop/:slug',
            name: 'ShopItem',
            component: ShopItem
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition)
    {
        return { x: 0, y: 0 }
    }
})
