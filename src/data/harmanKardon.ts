import {
  AudioCodings,
  BoxContents,
  Connectivity,
  Controllers,
  Expendability,
  ExpendabilityType,
  Manufacturers,
  Soundbar,
  SpeakerSetup,
  StreamingServices,
  VirtualAssistants,
} from '../types';

export enum HarmanKardon {
  Enchant1300 = 'Enchant 1300',
  Enchant800 = 'Enchant 800',
  Citation = 'Citation Bar',
  SB26 = 'SB26',
  HKSB20 = 'HK SB20',
}

const EnchantSubwoofer: Expendability = {
  name: 'Enchant Subwoofer',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const CitationSurroundSpeakers: Expendability = {
  name: 'Citation Surround Speakers',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const CitationSubwoofer: Expendability = {
  name: 'Citation Subwoofer',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const CitationTower: Expendability = {
  name: 'Citation Tower',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const Enchant1300: Soundbar = {
  name: HarmanKardon.Enchant1300,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.HarmanKardon,
  speakerSetup: SpeakerSetup.ThirteenZero,
  extendable: [
    EnchantSubwoofer,
  ],
  wirelessSubwoofer: true,
  MSRP: `999.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: true,
};

const Enchant800: Soundbar = {
  name: HarmanKardon.Enchant800,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.HarmanKardon,
  speakerSetup: SpeakerSetup.EightZero,
  extendable: [
    EnchantSubwoofer,
  ],
  wirelessSubwoofer: true,
  MSRP: `699.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const SB26: Soundbar = {
  name: HarmanKardon.SB26,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.HarmanKardon,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `599.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const HKSB20: Soundbar = {
  name: HarmanKardon.HKSB20,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.HarmanKardon,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `499.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const Citation: Soundbar = {
  name: HarmanKardon.Citation,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.HarmanKardon,
  speakerSetup: SpeakerSetup.EightZero,
  extendable: [
    CitationSubwoofer,
    CitationSurroundSpeakers,
    CitationTower,
  ],
  wirelessSubwoofer: true,
  wirelessSurrounds: true,
  MSRP: `699.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTSDigitalSurround,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black', 'Silver'],
  passThrough: true,
  HDR: true,
};

export default [
  Enchant1300,
  Enchant800,
  Citation,
  SB26,
  HKSB20,
];
