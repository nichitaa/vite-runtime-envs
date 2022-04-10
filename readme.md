> Have a single build with possibility of switching between environment variables without actually rebuilding the entire app. Simple, cross-platform and configurable approach of using environment variables for a web application. 




### **Usage**

Environment variables are inside the [`.env-cmdrc.json`](./.env-cmdrc.json) file. Currently there are 3 environments (`dev`, `staging`, `demo`).
1. Define a `.env.public` file, with variables you want set on our environment
2. Add the variables from `.env.public` to [`.env-cmdrc.json`](./.env-cmdrc.json) under each environment
3. Build the application `npm run build`
4. Preview the build on different environments with `npm run start:staging`, `npm run start:demo`, etc. 

Optionally you can define environment variables inside a `.env` (e.g.: [`.env.test`](./.env.test) ) file (instead of [`.env-cmdrc.json`](./.env-cmdrc.json)) and then run the cli to read and apply the variables from that file (`import-meta-env -x .env.public -e .env.test`)



### **Under the hood**

1. Using `@import-meta-env/unplugin` that on build time (`npm run build`) will substitute all `import.meta.env` from our source code to a predefined placeholder
2. Then running `env-cmd -e demo` (where `demo` is a environment from [`.env-cmdrc.json`](./.env-cmdrc.json) ) will set up the environment variables for us
3. Then running `import-meta-env --x .env.public` will substitute the predefined placeholder from `build` with the actual environment variables



### **Note!**

Using `env-cmd -e mode` is completely optional, if the environment from where the build is being served has already exposed / defined the required environment variables (from `env.public`) then the build will be served with this variables.

