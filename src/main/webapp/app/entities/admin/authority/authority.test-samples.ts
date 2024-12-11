import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'fda024ea-747a-4f1c-96e0-710f9a462da3',
};

export const sampleWithPartialData: IAuthority = {
  name: '5bba0f2a-7dd4-4f42-8830-a57cd6430100',
};

export const sampleWithFullData: IAuthority = {
  name: '91f7b6d7-6448-4c46-8cbd-89e3270d1f22',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
