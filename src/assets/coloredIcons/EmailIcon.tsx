import {Svg, Path, ClipPath, Rect, G, Defs} from 'react-native-svg';
import {ColoredIconProps} from 'types';

const EmailIcon = ({width, height, style}: ColoredIconProps) => {
  if (!height) height = width * 1.04;
  return (
    <Svg width="63" height="65" viewBox="0 0 63 65" fill="none" style={style}>
      <G clipPath="url(#clip0_2837_33900)">
        <Path
          d="M0.377502 24.1399L61.2197 23.5684L63 64.9996L0 64.5441L0.377502 24.1399Z"
          fill="#ADFE37"
        />
        <Path
          d="M0.37793 24.1405L29.1196 0.743589C29.7097 0.262 30.4476 -0.000976563 31.2087 -0.000976562C31.9699 -0.000976563 32.7078 0.262 33.2979 0.743589L61.2159 23.5647"
          fill="#ADFE37"
        />
        <G opacity="0.3">
          <Path
            d="M0.37793 24.1405L29.1196 0.743589C29.7097 0.262 30.4476 -0.000976563 31.2087 -0.000976562C31.9699 -0.000976563 32.7078 0.262 33.2979 0.743589L61.2159 23.5647"
            fill="black"
          />
        </G>
        <Path
          d="M-6.91064e-05 64.5443C-0.0772855 64.4755 4.78306 59.1387 10.8531 52.6288C16.9232 46.1189 21.9079 40.8938 22.0066 40.9626C22.1053 41.0313 17.202 46.3724 11.1277 52.8866C5.05332 59.4008 0.0771473 64.6173 -6.91064e-05 64.5443Z"
          fill="#263238"
        />
        <Path
          d="M62.9999 64.9997C62.9227 65.0685 58.1696 59.8434 52.3826 53.3679C46.5957 46.8924 41.967 41.547 42.0399 41.4782C42.1128 41.4095 46.8702 46.6346 52.6615 53.1144C58.4527 59.5942 63.0599 64.931 62.9999 64.9997Z"
          fill="#263238"
        />
        <G opacity="0.5">
          <Path
            d="M61.2202 23.5684L30.7197 48.0782L0.37793 24.1399"
            fill="black"
          />
        </G>
        <Path
          d="M3.4488 26.3966L3.31152 7.36544L56.5866 6.62207L57.2257 26.6459L30.7148 47.7611L3.4488 26.3966Z"
          fill="#FAFAFA"
        />
        <Path
          d="M3.43174 26.3961C3.43174 26.3961 3.60762 26.525 3.93365 26.7785C4.25967 27.032 4.753 27.4101 5.38789 27.9L10.9003 32.1969L30.7706 47.6961H30.6591L57.1572 26.5679L57.1186 26.6582C56.9942 22.8382 56.8655 18.8291 56.7325 14.7513C56.6467 12.0056 56.5609 9.29419 56.4751 6.63438L56.5867 6.7418L3.31592 7.43361L3.38455 7.36486C3.43174 13.3462 3.43174 18.0986 3.43174 21.3643C3.43174 22.9886 3.43174 24.2476 3.43174 25.0984C3.43174 25.5281 3.43174 25.8461 3.43174 26.0652C3.43174 26.2843 3.43174 26.3961 3.43174 26.3961C3.43174 26.3961 3.43174 26.2886 3.43174 26.0738C3.43174 25.8589 3.43174 25.5367 3.43174 25.1156C3.43174 24.2562 3.406 23.0144 3.38884 21.3901C3.35881 18.1201 3.31163 13.3591 3.25586 7.36486V7.3047H3.32879L56.5824 6.50977H56.6939V6.61719C56.7797 9.277 56.8655 11.9927 56.9513 14.7384C57.0843 18.8162 57.213 22.8253 57.3331 26.6453V26.7011L57.2859 26.7355L30.7621 47.8336L30.7063 47.8765L30.6505 47.8336L10.8316 32.227L5.35786 27.9301L3.92936 26.7914C3.60762 26.5336 3.43174 26.3961 3.43174 26.3961Z"
          fill="#263238"
        />
        <Path
          d="M48.1876 16.2214C48.1876 16.2859 40.037 16.4019 29.9903 16.4836C19.9436 16.5652 11.793 16.5824 11.793 16.5222C11.793 16.4621 19.9436 16.3418 29.9903 16.2601C40.037 16.1785 48.1876 16.1613 48.1876 16.2214Z"
          fill="#263238"
        />
        <Path
          d="M48.196 21.6008C48.196 21.661 40.0454 21.777 30.003 21.8586C19.9606 21.9403 11.8057 21.9575 11.8057 21.8973C11.8057 21.8371 19.9563 21.7168 30.003 21.6352C40.0497 21.5535 48.196 21.5364 48.196 21.6008Z"
          fill="#263238"
        />
        <Path
          d="M48.2087 27.7971C48.2087 27.8573 40.0581 27.9733 30.0157 28.0549C19.9733 28.1366 11.8184 28.1538 11.8184 28.0936C11.8184 28.0334 19.969 27.9131 30.0157 27.8315C40.0624 27.7498 48.2087 27.7327 48.2087 27.7971Z"
          fill="#263238"
        />
        <Path
          d="M48.2213 33.9933C48.2213 34.0535 40.4524 34.1695 30.8647 34.2468C21.277 34.3242 13.5039 34.3371 13.5039 34.2769C13.5039 34.2168 21.2727 34.1007 30.8647 34.0234C40.4567 33.946 48.2213 33.946 48.2213 33.9933Z"
          fill="#263238"
        />
        <Path
          d="M41.4222 39.4464C41.3523 39.4654 41.2801 39.4741 41.2077 39.4722L40.5943 39.4979L38.3464 39.5538L30.9208 39.687C28.0209 39.7429 25.3912 39.76 23.4908 39.7557H21.2387H20.6295C20.5582 39.7632 20.4863 39.7632 20.415 39.7557C20.4848 39.7362 20.5571 39.7275 20.6295 39.73L21.2387 39.7042L23.4908 39.6483L30.9165 39.5108C33.8164 39.4593 36.4417 39.4421 38.3421 39.4421H40.5943H41.2077C41.2791 39.4348 41.3511 39.4362 41.4222 39.4464Z"
          fill="#263238"
        />
        <Path
          d="M34.5712 44.6885C33.2876 44.8015 31.9986 44.8417 30.7104 44.8088C29.4226 44.847 28.1336 44.8126 26.8496 44.7057C28.1331 44.5899 29.4222 44.5497 30.7104 44.5853C31.9983 44.5472 33.2873 44.5816 34.5712 44.6885Z"
          fill="#263238"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2837_33900">
          <Rect width="63" height="65" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EmailIcon;