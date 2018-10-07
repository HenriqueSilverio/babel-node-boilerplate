import 'dotenv/config'

const appName = process.env.APP_NAME
const appEnv  = process.env.APP_ENV

console.log(`${appName} is running in ${appEnv} environment. Happy coding!`)
