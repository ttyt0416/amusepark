const communimenu = {
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

const communimenuReducer = (state = communimenu, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default communimenuReducer;