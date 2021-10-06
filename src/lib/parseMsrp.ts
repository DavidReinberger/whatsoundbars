import { Soundbar } from '../types';

const parseMsrp = (MSRP: Soundbar['MSRP']) => {
  const msrp = MSRP.substr(0, MSRP.length - 1);
  return MSRP.includes('.') ? parseFloat(msrp) : parseInt(msrp, 10);
};

export default parseMsrp;
