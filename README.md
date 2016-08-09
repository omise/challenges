![Tam Boon](https://cdn.omise.co/assets/tamboon.jpg)

# Tam Boon

_Tam boon_ (which means "making merit" in Thai) is a simple Ruby on Rails
app that contains bugs and rough code that you need to fix and refactor
in order to be offered an interview at Omise.

Read this document entirely before starting the exercises as you'll learn how
we expect you to write code, our rules for code and how to submit your changes
back to us.

## Setup

This app provides a way for merit makers to donate money to a charity of their
choosing using their credit card.

At the root path you will find a list of charities, a field to enter an amount,
and a series of credit card fields powered by Omise. The amount must be sent in
Thai Baht. But both the Omise API and the `total` column in the charity
table expect an integer value in the smallest unit of the Thai Baht, the
satang.

Note that you must register an Omise account and replace both the `pkey`
and `skey` fields in `config/secrets.yml` to use the app in development
mode.

To run the test simply run `rake test`. You'll notice that two tests already
fail. You'll have to fix or add code (without changing the test) to make
the tests pass.

## Exercises

  1. Fix the race condition in the balance amount column.
  2. Refactor and improve the code in the donate action.
  3. Fix and add integration tests to allow subunits in the amount field.
  4. Add a feature to allow a charity to be picked at random.

Bonus exercise: Remove all `Rails.env.test?` conditionals from the code.

## Principles

We want you to focus on those three principles while writing code:
clarity, simplicity and defensiveness.

* Clarity: write clear code that any developer can read and understand
  in one go.
* Simplicity: write gimmick-free and straightforward code with no ambiguities.
* Defensiveness: cover edge cases and treat user inputs with care.

## Testing

This app comes with a full test suite. The integration tests for the fix and
for the new feature are already written. It's up to you to write unit tests for
the rest of the code you'll write in existing or newly created classes and
modules. Note that we require that all tests must pass before we can invite you
in for an interview.

In test mode no network connection is made to Omise servers. In general
we prefer duck-typing to make our tests fast. In the codebase you'll
notice that we use conditionals to switch between doing call to the
Omise library in
normal use and constructing quick and dirty OpenStruct for test. Please keep it
that way and make no network calls during the tests. But you're free to find
another way to remove the conditionals as noted in the exercises list.

## Rules

You can:

  - re-organize the codebase;
  - create new classes/modules/methods;
  - modify existing code;
  - add tables or columns in the existing database schema.

You can't:

  - change existing behaviors;
  - install more gems than those already in the Gemfile;
  - change the database from PostgreSQL to something else;
  - change any of the urls or parameter names.

## Submitting Your Code

You must email your changes as a git patch to jobs@omise.co. Your patch must
consist of multiple separate commits, per exercise. Your commit
message must communicate clearly what has been done in each commit. Have a look
at previous commits to have a clear idea of what we expect.

If you notice more bugs in the original implementation you can add fixes for
those as well. You won't be penalized if you don't. However we ask you not
to add more features than the one given in the exercise list.

Note that we will outright reject any submission which does not follow the
guidelines outlined in this README.
