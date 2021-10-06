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

export enum Bose {
  SS900 = 'Smart Soundbar 900',
  SS700 = 'Smart Soundbar 700',
  SS300 = 'Smart Soundbar 300',
  TVS = 'TV Speaker'
}

const BM700: Expendability = {
  name: 'Bass Module 700',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const BM500: Expendability = {
  name: 'Bass Module 500',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const SurroundSpeakers700: Expendability = {
  name: 'Surround Speakers 700',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const WSurroundSpeakers: Expendability = {
  name: 'Wired Surround Speakers',
  type: ExpendabilityType.Surrounds,
  link: '',
};

const SS900: Soundbar = {
  name: Bose.SS900,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.BOSE,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    BM700,
    SurroundSpeakers700,
    WSurroundSpeakers,
    BM500,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `899.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.LAN,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
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
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black', 'White'],
  roomCorrection: true,
};

const SS700: Soundbar = {
  name: Bose.SS700,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.BOSE,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    BM700,
    BM500,
    SurroundSpeakers700,
    WSurroundSpeakers,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `799.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.LAN,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
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
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black', 'White'],
  roomCorrection: true,
};

const SS300: Soundbar = {
  name: Bose.SS300,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.BOSE,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    BM700,
    BM500,
    SurroundSpeakers700,
    WSurroundSpeakers,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `799.00$`,
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
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
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
};

const TVS: Soundbar = {
  name: Bose.TVS,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.BOSE,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [
    BM700,
    BM500,
    SurroundSpeakers700,
    WSurroundSpeakers,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `799.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.OpticalCable,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
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
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

export default [
  SS900,
  SS700,
  SS300,
  TVS,
];
