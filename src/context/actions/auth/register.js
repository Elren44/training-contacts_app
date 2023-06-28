import axiosInstance from "../../../helpers/axiosInterceptor";
import {CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS} from "../../../constants/actionTypes";

export const clearAuthState=() =>dispatch=> {
dispatch({
	type: CLEAR_AUTH_STATE
})
}

const registerAction = ({email, password,userName: username, firstName: first_name, lastName: last_name}) => dispatch => {
	dispatch({
		type: REGISTER_LOADING
	})
	axiosInstance.post("/auth/register", {
		email, password, username, first_name, last_name
	}).then((resp) => {
		// console.log("resp ". resp)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: resp.data
		})
	}).catch((err) => {
		// console.log(err)
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response ? err.response.data : {error: "Что то пошло не так, попробуй еще раз"}
		})
	})
}

export default registerAction;
