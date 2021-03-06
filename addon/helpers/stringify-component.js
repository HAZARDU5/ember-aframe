import { helper } from 'ember-helper';
import stringifyComponent from '../utils/stringify-component';

export default helper(([component], hash) => {
  return stringifyComponent(component, hash);
});
