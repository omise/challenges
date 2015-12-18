# Tam Boon

Tam Boon (or Making Merit in thai) is a simple rails app that contains bugs and
rough code that you need to fix and refactor in order to be offered an
interview at Omise.

Read this document entirely before starting the exercices as you'll learn how
we expect you to write code, what are the rules and how to submit your changes
back to us.

## The Setup

This app provides a way for merit makers to donate money to a charity of their
choosing using their credit card.

At the root path you will find a list of charities, a field to enter an amount,
and a series of credit card fields powered by omise. The amount must be sent in
Thai Baht. But both Omise API and the total column in the charity table both expect an integer value in the smallest unit of the Thai Baht, the satang.

Note that you must signup for an omise account and replace both pkey and skey
in the `config/secrets.yml` file to use the app in development mode.

To run the test simply run `rake test`. You'll notice that one test already
fails. You'll have to fix the code (not the test) that produce this failure.

## Exercices

  1. fix the race condition in the balance amount column
  2. refactor and improve the code in the donate action
  3. fix and add integration tests to allow subunits in the amount field
  4. add a feature to allow a charity to be picked at random

Bonus point: Remove all `Rails.env.test?` conditionals from the code.

## Principles

We want you to focus on those three principles while writing code:
clarity, simplicity and defensiveness.

Clarity: write clear code that any devs could read and understand in one go.  
Simplicity: write gimmick-free and straightforward code with no ambiguities.  
Defensiveness: cover edge cases and treat user inputs with care.  

## Testing

This app comes with a full test suite. The integrations tests for the fix and
for the new feature are already written. It's up to you to write unit tests for
the rest of the code you'll write in existing or newly created classes and
modules. Note that we require that all tests must pass before we can invite you
in for an interview.

In test mode no network connection to Omise are made. In general we prefer
duck-typing to make our test fast. In the codebase you'll notice that we use
a bunch of conditionals that switch between doing call to the Omise library in
normal use and constructing quick and dirty OpenStruct for test. Please keep it
that way and make no network calls during the tests. But you're free to find
another way to remove the conditionals as noted in the exercices list.

## Rules

You can:

  - re-organize the codebase;
  - create new classes/modules/methods;
  - modify existing code;
  - add tables or columns in existing table in the database.

You can't:

  - change existing behaviors;
  - install more gems than those already in the Gemfile;
  - change the database from postgres to something else;
  - change any of the urls or paremeter names.

## Submitting Your Code

You must email your changes as a git patch to jobs@omise.co. Your patch must
consist of multiple separate commits. One commits per exercice. Your commit
message must communicate clearly what has been done in each commit. Have a look
at previous commits to have a clear idea of what we expect.

If you notice more bugs in the original implementation you can add fixes for
those as well. You won't be penalized if you don't. However we ask you not
to add more features than the one given in the exercise list.

Note that we will outright reject any submission which does not follow the
guidelines outlined in this README.
