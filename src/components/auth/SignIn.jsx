import { useForm } from 'react-hook-form';
import CommonForm from '../common-form/CommonForm';
import { signInFormControls } from '@/config/config';

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleSubmit() {}

  return (
    <div>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signInFormControls}
        btnText={'Log In'}
      />
    </div>
  );
}

export default SignIn;
