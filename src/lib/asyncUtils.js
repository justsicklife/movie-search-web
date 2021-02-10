export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async (dispatch, getState) => {
        dispatch({ type });
        try {
            const payload = await promiseCreator(param, getState);
            dispatch({ type: SUCCESS, payload });
        } catch (e) {
            dispatch({ type: ERROR, error: e })
        }
    };
}

export const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: payload => ({
        loading: false,
        data: payload,
        error: null,
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
    })
};

export const handleAsyncActions = (type, key, renewal = true) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                const prevDate = renewal ? state[key].data : null;
                return {
                    ...state,
                    [key]: reducerUtils.loading(prevDate)
                };
            case SUCCESS:
                const concatArray = state[key].data === null ? action.payload : state[key].data.concat(action.payload);
                return {
                    ...state,
                    [key]: reducerUtils.success(concatArray),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.error)
                };
            default:
                return state
        }
    };
}