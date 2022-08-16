export interface FormField {
  fields: string[];
}

export const formFieldsMap = {
  username: {
    fields: ['Username', 'Password'],
  },
  phone: {
    fields: ['Phone', 'Password'],
  },
  usernameSignUp: {
    fields: ['Username', 'Password', 'confirmpassword', 'Email'],
  },
  phoneSignUp: {
    fields: ['Phone', 'Password', 'confirmpassword', 'Email'],
  },
};
