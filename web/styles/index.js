import dictionary from '../../lib';
import generators from '../../utils';
import uiFactory from './UI';

const typography = dictionary.typography.values;
const colors = dictionary.colors.values;
const spacingScale = dictionary.spacing.values;
const spacingBase = dictionary.spacing.base;
const reset = dictionary.reset;

const { generate } = generators;

/**
 * executes all style generators passing in values from our styleguide.
 * outputs a map of style helpers under each namespace.
 */
const helpers = generate(typography, spacingScale, colors);

const UI = uiFactory({
  typography,
  spacingScale,
  spacingBase,
  colors,
  helpers
});

export {
  helpers,
  dictionary,
  colors,
  typography,
  spacingScale,
  spacingBase,
  UI,
  reset
};
