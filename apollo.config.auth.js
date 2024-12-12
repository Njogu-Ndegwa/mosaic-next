module.exports = {
    client: {
    addTypename: true,
    name: 'auth-service',
      service: {
        name: 'auth-service',
        url: 'https://dev-federated-graphql-api.omnivoltaic.com/graphql',
      },
      includes: ['app/(auth)/**/*.tsx', 'app/(auth)/**/*.ts'],
      excludes: ['**/__tests__/**'],
    },
  };