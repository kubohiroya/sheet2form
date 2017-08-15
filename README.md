Google Apps Script to convert Google Form from/to Google Spreadsheet

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
* Run the function 'createNew'