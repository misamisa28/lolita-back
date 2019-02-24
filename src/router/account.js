import check from '@/views/account/check/'
import manage from '@/views/account/manage/'

const Tabbar = () =>
    import('@/components/tabbar/');
const State = () =>
    import('@/components/statebar/');

export default [
    {
        path: '/check',
        name: 'check',
        components: {
            default: check,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/manage',
        name: 'manage',
        components: {
            default: manage,
            tabbar: Tabbar,
            state: State
        }
    }
];
