import { helper } from '@ember/component/helper';

export function multiply([operand1, operand2]) {
  if (operand1 && operand2) {
    return parseFloat(operand1) * parseFloat(operand2);
  }
  return 0;
}

export default helper(multiply);
