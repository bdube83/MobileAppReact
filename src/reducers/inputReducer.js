const initState = {
    text: 'Please enter name'
};
export const input = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return { text: action.text };
        default:
            return state;
    }
}
