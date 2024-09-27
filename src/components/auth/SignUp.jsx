import { signUpFormControls } from '@/config/config';
import CommonForm from '../common-form/CommonForm';
import { useForm } from 'react-hook-form';
import { callCreateUserApi } from '@/services';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  async function handleSubmit(getData) {
    const data = await callCreateUserApi(getData);

    // console.log('data', data);
    if (data?.success) {
      toast({
        title: data.message,
        description: 'Welcome',
      });
      navigate('/tasks/list');
    } else {
      toast({
        title: 'failed',
        description: 'Failed to create user',
      });
    }
  }

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
