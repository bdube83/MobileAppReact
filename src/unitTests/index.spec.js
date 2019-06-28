const initialState = Navigator.router.getStateForAction(initialAction);

describe('navigation', () => {
    it('navigator should navigate correctly', () => {
        expect(Navigator.router.getStateForAction(initialState, action)).toEqual({
            index: 1
        })
    })
});