import axios from 'axios'

// 将对象中值为空的过滤掉
function filterObject(obj) {
  if (obj && obj instanceof Object) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === '' || obj[key] === undefined || obj[key] === null) {
          delete obj[key]
        }
      }
    }
  }
}
// check是否是对象
function checkJSON(obj) {
  let ret = false
  if (obj && obj instanceof Object) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] instanceof Object || obj[key] instanceof Array) {
          ret = true
        }
      }
    }
  }
  return ret
}

const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 15000,
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
});
const applicationJSON = 'application/json;charset=utf-8';

instance.interceptors.request.use(
  config => {
    filterObject(config.params);
    filterObject(config.data);
    if (checkJSON(config.data) || config.type === 'json') {
      config.headers['Content-Type'] = applicationJSON
    }
    if (config.type === 'upload') {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }
    // if (!config.headers.Authorization) {
    //   config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    //     'Authorization'
    //   ) || ''}`;
    // }
    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  res => {
    if (res.data.code == -1) {
      Dialog.alert({
        title: '警告',
        message: '登录超时，请重新登录！'
      }).then(() => {
        global.login();
      }).catch(() => {
      });
      return Promise.reject(res);
    } else if (res.data.code != 0) {
      Dialog.alert({
        title: '警告',
        message: res.data.msg
      })
    }
    return res.data;
  },
  error => {
    Dialog.alert({
      title: '警告',
      message: error.message
    });
    return Promise.reject(error);
  }
);

const post = (url, params, config = {}) => {
  if (!url) {
    return;
  }
  if (!params) {
    params = {};
  }
  let access_token = localStorage.getItem('access_token');
  if (access_token) {
    params.access_token = access_token;
  }


  params.access_token = 'NYL2xzzpwMq6Sf-SyQMsoDPHz4cbg_UK'
  params._uniacid = siteInfo.uniacid;
  params._acid = siteInfo.acid;
  return new Promise(function (resolve, reject) {
    instance.post(url, params, config).then((response) => {
      resolve(response);
    });
  })
};

const put = (url, data, config = {}) => instance.put(url, data, config);

let get = (url, params, config = {}) => {
  if (!url) {
    return;
  }
  if (!params) {
    params = {};
  }
  let access_token = localStorage.getItem('access_token');
  if (access_token) {
    params.access_token = access_token;
  }
  params.access_token = 'wfbHSqJ4UwMeDD_0d8QgnstpyySEQ9G6'
  params._uniacid = siteInfo.uniacid;
  params._acid = siteInfo.acid;
  return new Promise(function (resolve, reject) {
    instance.get(url, {
      params,
      ...config
    }).then((response) => {
      resolve(response);
    });
  });
}

const deleteMethod = (url, config = {}) =>
  instance({
    url,
    method: 'delete',
    ...config
  });

export default {
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $reqGet: {
        value: get
      },
      $reqPost: {
        value: post
      },
      $reqPut: {
        value: put
      },
      $reqDel: {
        value: deleteMethod
      }
    });
  }
};
