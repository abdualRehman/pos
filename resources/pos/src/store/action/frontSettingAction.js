import apiConfig from '../../config/apiConfig';
import { apiBaseURL, frontSettingActionType, toastType } from '../../constants';
import { addToast } from './toastAction';
import { setLoading } from "./loadingAction";

export const fetchFrontSetting = () => async (dispatch) => {
    apiConfig.get(apiBaseURL.FRONT_SETTING)
        .then((response) => {
            // console.log("response", response);
            dispatch({ type: frontSettingActionType.FETCH_FRONT_SETTING, payload: response.data.data });
        })
        .catch(({ response }) => {
            // console.log("error", response);
            dispatch(addToast(
                { text: response.data.message, type: toastType.ERROR }));
        });
}
