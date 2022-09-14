import axios from 'axios';
import { parseCookies } from 'nookies';

const apiURL = 'https://apimikrokosmos.codie.digital/';
const baseImage = 'https://mikrokosmos.codie.digital/uploads/';
const baseImageGallery = 'https://mikrokosmos.codie.digital/imagens/Products/';
const baseVideo = 'https://mikrokosmos.codie.digital/uploads/videos/';
export function getAPIClient(ctx?: any) {
  // const { "auth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: apiURL,
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        document.cookie =
          'auth.token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        document.cookie =
          'user' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        document.cookie =
          'address' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        api.defaults.headers['Authorization'] = `Bearer `;
      }

      return error;
    },
  );

  // if (token) {
  //   api.defaults.headers["Authorization"] = `Bearer ${token}`;
  // }

  return api;
}

const api = getAPIClient();

export { api, apiURL, baseImage, baseImageGallery };
