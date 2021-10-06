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

export enum Sony {
  // 2021
  HTA9 = 'HT-A9',
  HTA7000 = 'HT-A7000',
  HTA5000 = 'HT-A5000',

  HTST5000 = 'HT-ST5000',
  HTZ9F = 'HT-Z9F',
  HTG700 = 'HT-G700',
  HTX9000F = 'HT-X9000F',
  HTMT3000 = 'HT-MT300',
  HTX8500 = 'HT-X8500',
  HTS40R = 'HT-S40R',
  HTS350 = 'HT-S350',
  HTS200F = 'HT-S200F',
  HTS100F = 'HT-S100F'
}

const SASW5: Expendability = {
  name: 'SASW5',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const SASW3: Expendability = {
  name: 'SASW3',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const SARS3S: Expendability = {
  name: 'SA-RS3S',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const SAZ9R: Expendability = {
  name: 'SA-Z9R',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const FullSetup: Expendability = {
  name: '',
  type: ExpendabilityType.FullSetup,
  link: '',
};

const HTA9: Soundbar = {
  name: Sony.HTA9,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.FourZeroFour,
  extendable: [
    SASW5,
    SASW3,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1799.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.LAN,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['White'],
  passThrough: true,
  HDR: true,
  roomCorrection: true,
};

const HTA7000: Soundbar = {
  name: Sony.HTA7000,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.SevenOneTwo,
  extendable: [
    SASW5,
    SASW3,
    SARS3S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1299.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.WiFi,
    Connectivity.LAN,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
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
  roomCorrection: true,
};


const HTST5000: Soundbar = {
  name: Sony.HTST5000,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2017,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.SevenOneTwo,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: false,
  MSRP: `1499.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.WiFi,
    Connectivity.LAN,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
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
  roomCorrection: true,
};

const HTA5000: Soundbar = {
  name: Sony.HTA5000,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.FiveOneTwo,
  extendable: [
    SASW5,
    SASW3,
    SARS3S,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `999.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.WiFi,
    Connectivity.LAN,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
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
  roomCorrection: true,
};

const HTZ9F: Soundbar = {
  name: Sony.HTZ9F,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [
    SAZ9R,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `899.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.WiFi,
    Connectivity.LAN,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
    StreamingServices.Spotify,
    StreamingServices.DLNA,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
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
  roomCorrection: false,
};

const HTG700: Soundbar = {
  name: Sony.HTG700,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: true,
  MSRP: `499.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
    AudioCodings.DTSDigitalSurround,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: false,
};

const HTX9000F: Soundbar = {
  name: Sony.HTX9000F,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: true,
  MSRP: `399.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
    AudioCodings.DTSDigitalSurround,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: false,
};

const HTMT3000: Soundbar = {
  name: Sony.HTMT3000,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2017,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: true,
  MSRP: `399.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['White', 'Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: false,
};

const HTX8500: Soundbar = {
  name: Sony.HTX8500,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: false,
  MSRP: `299.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
  roomCorrection: false,
};

const HTS40R: Soundbar = {
  name: Sony.HTS40R,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.FiveOne,
  extendable: [],
  wirelessSurrounds: true,
  wirelessSubwoofer: false,
  MSRP: `299.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.Subwoofer,
    BoxContents.Surrounds,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.AUX,
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
  passThrough: false,
  HDR: false,
  roomCorrection: false,
};

const HTS350: Soundbar = {
  name: Sony.HTS350,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.FiveOne,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: true,
  MSRP: `299.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
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
  passThrough: false,
  HDR: false,
  roomCorrection: false,
};


const HTS200F: Soundbar = {
  name: Sony.HTS200F,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: false,
  MSRP: `199.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
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
  passThrough: false,
  HDR: false,
  roomCorrection: false,
};

const HTS100F: Soundbar = {
  name: Sony.HTS100F,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.Sony,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  wirelessSurrounds: false,
  wirelessSubwoofer: false,
  MSRP: `99.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
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
  passThrough: false,
  HDR: false,
  roomCorrection: false,
};

export default [
  HTA9,
  HTA7000,
  HTA5000,
  HTST5000,
  HTZ9F,
  HTG700,
  HTX9000F,
  HTMT3000,
  HTX8500,
  HTS40R,
  HTS350,
  HTS200F,
  HTS100F,
];
