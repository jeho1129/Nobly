interface SignUpType {
  userId: string;
  userName: string;
  password: string;
  lunarSloar: string;
  birth: string;
  oldUserId: string[];
}

interface Medication {
  medicine: string;
  medicationTime: string;
}

interface SeniorSignUpType {
  userName: string;
  birth: string;
  lunarSloar: string;
  gender: string;
  medications: Medication[];
}

interface TvSignInType {
  tvCode: string;
  userId: string;
}

interface SignInType {
  userId: string;
  password: string;
}

interface SignInResType {
  grantType: string;
  accessToken: string;
  refreshToken: string;
}
export type {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
  SignInResType,
};
