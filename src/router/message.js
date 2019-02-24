import feedback from '@/views/message/feedback/'
import message from '@/views/message/message/'

const Tabbar = () =>
    import('@/components/tabbar/');
const State = () =>
    import('@/components/statebar/');

export default [
    {
        path: '/feedback',
        name: 'message-feedback',
        components: {
            default: feedback,
            tabbar: Tabbar,
            state: State
        }
    },
    {
        path: '/message',
        name: 'message',
        components: {
            default: message,
            tabbar: Tabbar,
            state: State
        }
    }
];
