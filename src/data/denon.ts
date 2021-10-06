import {
  AudioCodings,
  BoxContents,
  Connectivity,
  Controllers,
  Expendability,
  ExpendabilityType,
  Manufacturers, Soundbar,
  SpeakerSetup,
  StreamingServices,
  VirtualAssistants,
} from '../types';

export enum Denon {
  DHTS716H = 'DHT-S716H',
  DHTS516H = 'DHT-S715H',
  DHSB550 = 'Home Soundbar 550',
  DHTS316 = 'DHT-S316',
  DHTS216 = 'DHT-S216',
}

const DSW1H: Expendability = {
  name: 'DSW-1H',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const DH350: Expendability = {
  name: 'Denon Home 350',
  type: ExpendabilityType.Speaker,
  link: '',
};

const DH250: Expendability = {
  name: 'Denon Home 250',
  type: ExpendabilityType.Speaker,
  link: '',
};

const DH150: Expendability = {
  name: 'Denon Home 150',
  type: ExpendabilityType.Speaker,
  link: '',
};

const DHTS716H: Soundbar = {
  name: Denon.DHTS716H,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Denon,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    DSW1H,
    DH350,
    DH250,
    DH150,
  ],
  wirelessSubwoofer: true,
  wirelessSurrounds: true,
  MSRP: `899.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.LAN,
    Connectivity.USB,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DTS,
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
  dolbyVision: true,
};

const DHTS516H: Soundbar = {
  name: Denon.DHTS516H,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Denon,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [
    DH350,
    DH250,
    DH150,
  ],
  wirelessSubwoofer: true,
  wirelessSurrounds: true,
  MSRP: `299.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.AUX,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
    StreamingServices.AirPlay,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSHDMasterAudio,
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DTS,
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
  dolbyVision: true,
};


const DHTS316: Soundbar = {
  name: Denon.DHTS316,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Denon,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `799.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
    StreamingServices.AirPlay,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTS,
    AudioCodings.DTSDigitalSurround,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};


const DHTS216: Soundbar = {
  name: Denon.DHTS216,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Denon,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [DSW1H],
  wirelessSubwoofer: true,
  MSRP: `249.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
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
    AudioCodings.DTS,
    AudioCodings.DTSVirtualX,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

const DHSB550: Soundbar = {
  name: Denon.DHSB550,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2019,
  manufacturer: Manufacturers.Denon,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    DSW1H,
    DH350,
    DH250,
    DH150,
  ],
  wirelessSubwoofer: true,
  wirelessSurrounds: true,
  MSRP: `249.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.WallMount,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.AUX,
    Connectivity.Bluetooth,
    Connectivity.LAN,
  ],
  streamingServicesSupport: [
    StreamingServices.Spotify,
    StreamingServices.AirPlay,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyAtmos,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

export default [
  DHTS716H,
  DHTS516H,
  DHSB550,
  DHTS316,
  DHTS216,
];
