# apples-and-pears
Apples and Pears

The purpose of this project is to demonstrate the use of an Angular front end using a Java or PHP back end.

In the first use case, a user uploads a CSV file according to a particular syntax. An example can be found in the file "20240409 EU apples balance sheet.csv". The Angular front end passes the CSV file to the back end unchanged, where it is persisted. The back end also has a query function that returns the content of the CSV file in JSON format. The Angular front end uses the JSON reply to format the data as an HTML table.

In the second use case (not yet implemented) the user should be able to edit the data in the front end and have the result saved persistently by the back end.
