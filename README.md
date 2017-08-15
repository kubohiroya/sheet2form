Google Apps Script to convert Google Form from/to Google Spreadsheet

# Sample

A Google Spreadsheet as follows can be automatically converted into a Google Forms like  

 | | A | B | C | D | E |
 |---|---|---|---|---|---|
 |1|title| a sample form| | | 
 |2|text| name | Please input your full-name. | TRUE | |
 |3|multipleChoice | gender | Please select your gender.| TRUE | TRUE |
 |4| | male | | |
 |5| | female | | |
 |6|checkbox| favorite season| Please select all of your favorite season|TRUE||
 |7| | spring | | |
 |8| | summer | | |
 |9| | autumn | | |
 |10| | winter | | |
 |11|paragraphText| How do you feel like? |  |  | |
  
 

# Usage

* Create a empty Google Spreadsheet file on you GoogleDrive.
* Open ScriptEditor from the Spreadsheet and create a Container Bounded Script Project.
* Add a new Google Apps Script file in the project by copying `./bridge.gs` file content of this repository.

* Create a empty Google Apps Script on your GoogleDrive as a Standalone Script Project.
* Setup `node-google-apps-script` and create your credential file and `gapps.config.json` file.
  cf. https://www.npmjs.com/package/node-google-apps-script
* Setup your Standalone Script Project as a library,
* Build and Dist the library with `npm run build && npm run dist` 
  
* Copy a project property named 'Project Key' of the Standalone Script Project.
* Setup using the library by pasting the 'Project Key' of the Standalone Project into `Resource-`>`Library`->`Adding Library` of your Container Bounded Script Project.  
* Run the function 'createNewForm' or 'importForm'