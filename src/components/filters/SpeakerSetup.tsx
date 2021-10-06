import { Select } from 'grommet';
import { SpeakerSetup } from '../../types';

const speakerSetups = Object.values(SpeakerSetup);

const SpeakerSetupFilter: React.FC<{ onValueChange: (event: any) => void }> = ({ onValueChange }) => {
  return (
    <Select
      multiple
      closeOnChange={false}
      options={speakerSetups}
      onChange={onValueChange}
    />
  );
};

export default SpeakerSetupFilter;
