/*
# Task

Modify the recursive repeat function provided
in the boilerplate, such that it does not
block the event loop (i.e. Timers and IO handlers can fire).
This necessarily requires repeat to be asynchronous.

A timeout is queued to fire after 1 second,
which will print the results of the test
and exit the process. repeat should release
control of the event loop such that the timeout
fires before 1500 milliseconds elapse.

Try to perform as many operations as you can
before the timeout fires!

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unecessary functions e.g. helpers.

## Hints

  * If your program takes a long time to run,
  something is probably wrong.Use Control - C to kill the node process.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

*/

const repeat = (fn, iterationsCount) => {
  // base case
  if (iterationsCount <= 0) return;

  fn();

  if (iterationsCount % 10 === 0)
    setTimeout(() => {
      // recursive case, non-blocking due to setTimeout
      repeat(fn, (--iterationsCount));
    });
  else
    // recursive case
    repeat(fn, (--iterationsCount));
};

module.exports = repeat;
