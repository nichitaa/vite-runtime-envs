> Have a single build with possibility of switching between environment variables without actually rebuilding the entire app. Simple, cross-platform and configurable approach of using environment variables for a web application. 




### **Usage**

Environment variables are inside the [`.env-cmdrc.json`](./.env-cmdrc.json) file. Currently there are 3 environments ([`dev`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/.env-cmdrc.json#L2), [`staging`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/.env-cmdrc.json#L7), [`demo`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/.env-cmdrc.json#L12)).
1. Define a [`.env.public`](./.env.public) file, with variables you want set on our environment
2. Add the variables from [`.env.public`](./.env.public) to [`.env-cmdrc.json`](./.env-cmdrc.json) under each environment
3. Build the application [`npm run build`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L7)
4. Preview the build on different environments just with different running commands (e.g.: [`npm run start:staging`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L8), [`npm run start:demo`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L9))

Optionally you can define environment variables inside a `.env` (e.g.: [`.env.test`](./.env.test) ) file (instead of [`.env-cmdrc.json`](./.env-cmdrc.json)) and then run the cli to read and apply the variables from that file ([`import-meta-env -x .env.public -e .env.test`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L10))



### **Under the hood**

1. Using [`@import-meta-env/unplugin`](https://github.com/iendeavor/import-meta-env/tree/main/packages/unplugin) that on build time ([`npm run build`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L7)) will substitute all [`import.meta.env`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/src/main.jsx#L4) from our source code to a predefined placeholder
2. Then running [`env-cmd -e demo`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L9) (where [`demo`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/.env-cmdrc.json#L12) is a environment from [`.env-cmdrc.json`](./.env-cmdrc.json) ) will set up the environment variables for us
3. Then running [`import-meta-env --x .env.public`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L11) will substitute the predefined placeholder from `build` with the actual environment variables



### **Note!**

Using [`env-cmd -e mode`](https://github.com/nichitaa/vite-runtime-envs/blob/a20f1d1ffc6bad76a7b4ef473a3e9da78c2bcd81/package.json#L6) is completely optional, if the environment from where the build is being served has already exposed / defined the required environment variables (from [`.env.public`](./.env.public)) then the build will be served with this variables.

