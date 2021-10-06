import {
  AudioCodings,
  BoxContents,
  Connectivity,
  Controllers,
  Manufacturers,
  Soundbar,
  SpeakerSetup,
  StreamingServices,
  VirtualAssistants,
} from '../types';

export enum BangAndOlufsen {
  BSS = 'Beosound stage'
}

const BeosoundStage: Soundbar = {
  name: BangAndOlufsen.BSS,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2021,
  manufacturer: Manufacturers.BangAndOlufsen,
  speakerSetup: SpeakerSetup.ThreeZero,
  extendable: [],
  wirelessSurrounds: true,
  wirelessSubwoofer: true,
  MSRP: `1649.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.WallMount,
    BoxContents.Booklets,
    BoxContents.HDMICable,
  ],
  inputs: [
    Connectivity.HDMI,
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
    Connectivity.AUX,
    Connectivity.LAN,
    Connectivity.LAN,
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
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
  ],
  color: ['Black', 'Smoked Oak', 'Bronze', 'Anthracite'],
  passThrough: true,
  HDR: true,
};

export default [BeosoundStage];
