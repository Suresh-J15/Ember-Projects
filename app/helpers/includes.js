import { helper } from '@ember/component/helper';

export function includes([item, array]) {
  return (array) ? array.includes(item) : false;
}

export default helper(includes);