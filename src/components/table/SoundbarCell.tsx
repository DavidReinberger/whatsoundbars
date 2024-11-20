import { Soundbar } from '../../types';
import { Text } from 'grommet';
import AmazonLink from '../AmazonLink';
import { event } from '../../lib/gtag';
import calculateConversionValueFromMSRP from '../../lib/calculateConversionValueFromMSRP';

const SoundbarCell = ({ row: { original } }: { row: { original: Soundbar } }) => {
  const trackClick = () => event({ action: 'click_name', category: 'soundbar', value: calculateConversionValueFromMSRP(original.MSRP) });

  return (
    <AmazonLink
      href={`https://www.amazon.com/gp/search?ie=UTF8&linkCode=ur2&index=electronics&keywords=${encodeURIComponent([
        original.manufacturer,
        original.name,
      ].join(' '))}`}
      target="_blank"
      onClick={trackClick}
    >
      <Text color="dark-6">
        {original.manufacturer}
      </Text>
      <Text weight="bold">{original.name}</Text>
      <Text color="light-6">{original.modelYear}</Text>
    </AmazonLink>
  );
};

export default SoundbarCell;
