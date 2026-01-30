# Singleton Pattern

- Singleton pattern ensure that class has only one instance and provide glogal access to it.
- This is usefull when system need access of only one instance of class accross system

# Why singleton is required.

- It is required when we are doing some expensive operation
- Take lots of time create object.
- Object is costly and shared.

# Use Case

- It might be take time to create database object because a tcp connection has to be established which requied 3 way handshake between app server and database server.
