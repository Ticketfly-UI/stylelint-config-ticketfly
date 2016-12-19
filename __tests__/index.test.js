import config from '../';
import stylelint from 'stylelint';
import validCSS from './lib/valid-css';
import invalidCSS from './lib/invalid-css';
import test from 'ava';

// import util from 'util';
// const { inspect } = util;

test('no warnings with valid CSS', async t => {
  const { errored, results } = await stylelint.lint({
    code: validCSS,
    config,
    formatter: 'verbose'
  });

  const { warnings } = results[0];

  t.false(errored, 'no rules with an "error"-level severity registered a warning');
  t.is(warnings.length, 0, 'no errored');
});

test('warnings with invalid CSS', async t => {
  const { errored, results } = await stylelint.lint({
    code: invalidCSS,
    config
  });

  const { warnings } = results[0];

  t.true(errored, 'rules with an "error"-level severity registered a warning');
  t.is(warnings.length, 1, 'one warning was flagged');
  t.is(warnings[0].text, 'Unexpected id selector (selector-no-id)', 'proper warning text is provided');
});
