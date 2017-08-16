Google Apps Script to convert Google Form from/to Google Spreadsheet.

* createNewForm: 
   Create a Google Form by interpreting Google Spreadsheet content values in a certain format.
   
* importForm:
   Import predefined Google Form items and preferences into your Google Spreadsheet content values in a certain format.
  
### Warning: Incomplete interpretation caused by Google Forms API insufficiency

 * see https://github.com/kubohiroya/sheet2form/issues
 
# Example

Each row in the Google Spreadsheet is the command and params:
 * to set a preference value
 * to create a form item
 * to create a form item choice
 
 | | A | B | C | D | E |
 |---|---|---|---|---|---|
 |1|isQuiz|FALSE|||
 |2|acceptingResponses|TRUE|||
 |3|publishingSummary|TRUE|||
 |4|confirmationMessage|||
 |5|customClosedFormMessage|||
 |6|description||||
 |7|shuffleQuestions|FALSE|||
 |8|title|this is test| |9|title| a sample form | | | 
 |10|text| name | Please input your full-name. | TRUE | |
 |11|multipleChoice | gender | Please select your gender.| TRUE | TRUE |
 |12| | male | | |
 |13| | female | | |
 |14|checkbox| favorite season| Please select all of your favorite season|TRUE||
 |15| | spring | | |
 |16| | summer | | |
 |17| | autumn | | |
 |18| | winter | | |
 |19|paragraphText| How do you feel like? |  |  | |
  
 More detailed usage and example are available at:
  
  * spreadsheet  
    https://docs.google.com/spreadsheets/d/1W8OxCjZVDmqEz9EKAXRQjn2wvHDFibSRkQRuqnUBo60/edit?usp=sharing
  * form
    https://docs.google.com/forms/d/14hZbP_PPKds9qsUaA6FSfQXI1ox5KSePtQWzJpCRnrI/viewform?edit_requested=true

 These commands and props are almost compatible to Google Apps Script Forms Service API
: https://developers.google.com/apps-script/reference/forms/

# Getting Started

## 1. Create an empty spreadsheet and its Container Bounded Script

* Create an empty Google Spreadsheet file on your GoogleDrive.
* Open the ScriptEditor from the spreadsheet to create a Container Bounded Script Project.
* Add a new Google Apps Script file in the project by copying `./bridge.gs` file content of this repository.

## 2. Create a Standalone Script hosted on GitHub

* Create an empty Google Apps Script on your GoogleDrive as a Standalone Script Project Project.
* Setup `node-google-apps-script` so as to create your credential file and `./gapps.config.json` file.
  cf. https://www.npmjs.com/package/node-google-apps-script
* Build and Dist the library with `npm run build && npm run dist` 

## 3. Bind the spreadsheet to the Standalone Script Project
* In the Standalone Script Project, COPY the value of 'Project Key' project property.
* In the Container Bounded Script Project, click `Resource` -> `Library` menu to open `Adding Library`, 
 PASTE the copy of 'Project Key', so as to setup your Standalone Script Project as the library referenced by `sheet2form` variable. 
* Setup a trigger to execute function `onOpen` by spreadsheet event `onOpen`.

## 4. Execute `createNewForm` or `importForm`
* Execute the functions `createNewForm` or `importForm` from customized menu in the spreadsheet UI.
