kafka-playground
==================

Introduction
------------------
An example of setting up a simple kafka project, using python as producer and js as consumer. (https://scotch.io/tutorials/an-introduction-to-apache-kafka)

Lesson Learnt
------------------
1. Remember to initiate "zookeeper" and "broker" before starting "producer" and "consumer"
2. Start zookeeper, and then broker
Download the kafka tar file or download it using Homebrew
3. Create a topic need to specify a zookeeper with flag "--zookeeper"
4. The logs of the messages are stored in directory specified by server.properties (broker's config)
5. Remember python virtual environment for producer.py
