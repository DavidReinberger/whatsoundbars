export enum Manufacturers {
  SONOS = 'SONOS',
  LG = 'LG',
  Samsung = 'Samsung',
  Phillips = 'Phillips',
  JBL = 'JBL',
  YAMAHA = 'YAMAHA',
  BOSE = 'BOSE',
  BangAndOlufsen = 'Bang & Olufsen',
  Denon = 'Denon',
  Klipsch = 'Klipsch',
  PolkAudio = 'Polk Audio',
  HarmanKardon = 'Harman/Kardon',
  TCL = 'TCL',
  Sony = 'Sony'
}

export enum SpeakerSetup {
  TwoZero = '2.0',
  TwoOne = '2.1',
  ThreeZero = '3.0',
  ThreeZeroTwo = '3.0.2',
  ThreeOne = '3.1',
  ThreeOneTwo = '3.1.2',
  FourZero = '4.0',
  FourOne = '4.1',
  FourZeroFour = '4.0.4',
  FiveZero = '5.0',
  FiveZeroTwo = '5.0.2',
  FiveOne = '5.1',
  FiveOneTwo = '5.1.2',
  FiveOneFour = '5.1.4',
  SevenZero = '7.0',
  SevenOne = '7.1',
  SevenOneTwo = '7.1.2',
  SevenOneFour = '7.1.4',
  EightZero = '8.0',
  NineOne = '9.1',
  NineOneFour = '9.1.4',
  ElevenOneFour = '11.1.4',
  ThirteenZero = '13.0',
}

export enum Connectivity {
  HDMI = 'HDMI',
  HDMI_ARC = 'HDMI Arc',
  HDMI_EARC = 'HDMI eArc',
  Optical = 'Optical',
  RCA = 'RCA',
  LAN = 'LAN (RJ-45)',
  NFC = 'NFC',
  AUX = 'Aux',
  Bluetooth = 'Bluetooth',
  WiFi = 'WiFi',
  USB = 'USB',
}

export enum StreamingServices {
  AirPlay = 'AirPlay',
  Chromecast = 'Chromecast',
  Tidal = 'Tidal',
  Spotify = 'Spotify',
  AppleMusic = 'Apple Music',
  GooglePlayMusic = 'Google Play Music',
  DLNA = 'DLNA',
  YoutubePremium = 'Youtube Premium',
  FM = 'FM Radio',
  DAB = 'DAB Radio',
  SonosApp = 'Sonos App',
}

export enum VirtualAssistants {
  // Siri = 'Siri',
  Google = 'Google',
  Alexa = 'Alexa'
}

export enum AudioCodings {
  DolbyAtmos = 'Dolby Atmos',
  DolbyDigital = 'Dolby Digital',
  DolbyDigitalPlus = 'Dolby Digital Plus',
  DolbyDigitalEX = 'Dolby Digital EX',
  DolbyTrueHD = 'Dolby True HD',
  DolbySurround = 'Dolby Surround',
  DolbyProLogicIIx = 'Dolby Pro Logic IIx',
  DolbyProLogicII = 'Dolby Pro Logic II',
  DTSDigitalSurround = 'DTS Digital Surround',
  DTSX = 'DTS:X',
  DTSVirtualX = 'DTS Virtual X',
  DTSHDMasterAudio = 'DTS-HD Master Audio',
  DTS9624 = 'DTS 96/24',
  DTSES = 'DTS-ES',
  DTS = 'DTS',
  DTSPlayFi = 'DTS Play-Fi',
  IMAXEnhanced = 'IMAX Enhanced'
}

export enum Controllers {
  Touch = 'On Device',
  RemoteControl = 'Remote Control',
  iOS = 'iOS App',
  Android = 'Android App'
}

export enum ExpendabilityType {
  Speaker = 'Speaker',
  Surrounds = 'Surrounds',
  Subwoofer = 'Subwoofer',
  FullSetup = 'Full Setup Included'
}

export interface Expendability {
  name: string;
  link: string;
  type: ExpendabilityType;
}

export enum BoxContents {
  Booklets = 'Booklets',
  WallMount = 'Wall mount',
  RemoteControl = 'Remote control',
  PowerCable = 'Power Cable',
  HDMICable = 'HDMI Cable',
  AudioAdapter = 'Audio Adapter',
  Subwoofer = 'Subwoofer',
  Surrounds = 'Surround speakers',
  OpticalCable = 'Optical Cable',
}

export interface Soundbar {
  name: string,
  modelYear: number,
  manufacturer: Manufacturers,
  speakerSetup: SpeakerSetup,
  extendable: Expendability[],
  wirelessSurrounds?: boolean,
  wirelessSubwoofer?: boolean,
  dimensions: { width: number, height: number, depth: number },
  MSRP: `${number}$`,
  wallMountable?: boolean,
  boxContents: BoxContents[],
  inputs: Connectivity[],
  streamingServicesSupport: StreamingServices[],
  virtualAssistantSupport: VirtualAssistants[],
  audioCodingSupport: AudioCodings[],
  controlledVia: Controllers[],
  color: string[] | string,
  roomCorrection?: boolean | string,
  HDR?: boolean,
  passThrough?: boolean,
  dolbyVision?: boolean,
}
