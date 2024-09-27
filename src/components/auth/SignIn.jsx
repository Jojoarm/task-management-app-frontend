import { useForm } from 'react-hook-form';
import CommonForm from '../common-form/CommonForm';
import { signInFormControls } from '@/config/config';
import { callLoginUserApi } from '@/services';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  async function handleSubmit(getData) {
    const data = await callLoginUserApi(getData);
    if (data?.success) {
      navigate('/tasks/list');
    }
  }

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
