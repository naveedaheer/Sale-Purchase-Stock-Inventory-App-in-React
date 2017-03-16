
const InitalState = {
    stores: [],
};

const Stores = (state = InitalState, action) => {
    switch (action.type) {
        case "find":
            return Object.assign(state, { stores: action.value})
    }
    return state
}

export default Stores
