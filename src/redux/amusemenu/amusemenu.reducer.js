const amusemenu = {
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
        }
    ]
}

const amusemenuReducer = (state = amusemenu, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default amusemenuReducer;