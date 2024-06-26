/** Contact destinations that we can send user confirmation code to */
export type ContactMethod = 'Email' | 'Phone Number';

/** Federated IDPs that Authenticator supports */
export enum FederatedIdentityProviders {
  Apple = 'Apple',
  Amazon = 'Amazon',
  Facebook = 'Facebook',
  Google = 'Google',
}

/**
 * Cognito user contact method types that have not been verified as valid
 */
export enum UnverifiedContactMethodType {
  Email = 'email',
  PhoneNumber = 'phone_number',
}

export interface UnverifiedUserAttributes {
  email?: string;
  phone_number?: string;
}
