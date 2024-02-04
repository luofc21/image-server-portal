// import { Base64 } from 'js-base64';
// import { systemId } from './env';
export interface DefaultSetting {
  systemIdEncode: string;
}

const defaultSetting = {
  // systemIdEncode: Base64.encode(`${systemId}:1`), // 1是随机取的，可以换成任何数
};

export default defaultSetting;
