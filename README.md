# Tam Boon

Tam Boon (or Making Merit in thai) is a simple rails app that contains bugs and
rough code that you need to fix and refactor in order to be offered an
interview at Omise.

Read this document entirely before starting the exercices as you'll learn how
we expect you to write code, what are the rules and how to submit your changes
back to us.

## The Setup

This app provides a way for merit makers to donate money to a charity of their
choosing using their credit card. There's two type of charities: monetary charity which will use the money as its see fit to conduct their agenda and item based charity which will use the money to buy items.

## Exercices

  1. fix the race condition in the balance amount column
  2. refactor the code that switches between charities
  3. add a feature to allow a charity to be picked at random.

## Principles

We want you to focus on those three principles while writing code:
clarity, simplicity and defensiveness.

Clarity: write clear code that any devs could read and understand in one go.  
Simplicity: write gimmic-free and straightforward code with no ambiguities.  
Defensiveness: cover edge cases and treat user inputs with care.  

## Testing

This app comes with a full test suite. The integrations tests for the fix and
for the new feature are already written. It's up to you to write unit tests for
the rest of the code you'll write in existing or newly created classes and
modules. Note that we require that all tests must pass before we can invite you
in for an interview.

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
consist of three separate commits. One commits per exercice. Your commit message
must communicate clearly what has been done in each commit. Have a look at
previous commits to have a clear idea of what we expect.

If you notice more bugs in the original implementation you can add fixes for
thoses as well. You won't be penalized if you don't. However we ask you not
to add more features than the one given in the excercice list.

Note that we will outright reject any submission which does not follow the
guidelines outlined in this README.
