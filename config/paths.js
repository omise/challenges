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
  appIndexHtmlTemplate  : resolveApp('public/index.ejs'),
  appImagesDir          : resolveApp('public/images'),
};
