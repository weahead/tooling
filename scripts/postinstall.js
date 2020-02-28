const fs = require('fs');
const path = require('path');

const jsConfigPath = path.join(process.env.INIT_CWD, 'jsconfig.json');

const jsConfigOptions = {
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    resolveJsonModule: true,
  },
};

if (!fs.existsSync(jsConfigPath)) {
  fs.writeFileSync(jsConfigPath, JSON.stringify(jsConfigOptions, null, 2));
}
