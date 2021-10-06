import { Soundbar } from '../types';
import parseMsrp from './parseMsrp';

const calculateConversionValueFromMSRP = (MSRP: Soundbar['MSRP'], commission: number = 0.04) => {
  const parsedMsrp = parseMsrp(MSRP);
  return parsedMsrp * commission;
}

export default calculateConversionValueFromMSRP
