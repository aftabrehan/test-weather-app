import { AppProps } from "next/app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import "../src/styles/styles.css";

// Add the required icons to the library
library.add(faHome, faUser, faSun, faCloud, faCloudRain, faSnowflake);

// Configure Font Awesome to use the proper CSS class names
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
