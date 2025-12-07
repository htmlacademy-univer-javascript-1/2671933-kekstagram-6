import './form.js';
import { generatePhotos } from './generate.js';
import { renderPictures } from './pictures.js';

const photoDescriptions = generatePhotos();
renderPictures(photoDescriptions);
