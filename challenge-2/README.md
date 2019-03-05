Challenge 2 - Living on the Edge
Background
After the successful pilot, the IT staff of Wingtip Toys began the process of deploying the smart turnstiles to the entries to the park. However, there has been a shift in focus, as issues with the roller coasters have become a higher priority to the park. Various anomalies have been reported, such as photo equipment malfunctioning and trains breaking down. Because management sees the success of the roller coasters as key to the park, all resources must be dedicated to gathering data about the roller coasters.

Devices have already been deployed to the roller coasters that gather large amounts of data, including speed, acceleration, passenger count, and other key events for each run of each ride. Because of the amount of data being generated, Wingtip Toys would like to investigate using Azure IoT Edge to process the data and manage ingestion. There are five trains in total across the roller coasters.

For purposes of deploying a pilot as quickly as possible, management would like to implement Azure IoT Edge as a proof of concept on just one train. The remaining four trains are already configured for streaming; once you provide your IoT Hub connection string to the IT staff, they will begin sending data from those trains.

Because Wingtip Toys is uncertain about what data they will be analyzing later, they have requested all data generated by the devices be stored. Wingtip Toys also realizes that asking questions over the data stream in near-real-time will be important, and wants to deploy a stream processing engine to consume the data being received from the coasters.

Technical Details
The IoT Hub connection string you submit during this challenge will be used to receive the stream from the four simulated trains

You will be configuring one (the fifth) train as a simulated Azure IoT Edge device

Instrument the prototype train utilizing the IoT Edge runtime with the 3.0 versions (3.0-stretch or 3.0-nanoserver) of the following modules; each collects and returns a different type of data
Module 1 - GPS data
Module 2 - Accelerometer
Module 3 - Events
Example message payloads and notes about the identifiers used can be found in the descriptions of the modules on Docker Hub as linked above.

The solution chosen must allow for the archived data to arrive in storage within 2 hours of arriving at the buffered ingestion point
This is to support the park’s scheduled data processing that will start at 2:00 AM
Success Criteria
IoT & Edge
The team’s ingestion environment needs to be deployed into the team’s assigned region
Submit a connection string for the team’s IoT Hub. The connection string must support creation of new IoT Devices within the hub. A coach or member of the event staff will provide a URL to a website at which the connection string may be submitted.
The team must demonstrate to a coach successful deployment of the three supplied IoT Edge modules to one IoT Edge device
The team must demonstrate to a coach that data from the roller coaster trains is ingested in the team’s hub
Stream Processing
The team’s stream processing environment needs to deployed into the correct region (check with your coach for the correct region)
The team has deployed the chosen stream processing engine in Azure
The team has connected the stream processing engine to the team’s buffered ingestion point and is able to demonstrate that they are able to read data from it
This does not need to be an interactive feed of data - a snapshot proving that it came off of the stream is acceptable
Data Archival
The team must persist the data to a new container in the storage account that has been created for them in their subscription
The team should discuss the chosen data archival solution with a coach, and present an Azure Blob Storage container with the data
The data in the Azure Blob Storage container should be partitioned at the granularity of year, month, and day
If the chosen data archival tool supports it, the data persisted to storage should be compressed
Prerequisites
Docker: Community Edition is sufficient
Hints
Specify the tag of the module images so that the Azure IoT Edge runtime pulls the correct version.

More rides = more data = more IoT Hub capacity needed.

Many of the articles written for Spark on HDInsight can be used with Azure Databricks with little (or sometimes no) modification. If you can’t find something in the Databricks documentation, look for the same thing on HDInsight.

For Spark Structured streaming, the data in the “body” column coming from IoT Hubs is in binary format. This is the default behavior of IoT Hubs/Event Hubs. The team should cast the binary data into String format to be able to work with it.

It might take a little while for your stream processing engine to connect to the stream and start consuming data. If it takes longer than 5 minutes, check with your coach.

References
Read Me First!
Choosing a stream processing technology in Azure
EventHubs Consumer Groups
A Gentle Introduction to Apache Spark on Databricks
Spark Structured Streaming Programming Guide
IoT Hub & Edge
Simulate an Edge device - Windows
Simulate an Edge device - Linux
Deploy Azure IoT Edge modules from the Azure portal or Deploy Azure IoT Edge modules with Azure CLI
IoT Hub Access Controls and Permissions
Stream Processing & Data Storage - Spark
Intro to Spark Notebook - Consider working through our notebook if the team is new to Spark
Working with Complex Data Formats with Structured Streaming in Apache Spark 2.1 - Good information on dealing with converting from JSON to a tabular format.
Apache Spark Structured Streaming on HDInsight to process events from Event Hubs
Access Azure Blob Storage from Azure Databricks
Using Spark on Azure Databricks to consume data from EventHubs
Stream Processing & Data Storage - Azure Stream Analytics
What is Stream Analytics?
Data connection: Learn about data stream inputs from events to Stream Analytics
Stream Analytics outputs: Options for storage, analysis
Supporting Information
If Spark is the team’s chosen stream processing environment, an Event Hubs Connector is required to connect to the data stream. The current version of the connector can be found in GitHub Azure Event Hubs Connector for Apache Spark
Note that the new EventHubs connector introduces a breaking change from older versions of the driver. The differences between the code for the two drivers are are outlined in the connector’s wiki
If the team prefers the old driver, the Maven coordinates for the connectors are:
Azure Databricks: com.microsoft.azure:azure-eventhubs-databricks_2.11:3.4.0
HDInsight: com.microsoft.azure:azure-eventhubs-spark_2.11:2.1.6
Understand the Docker concept of tags and docker pull commands; there is no need to pull images ahead of time.

Understand how to troubleshoot Azure IoT Edge.

Understand how to monitor and diagnose Azure IoT Hub.

Understand Spark options in Azure - HDInsight and Azure Databricks

Understand Why Would I Ever Need to Partition My Big ‘Raw’ Data?

Understand Hadoop Azure Support: Azure Blob Storage.

Familiarize yourself with common PySpark SQL Functions & Scala Spark SQL Column Functions

Introduction to Python Beginner’s Guide to Python

Introduction to Scala Tour of Scala

Understand loading external libraries in HDInsight and Azure Databricks