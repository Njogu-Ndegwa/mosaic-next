import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ErrorResponse, onError } from 'apollo-link-error';
import { FEDERATION_API } from './config';
import { USER_PREF_STORAGE_KEY } from '@/app/(auth)/constants/auth';
import { getToken } from '@/app/(auth)/utils';


// Instantiate required constructor fields
const cache = new InMemoryCache();

const link = createHttpLink({
  uri: FEDERATION_API,
});

export const tokenLink = setContext((_, context) => {
  const authToken = getToken();
  const userPref = JSON.parse(
    localStorage.getItem(USER_PREF_STORAGE_KEY) || '{}'
  );
  const headers = userPref?.distributorId
    ? { distributorId: userPref?.distributorId }
    : {};
  return {
    ...context,
    headers: {
      ...context.headers,
      Authorization: authToken ? `Bearer ${authToken.auth}` : null,
      ...headers,
    },
  };
});

interface ResponseError extends ErrorResponse {
  networkError?: Error & {
    statusCode?: number;
    bodyText?: string;
  };
}

export const errorLink = onError((error: ResponseError) => {
  if (error.networkError && error.networkError.statusCode === 524) {
  }
});

const clientSimulator = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: tokenLink.concat(link).setOnError((error) => {
    return error;
  }),

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    // mutate: { errorPolicy: 'ignore' },
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
});

// export const clientUpload = new ApolloClient({
//   // Provide required constructor fields

//   cache: cache,
//   link: createUploadLink({
//     uri: FEDERATION_API,
//     headers: {
//       Authorization: `Bearer ${getToken().auth}`,
//     },
//   }),

//   // Provide some optional constructor fields
//   name: 'react-web-client',
//   version: '1.3',
//   queryDeduplication: false,
//   defaultOptions: {
//     mutate: {},
//     watchQuery: {
//       fetchPolicy: 'cache-first',
//     },
//   },
// });

export default clientSimulator;
