import { helper } from '@ember/component/helper';

export function isEqual([first, second]) {
  return first === second;
}

export default helper(isEqual);

