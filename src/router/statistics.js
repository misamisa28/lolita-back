import lolita from '@/views/statistics/lolita/'
import store from '@/views/statistics/store/'

const Tabbar = () =>
    import('@/components/tabbar/');
const State = () =>
    import('@/components/statebar/');

export default [
    {
        path: '/sta-lolita',
        name: 'staLolita',
        components: {
            default: lolita,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/sta-store',
        name: 'staStore',
        components: {
            default: store,
            tabbar: Tabbar,
            state: State
        }
    }
];
