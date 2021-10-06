import {
  AudioCodings,
  Connectivity,
  Controllers,
  Manufacturers,
  Soundbar,
  SpeakerSetup,
  StreamingServices,
  VirtualAssistants,
} from '../types';

export enum Yamaha {
  SRC20A = 'SR-C20A',
  SRB20A = 'SR-B20A',
  YAS109 = 'YAS-109',
  YAS209 = 'YAS-209',
  YAS108 = 'YAS-108',
  YSP2700 = 'YSP-2700',
  YSP5600 = 'YSP-5600'
}

const SRC20A: Soundbar = {
  name: Yamaha.SRC20A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  MSRP: `179.95$`,
  wallMountable: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyProLogicII,

  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const SRB20A: Soundbar = {
  name: Yamaha.SRB20A,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  MSRP: `179.95$`,
  wallMountable: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Optical,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DTSDigitalSurround,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Touch,
  ],
  color: ['Black'],
};

const YAS109: Soundbar = {
  name: Yamaha.YAS109,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  MSRP: `179.95$`,
  wallMountable: true,
  passThrough: true,
  HDR: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DTSDigitalSurround,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Android,
    Controllers.iOS,
    Controllers.Touch,
  ],
  color: ['Black'],
};

const YAS209: Soundbar = {
  name: Yamaha.YAS209,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.TwoOne,
  wirelessSubwoofer: true,
  extendable: [],
  MSRP: `299.95$`,
  wallMountable: true,
  passThrough: true,
  HDR: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DTSDigitalSurround,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Android,
    Controllers.iOS,
    Controllers.Touch,
  ],
  color: ['Black'],
};

const YAS108: Soundbar = {
  name: Yamaha.YAS108,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2018,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  MSRP: `299.95$`,
  wallMountable: true,
  passThrough: true,
  HDR: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DTSDigitalSurround,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Android,
    Controllers.iOS,
    Controllers.Touch,
  ],
  color: ['Black'],
};

const YSP2700: Soundbar = {
  name: Yamaha.YSP2700,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2016,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.SevenOne,
  extendable: [],
  MSRP: `1299.95$`,
  wallMountable: true,
  passThrough: true,
  HDR: true,
  dolbyVision: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
    StreamingServices.Tidal,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyTrueHD,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalEX,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DolbyProLogicIIx,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTS,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.iOS,
    Controllers.Android,
  ],
  color: ['Black'],
};

const YSP5600: Soundbar = {
  name: Yamaha.YSP5600,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2016,
  manufacturer: Manufacturers.YAMAHA,
  speakerSetup: SpeakerSetup.SevenOneTwo,
  extendable: [],
  MSRP: `1599.95$`,
  wallMountable: true,
  passThrough: true,
  HDR: true,
  dolbyVision: true,
  boxContents: [],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Spotify,
    StreamingServices.Tidal,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyTrueHD,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalEX,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DolbyProLogicIIx,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DTS,
    AudioCodings.DTSES,
    AudioCodings.DTS9624,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.iOS,
    Controllers.Android,
  ],
  color: ['Black'],
};

export default [
  SRC20A,
  SRB20A,
  YAS109,
  YAS209,
  YAS108,
  YSP2700,
  YSP5600,
];
