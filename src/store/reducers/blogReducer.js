import * as actions from '../actions/actionTypes';

const initState = {
    blogs: [
        {id: '1', title: 'Breaking News', content: '...forgot about this part'}, //TODO: Remove dummy data
        {id: '2', title: 'COVID Updates', content: '...forgot about this part'},
        {id: '3', title: 'Pasta Fanatic?', content: '...forgot about this part'}
    ]
}

const blogReducer = (state = initState, action) => {

    switch (action.type) {
        case actions.CREATE_BLOG:
            console.log('blog posted', action.blog);
            return state;
        
        case actions.CREATE_BLOG_ERR:
            console.log('create blog error', action.err);
            return state;

        default:
            return state;
    }
}

export default blogReducer;