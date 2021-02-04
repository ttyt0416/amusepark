const socialmenu = {
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

const socialmenuReducer = (state = socialmenu, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default socialmenuReducer;