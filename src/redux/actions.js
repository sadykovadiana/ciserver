import { SAVE_SETTINGS, GET_GIT_HISTORY_ERROR, GET_GIT_HISTORY_SUCCEESS, GET_GIT_HISTORY_REQUEST } from './actionTypes';

export const saveSettings = (data) => {
    return (dispatch) => {
        getPromise(Math.random())
            .then((res) => {
                console.log(GET_GIT_HISTORY_SUCCEESS);
                dispatch(save(data));
            })
            .catch((err) => {
                console.log(GET_GIT_HISTORY_ERROR);
                alert('error');
            });
    };
};

const save = (data) => {
    return {
        type: SAVE_SETTINGS,
        payload: data,
    };
};

function getPromise(random) {
    return new Promise(function (resolve, reject) {
        function decideStatus() {
            random > 0.5 ? resolve('fulfilled') : reject('rejected');
        }
        setTimeout(decideStatus, random * 3000);
    });
}
