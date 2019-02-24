import store from '@/views/type/store/'
import type from '@/views/type/type/'

const Tabbar = () =>
    import('@/components/tabbar/');
const State = () =>
    import('@/components/statebar/');

export default [
    {
        path: '/type-store',
        name: 'typeStore',
        components: {
            default: store,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/type',
        name: 'type',
        components: {
            default: type,
            tabbar: Tabbar,
            state: State
        }
    }
];
