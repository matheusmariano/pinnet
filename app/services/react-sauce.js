import * as R from 'ramda';

const stringifyArray = R.pipe(
  R.filter(
    R.both(
      R.is(String),
      R.compose(R.not, R.isEmpty),
    ),
  ),
  R.join(' '),
);

const classes = R.pipe(
  R.filter(R.identity),
  R.keys(),
  stringifyArray,
);

export default {
  classes,
  stringifyArray,
};
