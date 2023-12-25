import { Landing } from '@layouts/index';
import { BankDetails } from '@view/landing';

const BankDetailsPage = () => {
  return (
    <Landing footer={false}>
      <BankDetails />
    </Landing>
  );
};

export default BankDetailsPage;
