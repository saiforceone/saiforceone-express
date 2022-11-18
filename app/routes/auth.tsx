import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { validateEmail, validatePassword, validateUrl } from "~/utils/validations.server";

import { db } from "~/utils/db.server";
import { createUserSession, login } from "~/utils/session.server";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    emailAddress: string | undefined;
    password: string | undefined;
  },
  fields?: {
    emailAddress: string;
    password: string;
    loginType: string;
  }
}

const badRequest = (data: ActionData) => json(data, {status: 400});

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const emailAddress = form.get("emailAddress");
  const password = form.get("password");

  if (typeof emailAddress !== "string" || typeof password !== "string" || typeof loginType !== "string") {
    return badRequest({formError: `There was a problem with data submitted`});
  }

  const fields = { loginType, emailAddress, password };
  const fieldErrors = {
    emailAddress: validateEmail(emailAddress),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  console.log("login type: ", loginType);
  switch (loginType) {
    case "login": {
      const user = await login({ emailAddress, password });
      console.log('logged in user: ', user);
      if (!user) {
        return badRequest({
          fields,
          formError: `Invalid credentials`,
        });
      }

      return createUserSession(user.id, "/");
    }
    case "register": {
      const userExists = await db.user.findFirst({
        where: {emailAddress},
      });
      if (userExists) {
        return badRequest({
          fields,
          formError: 'Unable to register. Email already used',
        });
      }
      return badRequest({
        fields,
        formError: 'Unable to register right now',
      })
    }
    default: {
      return badRequest({
        fields,
        formError: 'Invalid authentication type'
      })
    }
  }
};

export default function Auth() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
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
                defaultChecked={
                  !actionData?.fields?.loginType || actionData?.fields?.loginType === "login"
                }
              />{" "}
              Login
            </label>
            <label>
              <input
                name="loginType"
                type="radio"
                value="register"
                defaultChecked={
                  actionData?.fields?.loginType === "register"
                }
              />{" "}
              Registration
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email-address">Email Address</label>
            <input
              className="border-2 border-slate-500"
              id="input-email-address"
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
          <button className="bg-slate-800 text-white px-4 py-2 mt-4" type="submit">
            Submit
          </button>
        </fieldset>
      </Form>
      <div>
        <p>Have an account? Register instead</p>
      </div>
    </div>
  );
};
