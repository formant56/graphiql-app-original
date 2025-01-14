import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/ui/InputField';
import { DangerAlert } from '@/components/ui/alert';

import {
  signInDataSchema,
  SignInDataType,
  useYupValidationResolver,
} from './Schema';
import { GoogleAuthButton } from './components';

export const SignInForm = (props: {
  onSubmit: (data: SignInDataType) => void;
  error?: string;
}) => {
  const resolver = useYupValidationResolver(signInDataSchema);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInDataType>({
    resolver,
    mode: 'onBlur',
  });

  return (
    <div className="text-left w-full flex flex-col p-1">
      <form
        data-testid="login-signin-form"
        onSubmit={handleSubmit(props.onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <h2 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
          Sign In
        </h2>
        <InputField
          label="Your e-mail"
          id="email"
          data-testid="login-email"
          type="email"
          placeholder="jane.doe@example.com"
          {...register('email')}
          error={errors.email?.message}
        />
        <InputField
          label="Your password"
          data-testid="login-password"
          id="password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        <Button
          variant="outline"
          disabled={!isValid || isSubmitting}
          data-testid="login-submit-btn"
          type="submit"
        >
          Submit
        </Button>
      </form>

      {props.error && (
        <DangerAlert className="mt-3" data-testid="login-error">
          <span className="font-medium">Auth Error!</span> {props.error}
        </DangerAlert>
      )}
      <GoogleAuthButton className="mt-3" />
      <p className="mt-4 dark:text-white">
        Don&apos;have an account?{' '}
        <Link href="/signup">
          <span className="text-blue-600 hover:underline">Sign up</span>
        </Link>
      </p>
    </div>
  );
};
