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

export enum Samsung {
  // 2021
  Q950A = 'Q950A',
  Q900A = 'Q900A',
  Q800A = 'Q800A',
  Q700A = 'Q700A',
  Q600A = 'Q600A',
  S60A = 'S60A',
  S50A = 'S50A',
  A650 = 'A650',
  A550 = 'A550',
  A450 = 'A450',

  // 2020
  Q950T = 'Q950T',
  Q900T = 'Q900T',
  Q800T = 'Q800T',
  Q70T = 'Q70T',
  Q60T = 'Q60T',
  S60T = 'S60T',
  S40T = 'S40T',
  T650 = 'T650',
  T550 = 'T550',
  T450 = 'T450',
}

const SWA9000S: Expendability = {
  name: 'SWA-9000S',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const SWA9100S: Expendability = {
  name: 'SWA-9100S',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const SWA9500S: Expendability = {
  name: 'SWA-9500S',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const SWA8500S: Expendability = {
  name: 'SWA-8500S',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const SWAW500: Expendability = {
  name: 'SWA-W500 Subwoofer',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const FullSetup: Expendability = {
  name: '',
  type: ExpendabilityType.FullSetup,
  link: '',
};

const Q950A: Soundbar = {
  name: Samsung.Q950A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ElevenOneFour,
  extendable: [
    FullSetup,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1649.99$`,
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
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
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
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: 'Only with Samsung Q-Series TVs',
};

const Q900A: Soundbar = {
  name: Samsung.Q900A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.SevenOneTwo,
  extendable: [
    SWA9500S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1399.98$`,
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
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: 'Only with Samsung Q-Series TVs',
};

const Q800A: Soundbar = {
  name: Samsung.Q800A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeOneTwo,
  extendable: [
    SWA9500S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `799.99$`,
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
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: 'Only with Samsung Q-Series TVs',
};

const Q700A: Soundbar = {
  name: Samsung.Q700A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeOneTwo,
  extendable: [
    SWA9500S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `799.99$`,
  wallMountable: true,
  roomCorrection: 'Only with Samsung Q-Series TVs',
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const Q600A: Soundbar = {
  name: Samsung.Q600A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeOneTwo,
  extendable: [
    SWA9100S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  roomCorrection: false,
  MSRP: `569.98$`,
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
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const S60A: Soundbar = {
  name: Samsung.S60A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.FiveZero,
  extendable: [
    SWA9100S,
    SWAW500,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `699.97$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.iOS,
    Controllers.Android,
  ],
  color: ['Black'],
};

const S50A: Soundbar = {
  name: Samsung.S50A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    SWA9100S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: false,
  MSRP: `619.97$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const A650: Soundbar = {
  name: Samsung.A650,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.FiveOne,
  extendable: [
    SWA9100S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `449.98$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const A550: Soundbar = {
  name: Samsung.A550,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    SWA9100S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `229.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const A450: Soundbar = {
  name: Samsung.A450,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    SWA9100S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `229.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const Q950T: Soundbar = {
  name: Samsung.Q950T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.NineOneFour,
  extendable: [
    FullSetup,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1799.99$`,
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
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
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
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const Q900T: Soundbar = {
  name: Samsung.Q900T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.SevenOneTwo,
  extendable: [
    SWA9100S,
    SWA9000S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1299.99$`,
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
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
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
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const Q800T: Soundbar = {
  name: Samsung.Q800T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeOneTwo,
  extendable: [
    SWA9100S,
    SWA9000S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `899.99$`,
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
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DTSX,
    AudioCodings.DTSDigitalSurround,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  roomCorrection: false,
  passThrough: true,
  HDR: true,
};

const Q70T: Soundbar = {
  name: Samsung.Q70T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeOneTwo,
  extendable: [
    SWA9100S,
    SWA9000S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `699.99$`,
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
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DTSX,
    AudioCodings.DTSDigitalSurround,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  roomCorrection: false,
  passThrough: true,
  HDR: true,
};

const Q60T: Soundbar = {
  name: Samsung.Q60T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.FiveOne,
  extendable: [SWA8500S],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `349.99$`,
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
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DTSVirtualX,
    AudioCodings.DTSDigitalSurround,
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const S60T: Soundbar = {
  name: Samsung.S60T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.FourZero,
  extendable: [
    SWA8500S,
    SWA9000S,
    SWAW500,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `329.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const S40T: Soundbar = {
  name: Samsung.S40T,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: false,
  MSRP: `179.99$`,
  wallMountable: false,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.Optical,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const T650: Soundbar = {
  name: Samsung.T650,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [
    SWA8500S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `329.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.Subwoofer,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTSDigitalSurround,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const T550: Soundbar = {
  name: Samsung.T550,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    SWA8500S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `279.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.Subwoofer,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const T450: Soundbar = {
  name: Samsung.T450,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Samsung,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    SWA8500S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `279.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.OpticalCable,
    BoxContents.Subwoofer,
  ],
  inputs: [
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

export default [
  Q950A,
  Q900A,
  Q800A,
  Q700A,
  Q600A,
  S60A,
  S50A,
  A650,
  A550,
  A450,
  Q950T,
  Q900T,
  Q800T,
  Q70T,
  Q60T,
  S60T,
  S40T,
  T650,
  T550,
  T450,
];
