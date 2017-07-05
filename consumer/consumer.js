const Kafka = require('no-kafka');

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer();
var data = (messageSet, topic, partition) => {
    messageSet.forEach((m) => {
        console.log(topic, partition, m.offset, m.message.value.toString('utf8'), '=======');
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(() => {
    return consumer.subscribe('kafka-python-topic', data);
});