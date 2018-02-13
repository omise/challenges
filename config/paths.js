import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  appSrc                : resolveApp('src'),
  appIndexJS            : resolveApp('src/index.js'),
  appBuild              : resolveApp('build/js'),
  appPublic             : resolveApp('public'),
  appComponents         : resolveApp('src/components'),
  appStatic             : resolveApp('src/components/static'),
  appIndexHtmlTemplate  : resolveApp('public/index.ejs'),
  appImagesDir          : resolveApp('public/images'),
  appFontsDir           : resolveApp('public/fonts'),
  appUtils              : resolveApp('utils'),
  appReducers           : resolveApp('src/reducers'),
  appActions            : resolveApp('src/reducers/actions'),
  appConfig             : resolveApp('config')
};
