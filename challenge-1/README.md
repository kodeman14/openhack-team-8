Challenge 1 - Walk this way
Background
Wingtip Toys has determined IoT devices are the perfect tool to aid them in understanding visitor behavior. To test this theory, they would like to launch a pilot program where a simulated device is able to track visitors as they enter the park through turnstiles.

The pilot will include simulating entries into the park. Each member of the team will be responsible for creating a simulated scanner and ensuring all events flow to, and are visible in, a scalable telemetry ingestion solution which supports managing unique device identities. Each simulated turnstile needs to report an event each time a visitor enters the park. Wingtip Toys would like to ensure the solution can scale, and have requested the simulation report a visitor entering via each turnstile every second.

Technical Details
Each event sent to the team’s shared hub needs to be formated as JSON. Every event needs a globally unique identifier (GUID), which needs to be generated as part of the solution. A timestamp of the simulated entrance must also be recorded. The JSON should match the sample below:

{
    "ticketId": {{uniqueIdentifier}},
    "entryTime": {{currentTime}}
}
Success Criteria
The team’s ingestion environment needs to be deployed into the team’s assigned region

Configure and designate a single ingestion hub for the team. While each team member may create a unique hub in order to experience the hub creation process, all simulators should be transmitting to a single team hub by the end of this challenge

The team’s hub must be scaled appropriately for the load generated in this challenge

The team’s hub must be able to scale up as load increases with progress through the challenges

One simulated device per team member is required

The team must demonstrate to a coach that the streaming event data can be monitored remotely in real time
Devices for all team members must be running at the same time
Each team member must execute an additional process which echoes any data that has been sent to the cloud from another team member’s device
Prerequisites
An IDE or code editor, like Visual Studio Code
The team’s assigned Azure subscription
References
Read Me First!
Comparison of Azure IoT Hub and Azure Event Hubs. See Supporting Information section for more.
Azure IoT
Introduction to Azure and the Internet of Things gives an overview of creating IoT solutions in the cloud.
What is IoT Hub? provides information on getting started with using IoT Hub. The Azure portal and the Azure cli provide features for monitoring and diagnostics.
Supporting Information
Read more about choosing a real-time message ingestion technology in Azure

IoT Hub quotas and throttling

Not all editions of Azure IoT Hub can be scaled up later. Read more at IoT Hub Pricing.

The Azure CLI is a powerful way to manage the resources in your Azure Subscription from the command line, and much more efficiently that via the Azure Portal. Learn how to install Azure CLI 2.0 and sign in with Azure CLI 2.0.

The Azure Cloud Shell is an interactive, browser-accessible shell for managing Azure resources. It has the Azure CLI installed and already logged into your Azure Subscription.

The Azure IoT extension for Azure CLI adds the ability to manage your IoT Hubs, field and edge devices and more via the Azure CLI. Learn how to install it here: Azure IoT extension for Azure CLI

If you are having issues running or installing tools on your own workstation you can create a Virtual Machine in Azure to work from. Learn more at Quickstart: Create a Linux virtual machine in the Azure portal

While it is beyond the scope of this event, real-world solutions should consider the partitioning of the built-in events endpoint and other best practices for Event Hubs. Feel free to discuss these concepts with a coach!