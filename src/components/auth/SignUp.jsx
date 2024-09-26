import { signUpFormControls } from '@/config/config';
import CommonForm from '../common-form/CommonForm';
import { useForm } from 'react-hook-form';

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: '',
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
        formControls={signUpFormControls}
        btnText={'Sign Up'}
      />
    </div>
  );
}

export default SignUp;
