const { MoleculerClientError } = require("moleculer").Errors;
const jwt = require("jsonwebtoken");

let broker_schema = {
  name: "auth",
  dependencies: [
    // 'persistence'
  ],
  actions: {
    login: {
      rest: "/",
      async handler(ctx) {
        return {teste:'teste'};
      },
    },
  },
};

// if(!module.parent){
const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
  namespace: "tecpay",
  nodeID: "auth",
  transporter: "TCP",
});

broker.createService(broker_schema);
broker.start();
// }

module.exports = broker_schema;
