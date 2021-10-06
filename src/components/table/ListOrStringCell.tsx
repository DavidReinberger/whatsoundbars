import ListCell from './ListCell';

const ListOrStringCell = ({ value }: { value: string | [] }) => {
  return typeof value === 'string' ? value : ListCell({ value });
};

export default ListOrStringCell;
