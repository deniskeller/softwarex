import { Landing } from '@layouts/index';
import { PayInvoice } from '@view/landing';

const PayInvoicePage = () => {
  return (
    <Landing footer={false}>
      <PayInvoice />
    </Landing>
  );
};

export default PayInvoicePage;
