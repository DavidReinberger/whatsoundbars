import { Soundbar } from '../../types';
import AmazonLink from '../AmazonLink';
import { event } from '../../lib/gtag';
import calculateConversionValueFromMSRP from '../../lib/calculateConversionValueFromMSRP';

const MSRP = ({ row: { original } }: { row: { original: Soundbar } }) => {
  const trackClick = () => event({ action: 'click_msrp', category: 'soundbar', value: calculateConversionValueFromMSRP(original.MSRP) });
  return (
    <AmazonLink
      href={`https://www.amazon.com/gp/search?ie=UTF8&tag=whatsoundba0c-20&linkCode=ur2&index=electronics&keywords=${encodeURIComponent([
        original.manufacturer,
        original.name,
      ].join(' '))}`}
      target="_blank"
      onClick={trackClick}
    >
      <span>{original.MSRP}</span>
    </AmazonLink>
  );
};

export default MSRP;
