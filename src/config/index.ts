const DEV_HOST = "https://run.mocky.io/v3";
const PROD_HOST = "https://run.mocky.io/v3";



// 请求连接前缀
export const baseUrl = process.env.NODE_ENV === 'production' ? PROD_HOST : DEV_HOST;

// 输出日志信息
export const noConsole = false;
