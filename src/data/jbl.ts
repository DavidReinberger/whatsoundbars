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

export enum JBL {
  BAR51 = 'BAR 5.1',
  BAR20 = 'BAR 2.0 All In One',
  BAR21DB = 'BAR 2.1 Deep Bass',
  BAR51S = 'BAR 5.1 Surround',
  BAR91TWS = 'BAR 9.1 True Wireless Surround',
  BAR50MB = 'BAR 5.0 MultiBeam',
}

const FullSetup: Expendability = {
  name: '',
  type: ExpendabilityType.FullSetup,
  link: '',
};

const BAR51: Soundbar = {
  name: JBL.BAR51,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.JBL,
  speakerSetup: SpeakerSetup.FiveOneTwo,
  extendable: [
    FullSetup,
  ],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `699.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
    BoxContents.Surrounds,
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
    Connectivity.AUX,
    Connectivity.Bluetooth,
  ],
  streamingServicesSupport: [],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyProLogicII,
    AudioCodings.DTS,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
};

const BAR20: Soundbar = {
  name: JBL.BAR20,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.JBL,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `199.95$`,
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

const BAR21DB: Soundbar = {
  name: JBL.BAR21DB,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.JBL,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `349.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.Subwoofer,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
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
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
};

const BAR50MB: Soundbar = {
  name: JBL.BAR50MB,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.JBL,
  speakerSetup: SpeakerSetup.FiveZero,
  extendable: [],
  MSRP: `399.95$`,
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
    Connectivity.HDMI,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.USB,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyAtmos,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
  dolbyVision: true,
  roomCorrection: true,
};

const BAR51S: Soundbar = {
  name: JBL.BAR51S,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.JBL,
  speakerSetup: SpeakerSetup.FiveOne,
  extendable: [],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `599.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.Subwoofer,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.HDMI,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.USB,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
  ],
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
};

const BAR91TWS: Soundbar = {
  name: JBL.BAR91TWS,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.JBL,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1199.95$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.Subwoofer,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.HDMI,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.USB,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyAtmos,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DTSX,
  ],
  controlledVia: [
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
  passThrough: true,
};

export default [
  BAR51,
  BAR20,
  BAR21DB,
  BAR51S,
  BAR91TWS,
  BAR50MB,
];
