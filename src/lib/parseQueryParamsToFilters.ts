import { parseInt } from 'lodash';

export enum ParamKeys {
  MSRP = 'MSRP',
  SpeakerSetup = 'speakerSetup',
  ModelYear = 'modelYear'
}

const parseQueryParamsToFilters = (key: string, value: any) => {
  switch (key) {
    case ParamKeys.MSRP:
    case ParamKeys.ModelYear:
      return value.split('|').map((val: string) => parseInt(val, 10));
    case ParamKeys.SpeakerSetup:
      return value.split('|');
    default:
      return value.match(/\d+/g)
        ? value.includes('.') ? parseFloat(value) : parseInt(value, 10)
        : value.includes('|') ? value.split('|') : value.match(/(true|false)/gi) ? value === 'true' : value;
  }
};

export default parseQueryParamsToFilters;
