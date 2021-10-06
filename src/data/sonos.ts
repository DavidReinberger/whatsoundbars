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

export enum Sonos {
  Arc = 'Arc',
  Beam = 'Beam',
  BeamGen2 = 'Beam Gen. 2'
}

const One: Expendability = {
  name: 'One',
  type: ExpendabilityType.Speaker,
  link: '',
};


const OneSL: Expendability = {
  name: 'One SL',
  type: ExpendabilityType.Speaker,
  link: '',
};

const Five: Expendability = {
  name: 'Five',
  type: ExpendabilityType.Speaker,
  link: '',
};

const Sub: Expendability = {
  name: 'Sub',
  type: ExpendabilityType.Subwoofer,
  link: '',
};

const SymfoniskBookshelf: Expendability = {
  name: 'IKEA Symfonisk Bookshelf Speaker',
  type: ExpendabilityType.Speaker,
  link: '',
};

const SymfoniskLamp: Expendability = {
  name: 'IKEA Symfonisk Lamp Speaker',
  type: ExpendabilityType.Speaker,
  link: '',
};

const SymfoniskLampGen2: Expendability = {
  name: 'IKEA Symfonisk Lamp Speaker (Gen 2)',
  type: ExpendabilityType.Speaker,
  link: '',
};

const SymfoniskPicture: Expendability = {
  name: 'IKEA Symfonisk Picture Speaker',
  type: ExpendabilityType.Speaker,
  link: '',
};

const arc: Soundbar = {
  name: Sonos.Arc,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.SONOS,
  speakerSetup: SpeakerSetup.FiveZeroTwo,
  extendable: [
    One,
    OneSL,
    Sub,
    SymfoniskBookshelf,
    SymfoniskLamp,
    SymfoniskLampGen2,
    SymfoniskPicture,
    Five,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `999.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.AudioAdapter,
    BoxContents.PowerCable,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.LAN,
    Connectivity.Optical,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.AppleMusic,
    StreamingServices.GooglePlayMusic,
    StreamingServices.Spotify,
    StreamingServices.Tidal,
    StreamingServices.SonosApp,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DolbyDigital,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black', 'White'],
  roomCorrection: true,
};

const beam: Soundbar = {
  name: Sonos.Beam,
  roomCorrection: true,
  dimensions: { height: 69, depth: 100, width: 651 },
  modelYear: 2018,
  manufacturer: Manufacturers.SONOS,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    One,
    OneSL,
    Sub,
    SymfoniskBookshelf,
    SymfoniskLamp,
    SymfoniskLampGen2,
    SymfoniskPicture,
    Five,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `399.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.AudioAdapter,
    BoxContents.PowerCable,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.LAN,
    Connectivity.Optical,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.AppleMusic,
    StreamingServices.GooglePlayMusic,
    StreamingServices.Spotify,
    StreamingServices.Tidal,
    StreamingServices.SonosApp,
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
  ],
  color: ['Black', 'White'],
};

const beam2: Soundbar = {
  name: Sonos.BeamGen2,
  roomCorrection: true,
  dimensions: { height: 69, depth: 100, width: 651 },
  modelYear: 2021,
  manufacturer: Manufacturers.SONOS,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [
    One,
    OneSL,
    Sub,
    SymfoniskBookshelf,
    SymfoniskLamp,
    SymfoniskLampGen2,
    SymfoniskPicture,
    Five,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `499.00$`,
  wallMountable: true,
  boxContents: [
    BoxContents.AudioAdapter,
    BoxContents.PowerCable,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.LAN,
    Connectivity.Optical,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.AppleMusic,
    StreamingServices.GooglePlayMusic,
    StreamingServices.Spotify,
    StreamingServices.Tidal,
    StreamingServices.SonosApp,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
    VirtualAssistants.Google,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyTrueHD,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black', 'White'],
};

export default [arc, beam, beam2];
