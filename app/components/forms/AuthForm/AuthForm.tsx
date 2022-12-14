import React, { useState } from 'react';
import type { FC } from 'react';
import { CardWrapper } from '~/components/shared/CardWrapper/CardWrapper';
import { Input } from '~/components/fields/Input/Input';
import type { AuthMode } from '~/shared/types/types';
import { BasicButton } from '~/components/shared/BasicButton/BasicButton';
import { Alert } from '~/components/shared/Alert/Alert';

interface AuthFormProps {
  fieldErrors?: {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    password?: string;
  };
  formError?: string;
}

export const AuthForm: FC<AuthFormProps> = ({ fieldErrors, formError }) => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const changeAuthMode = () => {
    setAuthMode((prevState) => (prevState === 'login' ? 'register' : 'login'));
  };
  return (
    <CardWrapper>
      <div className="grid grid-cols-1 gap-y-2">
        <div className="flex flex-col max-w-md mt-2 mx-auto">
          <span className="text-center text-5xl">✈️</span>
          <h1 className="ml-0 text-center text-slate-600 text-3xl">
            SaiForceOne Express Logistics Company
          </h1>
        </div>
        <div className="flex">
          <h2 className="ml-0 text-center text-slate-600 text-2xl">
            {authMode === 'login' ? 'Login to your' : 'Register a new'} account
          </h2>
        </div>
        <input type="hidden" value={authMode} />
        {authMode === 'register' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Input
              fieldError={fieldErrors?.firstName}
              fieldLabel="First Name"
              maxLength={70}
              minLength={2}
              name="firstName"
              placeholder="ex. John"
              required
            />
            <Input
              fieldError={fieldErrors?.lastName}
              fieldLabel="Last Name"
              maxLength={70}
              minLength={2}
              name="lastName"
              placeholder="ex. Batman"
              required
            />
          </div>
        ) : null}
        <Input
          fieldError={fieldErrors?.emailAddress}
          fieldLabel="Email Address"
          maxLength={100}
          name="emailAddress"
          placeholder="ex. user@example.com"
          required
          type="email"
        />
        <Input
          fieldError={fieldErrors?.password}
          fieldLabel="Password"
          id="input-password"
          maxLength={100}
          minLength={6}
          name="password"
          placeholder="********"
          required
          type="password"
        />
      </div>
      {formError ? (
        <div className="px-1 my-2">
          <Alert alertText={formError} alertType="error" />
        </div>
      ) : null}
      <div className="flex flex-col mt-4 gap-y-2">
        <hr />
        <p
          className="text-center underline cursor-pointer"
          onClick={changeAuthMode}
        >
          {authMode === 'login' ? 'Register' : 'login'} instead
        </p>
        <BasicButton
          title={`${
            authMode === 'login' ? 'Login to your' : 'Register new'
          } account`}
          type="submit"
        />
      </div>
    </CardWrapper>
  );
};
