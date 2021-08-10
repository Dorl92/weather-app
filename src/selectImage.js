import Clear from './images/Clear.png';
import Hail from './images/Hail.png';
import HeavyCloud from './images/HeavyCloud.png';
import HeavyRain from './images/HeavyRain.png';
import LightCloud from './images/LightCloud.png';
import LightRain from './images/LightRain.png';
import Shower from './images/Shower.png';
import Sleet from './images/Sleet.png';
import Snow from './images/Snow.png';
import Thunderstorm from './images/Thunderstorm.png';

const selectImage = (text) => {
    switch (text) {
        case 'Snow':
            return Snow;
        case 'Sleet':
            return Sleet;
        case 'Hail':
            return Hail;
        case 'Thunderstorm':
            return Thunderstorm;
        case 'Heavy Rain':
            return HeavyRain;
        case 'Light Rain':
            return LightRain;
        case 'Showers':
            return Shower;
        case 'Heavy Cloud':
            return HeavyCloud;
        case 'Light Cloud':
            return LightCloud;
        case 'Clear':
            return Clear;
        default:
            return null;
    }
}

export default selectImage;