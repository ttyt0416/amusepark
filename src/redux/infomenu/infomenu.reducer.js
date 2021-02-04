const infomenu = {
    sections: [
        {
            title: 'guide',
            linkUrl: 'info/guide',
            id: 1
        },
        {
            title: 'price',
            linkUrl: 'info/price',
            id: 2
        },
        {
            title: 'convenience',
            linkUrl: 'info/convenience',
            id: 3
        },
        {
            title: 'road',
            linkUrl: 'info/road',
            id: 4
        },
    ]
}

const infomenuReducer = (state = infomenu, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default infomenuReducer;