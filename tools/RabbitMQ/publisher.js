// require callback versiion of library:
const amqp = require("amqplib/callback_api");

// connect to RabbitMQ server"
amqp.connect("amqp://127.0.0.1", (err, connection) => {
   if (err) throw err;

   // create a channel
   connection.createChannel((err, channel) => {
      if (err) throw err;

      let queueName = "queue1";
      let message = "hello from que 1";

      // make sure there is a que before sending the message
      // declaring a queue is idempotent - it will only be created if it doesn't exist already
      // durable: ??????? false means even if there is no subscriber in the server, the que will still be available
      channel.assertQueue(queueName, { durable: false });

      channel.sendToQueue(queueName, Buffer.from(message));

      console.log(`message: ${message}`);

      setTimeout(function () {
         connection.close();
         process.exit(0);
      }, 5000);
   });
});
