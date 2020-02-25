import axios from 'axios';
import store from '../redux/store';
import { setError } from '../redux/features/errorsFeatureSlice';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export default async function(...args) {
  try {
    const { data } = await axios(...args);
    if (data.message) {
      throw new Error(`${data.http_status_code} ${data.message}`);
    }
    return data;
  } catch (e) {
    store.dispatch(setError({ e: String(e) }));
  }
}
