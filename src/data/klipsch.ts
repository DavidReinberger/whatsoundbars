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

export enum Klipsch {
  CINEMA1200 = 'Cinema 1200 Soundbar',
  CINEMA800 = 'Cinema 800 Soundbar',
  CINEMA600 = 'Cinema 600 Soundbar',
  CINEMA400 = 'Cinema 400 Soundbar',
  BAR48 = 'BAR 48 Soundbar and wireless subwoofer',
  R4BII = 'R-4B II Soundbar and wireless subwoofer',
}

const S3P: Expendability = {
  name: 'Surround 3 Speakers',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const FullSetup: Expendability = {
  name: '',
  type: ExpendabilityType.FullSetup,
  link: '',
};

const CINEMA1200: Soundbar = {
  name: Klipsch.CINEMA1200,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Klipsch,
  speakerSetup: SpeakerSetup.FiveOneFour,
  extendable: [
    FullSetup,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1899.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Surrounds,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSDigitalSurround,
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

const CINEMA800: Soundbar = {
  name: Klipsch.CINEMA800,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Klipsch,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [
    S3P,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `969.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSDigitalSurround,
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

const CINEMA600: Soundbar = {
  name: Klipsch.CINEMA600,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Klipsch,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [
    S3P,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `549.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
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
};

const CINEMA400: Soundbar = {
  name: Klipsch.CINEMA400,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Klipsch,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `329.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
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
};

const BAR48: Soundbar = {
  name: Klipsch.BAR48,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Klipsch,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    S3P,
  ],
  wirelessSubwoofer: true,
  MSRP: `604.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DTS,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};


const R4BII: Soundbar = {
  name: Klipsch.R4BII,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2015,
  manufacturer: Manufacturers.Klipsch,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    S3P,
  ],
  wirelessSubwoofer: true,
  MSRP: `199.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

export default [
  CINEMA1200,
  CINEMA800,
  CINEMA600,
  CINEMA400,
  BAR48,
  R4BII,
];
