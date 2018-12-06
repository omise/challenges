Context
=======

We have outsourcing a portal application development to external company. The application contains the following features:

 - Member sign up/sign in
 - Download document

The application was developed using Ruby on Rails.

The application requires a database for storing data. 

The default database in Rails is Sqlite, but needs to be changed to PostgreSQL.

Problem
=======

As an architect, you decide to deploy the application on containers. The target platform is Kubernetes.
And, we decide to use PostgreSQL as the database.

Instructions
===========

 - Write scripts and yaml files, in order to bring this application to Kubernetes cluster, i.e. Helm charts or Kubernetes manifest file.
 - Write scripts and yaml files, in order to setup PostgreSQL on Kubernetes cluster, optionally in High Availability mode, i.e. Patroni/Spilo with master/slave.
 - You may need to modify the application source code or configuration in order to make the application running on Kubernetes cluster, i.e. make use ENV variables in 12Factor style, create Dockerfile.
 - You have to write documents and/or instructions about what you have done. This documents must tell the detail step by step for other DevOps to understand how to deploy this application and maintain it.

How to proceed
===========

1) Clone this repository to your local machine or to a private repo.
2) Write your code.
3) Write the documentation.
4) Submit your patch file to devops@omise.co
5) Do not make your code public.

Time limit
===========

There is no time limit as long as the positions are not filled.

Final step
===========

If you have qualified, we will interview you personally.
We may ask you more details of your code choices.
