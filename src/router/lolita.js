import lolita from '@/views/lolita/lolita/'
import order from '@/views/lolita/order/'
import final_payment from '@/views/lolita/final/'

const Tabbar = () =>
    import('@/components/tabbar/');
const State = () =>
    import('@/components/statebar/');

export default [
    {
        path: '/',
        name: 'lolita',
        components: {
            default: lolita,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/order',
        name: 'lolitaOrder',
        components: {
            default: order,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/final',
        name: 'lolitaFinal',
        components: {
            default: final_payment,
            tabbar: Tabbar,
            state: State
        }
    }
];
