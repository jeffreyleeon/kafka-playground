kafka-playground
==================

Introduction
------------------
An example of setting up a simple kafka project, using python as producer and js as consumer. (https://scotch.io/tutorials/an-introduction-to-apache-kafka)

Lesson Learnt
------------------
1. Remember to initiate "zookeeper" and "broker" before starting "producer" and "consumer"
2. Start zookeeper, and then broker
3. Download the kafka tar file or download it using Homebrew
4. Create a topic need to specify a zookeeper with flag "--zookeeper"
5. The logs of the messages are stored in directory specified by server.properties (broker's config)
6. Remember python virtual environment for producer.py
