//data transfer objects for api calls
export type LoginDto = {
  email: string;
  password: string;
};

// export type Role = 'kid' | 'parent';
export type Role = 'kid' | 'parent';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;

  family: {
    id: string;
    code: string;
  };
}

//Response types for login
export type LoginSuccessResponse = {
  token: string;
  user: User;
};

//Error response type for login
export type LoginErrorResponse = {
  status: number;
  message: string;
};

export interface TooManyRequests {
  error: string;
  message: string;
  statusCode: number;
}

////////////////////////////////////////////////////////////////////////
//data transfer object for registration
export type RegisterDto = {
  name: string;
  role: Role;
  email: string;
  password: string;
  confirmPassword: string;
  familyCode?: string;
};

//Response type for registration
export type RegisterSuccessResponse = {
  message: string;
  token: string;
  user: User;
};

//Error response type for registration
export type RegisterErrorResponse = {
  status: number;
  message: string;
};
