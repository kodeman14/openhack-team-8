'use strict';
var Mqtt = require('azure-iot-device-mqtt').Mqtt;
var DeviceClient = require('azure-iot-device').Client
var Message = require('azure-iot-device').Message;
const UUIDv4 = require('uuid/v4');

var connectionString = 'HostName=OpenHack-team-8.azure-devices.net;DeviceId=MyNodeDevice;SharedAccessKey=SY5DVwxpNgPEmQft329J1RScpDz+hUYBVjQ2rEZERj4=';
var client = DeviceClient.fromConnectionString(connectionString, Mqtt);

let date = new Date();

let hour = date.getHours();
hour = (hour < 10 ? "0" : "") + hour;

let min = date.getMinutes();
min = (min < 10 ? "0" : "") + min;

let sec = date.getSeconds();
sec = (sec < 10 ? "0" : "") + sec;

setInterval(function(){
  var currentTime = hour + ":" + min + ":" + sec;
  var message = new Message(JSON.stringify({
    ticketId: UUIDv4(),
    entryTime: currentTime
  }));

  console.log('Sending message: ' + message.getData());

  client.sendEvent(message, function (err) {
    if (err) {
      console.error('send error: ' + err.toString());
    } else {
      console.log('message sent');
    }
  });
}, 1000);
