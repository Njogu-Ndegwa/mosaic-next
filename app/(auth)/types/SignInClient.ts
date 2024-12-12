/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignInCredentialsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SignInClient
// ====================================================

export interface SignInClient_signInClient {
  __typename: "AccessToken";
  accessToken: string | null;
  _id: string;
  email: string | null;
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  role: string | null;
  updatedAt: any | null;
  createdAt: any | null;
  profile: string | null;
  idString: string | null;
  type: string | null;
  deleteStatus: boolean | null;
  roleName: string | null;
}

export interface SignInClient {
  signInClient: SignInClient_signInClient;
}

export interface SignInClientVariables {
  signInCredentialsInput: SignInCredentialsInput;
}
