import HTML from './baseHTML';
import { TextField } from '@interactors/html';

export default HTML.extend('searchInput')
  .selector('input[title="Qidirish"]')
  .actions({
    fillIn: ({ find }, value) => find(TextField()).fillIn(value),
  });
