from kafka import KafkaProducer
import json

# Create an instance of the Kafka producer
producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
    )

# Call the producer.send method with a producer-record
for message in range(5):
    producer.send('kafka-python-topic', {'values': message})
