import defaultSetting from './defaultSetting';

import request from './request.config';

import * as envConfig from './env';

export default Object.assign({}, defaultSetting, request, envConfig);
