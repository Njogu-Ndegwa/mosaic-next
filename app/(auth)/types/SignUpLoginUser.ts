/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignUpCredentialsDto, ActionScope, AgentTypes, PersonalIDTypes } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SignUpLoginUser
// ====================================================

export interface SignUpLoginUser_signUpUser_authenticationInstance {
  __typename: "AuthenticationInstance";
  _id: string;
  name: string;
}

export interface SignUpLoginUser_signUpUser_officeAddress {
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

export interface SignUpLoginUser_signUpUser_role {
  __typename: "Roles";
  _id: string;
  name: string;
}

export interface SignUpLoginUser_signUpUser_subrole {
  __typename: "SubRoles";
  _id: string;
  name: string | null;
}

export interface SignUpLoginUser_signUpUser {
  __typename: "AuthToken";
  _id: string;
  accessToken: string | null;
  actionScope: ActionScope | null;
  agentId: string | null;
  agentType: AgentTypes | null;
  authenticationInstance: SignUpLoginUser_signUpUser_authenticationInstance | null;
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
  officeAddress: SignUpLoginUser_signUpUser_officeAddress | null;
  profile: string | null;
  role: SignUpLoginUser_signUpUser_role | null;
  roleName: string | null;
  subrole: SignUpLoginUser_signUpUser_subrole | null;
  type: string | null;
  updatedAt: any | null;
}

export interface SignUpLoginUser {
  signUpUser: SignUpLoginUser_signUpUser;
}

export interface SignUpLoginUserVariables {
  signUpCredentials: SignUpCredentialsDto;
}
