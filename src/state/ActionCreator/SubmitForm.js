export const submitForm = (msg) => {
    return (dispatch) => {
        dispatch({
            type: "submit",
            payload: msg
        })
    }
}
