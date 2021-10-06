import { Expendability, ExpendabilityType } from '../../types';
import React from 'react';
import { MdOutlineSpeakerGroup } from 'react-icons/md';
import { CgMusicSpeaker } from 'react-icons/cg';
import { RiSpeaker2Line } from 'react-icons/ri';
import ListCell from './ListCell';

const TypeIcon: React.FC<{ itemValue: Expendability }> = ({ itemValue }) => {
  switch (itemValue.type) {
    case ExpendabilityType.Surrounds:
      return <MdOutlineSpeakerGroup />;
    case ExpendabilityType.Subwoofer:
      return <RiSpeaker2Line />;
    case ExpendabilityType.Speaker:
      return <CgMusicSpeaker />;
    case ExpendabilityType.FullSetup:
      return <span>No (Full Setup included)</span>;
  }
};

const RenderExtendableContent: React.FC<{ contentValue: Expendability }> = ({ contentValue }) => (
  <span>{contentValue.name}</span>);

// @ts-ignore
const ExtendableThingsCell: React.FC<{ value: Expendability[] }> = ({ value }) => (
  <ListCell
    value={value}
    PreContent={TypeIcon}
    Content={RenderExtendableContent}
  />
);

export default ExtendableThingsCell;
