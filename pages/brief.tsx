import { Landing } from '@layouts/index';
import { Brief } from '@view/landing';

const BriefPage = () => {
  return (
    <Landing theme="light" footer={false}>
      <Brief />
    </Landing>
  );
};

export default BriefPage;
