/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignInCredentialsDto, ActionScope, AgentTypes, PersonalIDTypes } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SignInLoginUser
// ====================================================

export interface SignInLoginUser_signInUser_authenticationInstance {
  __typename: "AuthenticationInstance";
  _id: string;
  name: string;
}

export interface SignInLoginUser_signInUser_officeAddress {
  __typename: "AuthAddress";
  _id: string;
  city: string;
  country: string;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
  updatedAt: any | null;
}

export interface SignInLoginUser_signInUser_role {
  __typename: "Roles";
  _id: string;
  name: string;
}

export interface SignInLoginUser_signInUser_subrole {
  __typename: "SubRoles";
  _id: string;
  name: string | null;
}

export interface SignInLoginUser_signInUser {
  __typename: "AuthToken";
  _id: string;
  accessToken: string | null;
  actionScope: ActionScope | null;
  agentId: string | null;
  agentType: AgentTypes | null;
  authenticationInstance: SignInLoginUser_signInUser_authenticationInstance | null;
  birthDate: any | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  email: string | null;
  firstName: string | null;
  hireDate: any | null;
  idString: string | null;
  idType: PersonalIDTypes | null;
  lastName: string | null;
  name: string | null;
  officeAddress: SignInLoginUser_signInUser_officeAddress | null;
  profile: string | null;
  role: SignInLoginUser_signInUser_role | null;
  roleName: string | null;
  subrole: SignInLoginUser_signInUser_subrole | null;
  type: string | null;
  updatedAt: any | null;
}

export interface SignInLoginUser {
  signInUser: SignInLoginUser_signInUser;
}

export interface SignInLoginUserVariables {
  signInCredentials: SignInCredentialsDto;
}
