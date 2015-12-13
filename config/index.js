const NODE_ENV = process.env.NODE_ENV || 'development';
global.__DEV__ = NODE_ENV === 'development';
global.__PROD__ = NODE_ENV === 'production';
