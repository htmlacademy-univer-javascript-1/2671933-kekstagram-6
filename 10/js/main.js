import './form.js';
import { initScale } from './scale.js';
import { initEffects } from './effects.js';
import { generatePhotos } from './generate.js';
import { renderPictures } from './pictures.js';

initScale();
initEffects();

const photoDescriptions = generatePhotos();
renderPictures(photoDescriptions);
