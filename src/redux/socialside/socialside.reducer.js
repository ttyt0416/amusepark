const INITIAL_STATE = {
    sections: [
        {
            title: 'event',
            linkUrl: 'social/event',
            id: 1
        },
        {
            title: 'announce',
            linkUrl: 'social/announce',
            id: 2
        },
        {
            title: 'machine',
            linkUrl: 'social/machine',
            id: 3
        },
    ]
}

const socialSideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default socialSideReducer;