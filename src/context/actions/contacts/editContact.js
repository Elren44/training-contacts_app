import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  dispatch({
    type: EDIT_CONTACT_LOADING,
  });
  axiosInstance
    .put(`/contacts/${id}`, requestPayload)
    .then((res) => {
      // console.log('res.data', res.data);
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Что то пошло не так, попробуй еще раз'},
      });
    });
};
