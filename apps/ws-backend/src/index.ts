import { WebSocketServer, WebSocket } from "ws";
import {IncomingMessage} from "http";
import jwt, { JwtPayload } from "jsonwebtoken";
import {JWT_SECRET} from "./config";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws:WebSocket, request : IncomingMessage){
  const url= request.url;

  if(!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";
  const decoded = jwt .verify(token, JWT_SECRET);

  if(!decoded || !(decoded as JwtPayload).userId) {
    ws.close();
    return;
  }
  ws.on('message', function incoming(message: string) {
    console.log('received: %s', message);
  });

  ws.send('Hello client!');
});
