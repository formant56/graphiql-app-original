import { FormEventHandler } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';

const Login = () => {
  // TODO use React Hook form
  const router = useRouter();
  const isSignup = (router.query.signup ?? '0') === '1';
  const { user, login } = useAuthContext();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    login({ email: 'abc@gmail.com', password: 'secret_password' });
    router.push('/main');
    // Add Sign Up / Sign In Logic here
    return false;
  };
  return (
    <div className="flex justify-center relative h-full w-full overflow-y-auto m-10 pb:12 mx-auto">
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 ">
        <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>

        {isSignup && (
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm password" />
            </div>
            <TextInput id="password2" type="password" required />
          </div>
        )}
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
