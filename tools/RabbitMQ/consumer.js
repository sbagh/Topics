const amqp = require("amqplib/callback_api");

amqp.connect("amqp://127.0.0.1", (err, connection) => {
   if (err) throw err;

   connection.createChannel((err, channel) => {
      if (err) throw err;

      let queueName = "queue1";

      // make sure the queue exists before we try to consume messages from it.
      channel.assertQueue(queueName, { durable: false });

      channel.consume(queueName, (message) => {
         // we are getting message in a buffer, so get content out first, then conver to string
         console.log(`received message: ${message.content.toString()}`);

         //  acknowledge message manually after being processed by consumer. means message will not be lost if the consumer crashes or is disconnected before acknowledging the message.
         channel.ack(message);
      });
   });
});
