import { Button } from '../ui/button';

function CommonButton({ onClick, buttonText, type, disabled, className }) {
  return (
    <Button
      onClick={onClick || null}
      disabled={disabled || false}
      type={type || 'Submit'}
      className={
        className ||
        'flex justify-center items-center px-10 bg-black font-bold text-white border-none rounded hover:bg-white hover:text-black'
      }
    >
      {buttonText}
    </Button>
  );
}

export default CommonButton;
