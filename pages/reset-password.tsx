import { Landing } from '@layouts/index';
import { ResetPassword } from '@view/landing';

const ResetPasswordPage = () => {
  return (
    <Landing footer={false}>
      <ResetPassword />
    </Landing>
  );
};

export default ResetPasswordPage;
