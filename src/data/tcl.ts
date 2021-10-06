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
import { HarmanKardon } from './harmanKardon';

export enum Tcl {
  Alto9P = 'Alto 9+',
  Alto8l = 'Alto 8l',
  Alto6P = 'Alto 6+',
  Alto6 = 'Alto 6',
  Alto3 = 'Alto 3',
}

const Alto9P: Soundbar = {
  name: Tcl.Alto9P,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.TCL,
  speakerSetup: SpeakerSetup.ThreeOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `249.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.Subwoofer,
    BoxContents.WallMount,
  ],
  inputs: [
    Connectivity.HDMI_EARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Google,
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DolbyAtmos,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

const Alto8l: Soundbar = {
  name: Tcl.Alto8l,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.TCL,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `149.99$`,
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
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.WiFi,
  ],
  streamingServicesSupport: [
    StreamingServices.AirPlay,
    StreamingServices.Chromecast,
  ],
  virtualAssistantSupport: [
    VirtualAssistants.Google,
    VirtualAssistants.Alexa,
  ],
  audioCodingSupport: [
    AudioCodings.DolbyDigital,
    AudioCodings.DolbyDigitalPlus,
    AudioCodings.DolbyTrueHD,
    AudioCodings.DolbyAtmos,
  ],
  controlledVia: [
    Controllers.iOS,
    Controllers.Android,
    Controllers.Touch,
    Controllers.RemoteControl,
  ],
  color: ['Black'],
};

const Alto6P: Soundbar = {
  name: Tcl.Alto6P,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.TCL,
  speakerSetup: SpeakerSetup.TwoOne,
  extendable: [],
  wirelessSubwoofer: true,
  MSRP: `99.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.WallMount,
    BoxContents.Subwoofer,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.AUX,
    Connectivity.USB,
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

const Alto6: Soundbar = {
  name: Tcl.Alto6,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.TCL,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  MSRP: `69.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.WallMount,
  ],
  inputs: [
    Connectivity.HDMI_ARC,
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.AUX,
    Connectivity.USB,
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

const Alto3: Soundbar = {
  name: Tcl.Alto3,
  dimensions: { height: 87, depth: 115.7, width: 1141.7 },
  modelYear: 2020,
  manufacturer: Manufacturers.TCL,
  speakerSetup: SpeakerSetup.TwoZero,
  extendable: [],
  MSRP: `49.99$`,
  wallMountable: true,
  boxContents: [
    BoxContents.RemoteControl,
    BoxContents.Booklets,
    BoxContents.HDMICable,
    BoxContents.OpticalCable,
    BoxContents.WallMount,
  ],
  inputs: [
    Connectivity.Optical,
    Connectivity.Bluetooth,
    Connectivity.AUX,
    Connectivity.USB,
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
