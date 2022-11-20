import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useState } from "react";
import { validateEmail, validateNameField, validatePassword } from "~/utils/validations.server";

import { db } from "~/utils/db.server";
import { createUserSession, login, register } from "~/utils/session.server";

type AuthMode = "login" | "register";

interface AuthAction {
  login: () => void;
  register: () => void;
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    emailAddress?: string;
    password?: string;
  },
  fields?: {
    emailAddress: string;
    password: string;
    loginType: string;
  }
}

type RegisterActionData = {
  formError?: string;
  fieldErrors?: {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    password?: string;
  },
  fields?: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
  }
}

const badRequest = (data: ActionData | RegisterActionData) => json(data, {status: 400});

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData();

  const loginType = form.get("loginType");
  
  if (typeof loginType !== "string") {
    return badRequest({formError: `There was a problem with data submitted`});
  }

  const authType: AuthMode = loginType === "login" ? "login" : "register";

  async function handleLogin(form: FormData, loginType: string) {

    const emailAddress = form.get("emailAddress");
    const password = form.get("password");

    if (typeof emailAddress !== "string" || typeof password !== "string") {
      return badRequest({formError: `There was a problem with data submitted`});
    }

    const fields = { loginType, emailAddress, password };
      const fieldErrors = {
        emailAddress: validateEmail(emailAddress),
        password: validatePassword(password),
      };
      
      if (Object.values(fieldErrors).some(Boolean))
        return badRequest({ fieldErrors, fields });

      const user = await login({ emailAddress, password });
      
      if (!user) {
        return badRequest({
          fields,
          formError: `Invalid credentials`,
        });
      }

      return createUserSession(user.id, "/");

  }

  async function handleRegister(form: FormData, loginType: string) {
    const emailAddress = form.get("emailAddress");
    const password = form.get("password");
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");

    if (
      typeof emailAddress !== "string" ||
      typeof password !== "string" ||
      typeof firstName !== "string" ||
      typeof lastName !== "string"
    ) {
      return badRequest({formError: `There was a problem with data submitted`});
    }
    const fields = {emailAddress, password, firstName, lastName};
    const fieldErrors = {
      emailAddress: validateEmail(emailAddress),
      password: validatePassword(password),
      firstName: validateNameField("firstName", firstName),
      lastName: validateNameField("lastName", lastName),
    }

    if (Object.values(fieldErrors).some(Boolean))
      return badRequest({ fieldErrors, fields });

    const userExists = await db.user.findFirst({
      where: {emailAddress},
    });

    if (userExists) {
      return badRequest({
        fields,
        formError: 'Unable to register. Email already used',
      });
    }
    
    const user = await register({ emailAddress, password, firstName, lastName});
    if (!user) {
      return badRequest({
        fields,
        formError: `There was a problem with registering your account`,
      })
    }
    return createUserSession(user.id, "/");
  }
  
  
  const objLit: AuthAction = {
    login: () => handleLogin(form, loginType),
    register: () => handleRegister(form, loginType),
  }

  return objLit[authType]();
};

export default function Auth() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  return (
    <div>
      <h1>Login to SFE Logistics</h1>
      <Form method="post">
        <input name="redirectTo" type="hidden" value={searchParams.get('redirectTo') ?? undefined} />
        <fieldset>
          <div className="flex flex-col">
            <legend className="sr-only">
              Login or Register?
            </legend>
            <label>
              <input
                name="loginType"
                type="radio"
                value="login"
                defaultChecked={authMode === "login"}
                onChange={() => setAuthMode("login")}
              />{" "}
              Login
            </label>
            <label>
              <input
                name="loginType"
                type="radio"
                value="register"
                defaultChecked={authMode === "register"}
                onChange={() => setAuthMode("register")}
              />{" "}
              Registration
            </label>
          </div>
          {authMode === "register" ? (
            <>
              <div className="flex flex-col">
                <label htmlFor="first-name">First Name</label>
                <input
                  className="border-2 border-slate-500"
                  id="input-first-name"
                  maxLength={70}
                  minLength={2}
                  name="firstName"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name">Last Name</label>
                <input
                  className="border-2 border-slate-500"
                  id="input-last-name"
                  maxLength={70}
                  minLength={2}
                  name="lastName"
                  required
                  type="text"
                />
              </div>
            </>
          ) : null}
          <div className="flex flex-col">
            <label htmlFor="email-address">Email Address</label>
            <input
              className="border-2 border-slate-500"
              id="input-email-address"
              maxLength={100}
              name="emailAddress"
              type="email" 
            />
            {actionData?.fieldErrors?.emailAddress ? (
              <p className="text-red-600" role="alert" id="email-error">
                {actionData.fieldErrors.emailAddress}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="border-2 border-slate-500"
              id="input-password"
              maxLength={100}
              name="password" 
              type="password"
              autoComplete="off"
              aria-invalid={
                Boolean(
                  actionData?.fieldErrors?.password
                )
              }
              aria-errormessage={
                actionData?.fieldErrors?.password ? "password-error" : undefined
              }
            />
            {actionData?.fieldErrors?.password ? (
              <p
                className="text-red-600"
                role="alert"
                id="password-error"
              >
                {actionData.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <div id="form-error-message">
            {actionData?.formError ? (
              <p
                className="form-validation-error"
                role="alert"
              >
                {actionData.formError}
              </p>
            ) : null}
          </div>
          <button 
            className="bg-slate-800 text-white px-4 py-2 mt-4"
            type="submit"
          >
            Submit
          </button>
        </fieldset>
      </Form>
    </div>
  );
};
