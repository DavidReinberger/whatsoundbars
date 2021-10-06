import React from 'react';
import { ListItem, UnOrderedList } from '../List';

const ListCell: React.FC<{
  value: any[],
  PreContent?: React.FC<{ itemValue: any }>,
  Content?: React.FC<{ contentValue: any }>
}> = ({ value, PreContent, Content }) => {
  return value?.length ? (
    <UnOrderedList>
      {
        value.map((content) => (
          <ListItem>
            {PreContent && (<PreContent itemValue={content} />)}
            {Content ? <Content contentValue={content} /> : content}
          </ListItem>
        ))
      }
    </UnOrderedList>
  ) : <span>None</span>;
};

export default ListCell;
