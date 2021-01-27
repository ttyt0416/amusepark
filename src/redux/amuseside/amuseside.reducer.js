const INITIAL_STATE = {
    sections: [
        {
            title: 'amusement',
            linkUrl: 'amuse/amusement',
            id: 1
        },
        {
            title: 'concert',
            linkUrl: 'amuse/concert',
            id: 2
        },
        {
            title: 'food',
            linkUrl: 'amuse/food',
            id: 3
        },
        {
            title: 'souvenir',
            linkUrl: 'amuse/souvenir',
            id: 4
        },
    ]
}

const amuseSideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default amuseSideReducer;