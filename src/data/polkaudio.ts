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
import { Samsung } from './samsung';

export enum PolkAudio {
  MagniFiMax = 'MagniFi MAX',
  MagnifiMini = 'MagniFi Mini',
  Magnifi2 = 'MagniFi 2',
  SignaS2 = 'Signa S2',
  SignaS3 = 'Signa S3',
};

const SR1: Expendability = {
  name: 'SR1',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const MagniFiMax: Soundbar = {
  name: PolkAudio.MagniFiMax,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.PolkAudio,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [SR1],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `599.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
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
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTS,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const Magnifi2: Soundbar = {
  name: PolkAudio.Magnifi2,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.PolkAudio,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
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
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.LAN,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTS,
    AudioCodings.DolbySurround,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  HDR: true,
};

const MagnifiMini: Soundbar = {
  name: PolkAudio.MagnifiMini,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.PolkAudio,
  speakerSetup: SpeakerSetup.FiveOne,
  extendable: [],
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
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.Chromecast,
    StreamingServices.Spotify,
  ],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DTS,
    AudioCodings.DolbySurround,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

const SignaS2: Soundbar = {
  name: PolkAudio.SignaS2,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.PolkAudio,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
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
    AudioCodings.DTS,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

const SignaS3: Soundbar = {
  name: PolkAudio.SignaS3,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.PolkAudio,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
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
    AudioCodings.DTS,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};


export default [
  MagniFiMax,
  MagnifiMini,
  Magnifi2,
  SignaS2,
  SignaS3,
];
