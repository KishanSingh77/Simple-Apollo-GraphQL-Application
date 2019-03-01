import express from "express";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
const server = express();
import bodyParser from "body-parser";
import schema from "./schema";

server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
server.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

server.listen(4000, () => {
  console.log("listening on port 4000");
});
