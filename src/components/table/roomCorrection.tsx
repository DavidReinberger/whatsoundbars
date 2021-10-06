import { Soundbar } from '../../types';
import { Text } from 'grommet';

const RoomCorrectionCell = ({ row: { original } }: { row: { original: Soundbar } }) => {
  const isString = typeof original.roomCorrection === 'string';
  return (
    <Text title={isString ? original.roomCorrection as string : undefined}>
      {!!original.roomCorrection ? `Yes${isString ? '*' : ''}` : 'No'}
    </Text>
  );
};

export default RoomCorrectionCell;
