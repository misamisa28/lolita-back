import inform from '@/views/article/inform/'
import article from '@/views/article/article/'

const Tabbar = () =>
    import('@/components/tabbar/');
const State = () =>
    import('@/components/statebar/');

export default [
    {
        path: '/inform',
        name: 'inform',
        components: {
            default: inform,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/article',
        name: 'article',
        components: {
            default: article,
            tabbar: Tabbar,
            state: State
        }
    }
];
