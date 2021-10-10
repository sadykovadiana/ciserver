const initialState = {
    data: [],
    settings: {
        repo: '',
        command: '',
        branch: '',
        interval: '',
    },
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_SETTINGS':
            const { repo, command, branch, interval } = action.payload;
            return {
                ...state,
                settings: {
                    repo: repo,
                    command: command,
                    branch: branch,
                    interval: interval,
                },
            };
        default:
            return state;
    }
};

export default reducer;
