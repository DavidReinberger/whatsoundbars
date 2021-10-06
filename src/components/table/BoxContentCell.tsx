import React from 'react';
import { ListItem, UnOrderedList } from '../List';
import styled from 'styled-components';
import { BoxContents } from '../../types';
import {
  BsFillBookFill,
} from 'react-icons/bs';
import {
  MdOutlineSpeakerGroup,
  MdOutlineCable,
  MdOutlineSettingsInputHdmi,
  MdPower, MdOutlineSettingsRemote,
} from 'react-icons/md';
import {
  GiBrickWall,
  GiJackPlug,
} from 'react-icons/gi';
import { RiSpeaker2Line } from 'react-icons/ri';

const ContentIcon: React.FC<{ type: BoxContents }> = ({ type }) => {
  switch (type) {
    case BoxContents.RemoteControl:
      return <MdOutlineSettingsRemote />;
    case BoxContents.AudioAdapter:
      return <GiJackPlug />;
    case BoxContents.WallMount:
      return <GiBrickWall />;
    case BoxContents.Booklets:
      return <BsFillBookFill />;
    case BoxContents.Surrounds:
      return <MdOutlineSpeakerGroup />;
    case BoxContents.HDMICable:
      return <MdOutlineSettingsInputHdmi />;
    case BoxContents.Subwoofer:
      return <RiSpeaker2Line />;
    case BoxContents.PowerCable:
      return <MdPower />;
    case BoxContents.OpticalCable:
      return <MdOutlineCable />;
    default:
      return <div />;
  }
};

const BoxContentListItem = styled(ListItem)`
  &:before {
    display: none;
  }
`;

const BoxContentCell = ({ value }: { value: BoxContents[] }) => {
  return value?.length ? (
    <UnOrderedList>
      {
        value.map((content) => (
          <BoxContentListItem><ContentIcon type={content} />&nbsp;{content}</BoxContentListItem>
        ))
      }
    </UnOrderedList>
  ) : 'None';
};

export default BoxContentCell;
