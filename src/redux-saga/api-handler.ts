import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { RESPONSE_STATUS_CODE } from "@/constants/api.constant";
import { showToastNotification } from "@/redux/notification-slice";

/**
 * Generic handler for API calls in sagas.
 * @param apiFn - The API function to call.
 * @param payload - The payload for the API call.
 * @param successAction - The success action creator.
 * @param errorAction - The error action.
 */
export function* handleApiCall(
  apiFn: (payload: any) => Promise<any>,
  payload: any,
  successAction: (data: any) => any,
  errorAction: (data?: any) => any
): SagaIterator {
  try {
    const response = yield call(apiFn, payload);

    if (
      response.status === RESPONSE_STATUS_CODE.success ||
      response.status === RESPONSE_STATUS_CODE.createdSuccessfully
    ) {
      yield put(successAction(response.data));
    } else {
      throw new Error(response);
    }
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || error?.message || "An error occurred!";
    yield put(showToastNotification({ message: errorMessage, severity: "error" }));
    yield put(errorAction(error));
  }
}
