const INITIAL_STATE = {
    sections: [
        {
            title: 'suggest',
            linkUrl: 'communicate/suggest',
            id: 1
        },
        {
            title: 'qna',
            linkUrl: 'communicate/qna',
            id: 2
        },
    ]
}

const communiSideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default communiSideReducer;