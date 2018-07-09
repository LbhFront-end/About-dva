export default {
    namespace: 'products',
    state: [],
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
    effects: {
        *delete(action, { call, put }) {
            yield call(function delay(timeout) {
                return new Promise(resolve => {
                    setTimeout(resolve, timeout);
                });
            }, 2000);
            yield put({ type: 'delete' });
        }
    },
    methods: {
        delay(timeout) {
            return new Promise(resolve => {
                setTimeout(resolve, timeout);
            });
        }
    }
};