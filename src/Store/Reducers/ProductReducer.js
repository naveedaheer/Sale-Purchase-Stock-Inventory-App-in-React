
const InitalState = {
    products: [],
};

const products = (state = InitalState, action) => {
    switch (action.type) {
        case "find":
            return Object.assign(state, { products: action.value})
    }
    return state
}

export default products