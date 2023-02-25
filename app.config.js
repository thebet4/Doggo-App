import ProductionEnvironment from "./environments/app.production.json";
import StagingEnvironment from "./environments/app.staging.json";

const isProduction = process.env.APP_ENV === "production";

const expoConfig = isProduction
  ? ProductionEnvironment.expo
  : StagingEnvironment.expo;

export default {
  name: "doggo",
  slug: "doggo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.vbtech.doggo",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.vbtech.doggo",
  },
  web: expoConfig.web,
};
