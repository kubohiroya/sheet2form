# sheet2form

Google Apps Script to convert Google Form from/to Google Spreadsheet.

* exportForm: 
   Create/update your Google Form items and preferences by converting Google Spreadsheet content values in a certain format.
   
* importForm:
   Update your Google Spreadsheet content values in a certain format by converting Google Form items and form preferences.
  
### Limitations

Warning: Some incomplete conversions may be caused by Google Forms API insufficiency.

 * see https://github.com/kubohiroya/sheet2form/issues
 
## Example

#### A short example of Google Spreadsheet content as a source of Google Form
 
 | | A | B | C | D | E |
 |---|---|---|---|---|---|
 |1|title| a sample form | | | 
 |2|description||||
 |3|id||||
 |4|isQuiz|FALSE|||
 |5|shuffleQuestions|FALSE|||
 |6|acceptingResponses|TRUE|||
 |7|publishingSummary|TRUE|||
 |8|sectionHeader| EXAMPLE |||
 |9|text| Your name | Please input your full-name. | TRUE | |
 |10|paragraphText| How do you feel like? |  |  | |
 |11|multipleChoice | Your gender | Please select your gender.| TRUE | TRUE |
 |12| | male | | |
 |13| | female | | |
 |14|checkbox| Your favorite season| Please select all of your favorite season|TRUE||
 |15| | spring | | |
 |16| | summer | | |
 |17| | autumn | | |
 |18| | winter | | |
  
Each row in this example stands for a command and a set of properties to create a form item:
 * Row 1-7: to set a form configuration(`title`, `description`, `id`, `isQuiz`, `shuffleQuestions`, `acceptingResponses`, `publishingSummary` )
 * Row 8-18: to create a form item (`sectionHeader`, `text`, `paragraphText`, `multipleChoice`, `checkbox`)
 * Row 12-13, 15-18: to create choices of multiple selection item
  
More detailed usage and example are available at:
  
 * Spreadsheet (usage of all of the command descriptions and examples): 
    https://docs.google.com/spreadsheets/d/1W8OxCjZVDmqEz9EKAXRQjn2wvHDFibSRkQRuqnUBo60/edit?usp=sharing
 * Form (an example translated by the spreadsheet): 
    https://docs.google.com/forms/d/14hZbP_PPKds9qsUaA6FSfQXI1ox5KSePtQWzJpCRnrI/viewform?edit_requested=true

 These commands and props are almost compatible to Google Apps Script Forms Service API
: https://developers.google.com/apps-script/reference/forms/

#### The 2 ways of sheet2form execution: to create or to update
 
 * The `id` row with empty value, a new Google Form will be created and the `id` row will be set with the newly created form id in process of conversion from a Google Spreadsheet to a Google Form.
 
   * In the similar way, the values of `editUrl` row, `publishedUrl` row or `summaryUrl` rows will be set.

 * If an `id` row with actual(not-empty) value exists and its related Google Form can be opened by the Google Forms API method `FormApp.openById`, the opened form will be reused and updated.
 
## Installation

### Installation Strategy A: Copy and paste ./dist/sheet2form.gs file simply 

#### 1. Create an empty spreadsheet and its Container Bounded Script
* Create an empty Google Spreadsheet file on your GoogleDrive.
* Open the ScriptEditor from the spreadsheet to create a Container Bounded Script Project.
* Add a new Google Apps Script file in the project by copying `./dist/sheet2form.gs` file content in this repository.

#### 2. Setup onOpen event trigger 
* Setup a trigger to execute function `onOpen` with spreadsheet `onOpen` event.
* Execute function `onOpen`.

### Installation Strategy B: Setup and bind a reusable standalone script 

#### 1. Create an empty spreadsheet and its Container Bounded Script

* Create an empty Google Spreadsheet file on your GoogleDrive.
* Open the ScriptEditor from the spreadsheet to create a Container Bounded Script Project.
* Add a new Google Apps Script file in the project by copying `./bridge.gs` file content in this repository.

#### 2. Enable API
* Enable `Google Drive API`, `Google Sheets API` by `Advanced Google Services` and `Google API Console` from `Resource` menu in the ScriptEditor.
 
#### 3. Create a Standalone Script hosted on GitHub

* Create an empty Google Apps Script on your GoogleDrive as a Standalone Script Project Project.
* Setup `node-google-apps-script` so as to create your credential file and `./gapps.config.json` file.
  cf. https://www.npmjs.com/package/node-google-apps-script
* Build and Dist the library with `npm run build && npm run dist` 

#### 4. Bind the spreadsheet to the Standalone Script Project
* In the Standalone Script Project, COPY the value of 'Project Key' project property.
* In the Container Bounded Script Project, click `Resource` -> `Library` menu to open `Adding Library`, 
 PASTE the copy of 'Project Key', so as to setup your Standalone Script Project as the library referenced by `sheet2form` variable.
 
#### 5. Setup onOpen event trigger 
* Setup a trigger to execute function `onOpen` with spreadsheet `onOpen` event.
* Execute function `onOpen`.

## Usage 
### exportForm 
 
 Create/update your Google Form items and preferences by converting Google Spreadsheet content values in a certain format.
 
 #### `executeForm`
 * Execute the function `exportForm` from customized menu `Form I/O` in the spreadsheet UI.
 * Your Google Form items and preferences, with using `title` row value and ActiveSheet of ActiveSpreadsheet, are created/updated.
  
 #### `executeForm...` 
 * Execute the function `exportForm...` from customized menu `Form I/O` in the spreadsheet UI.
 * The inputDialog window (Step 1 of 3) popups, then fill in the form title (default is using `title` row value).
 * the inputDialog window (Step 2 of 3) popups, then fill in the Spreadsheet ID or URL to convert (default is using ActiveSpreadsheet).
 * The inputDialog window (Step 3 of 3) popups, then fill in the index number of sheet to convert (default is using ActiveSheet).
 * Your Google Form items and preferences are automatically created/updated.
 * The message dialog of the URL of exported form is shown.
  
### importForm

* Update your form definitions in your Google Spreadsheet in the format as described above.

#### `importForm` 
* Execute the function `importForm` from customized menu `Form I/O` in the spreadsheet UI.
* The active sheet of the Google Spreadsheet are automatically updated with specified form by `id` row.

#### `importForm...`
* Execute the function `importForm...` from customized menu `Form I/O` in the spreadsheet UI.
* The inputDialog window (Step 1 of 3) popups, then fill in the the Form ID or URL.
* the inputDialog window (Step 2 of 3) popups, then fill in the Spreadsheet ID or URL to convert (default is using ActiveSpreadsheet).
* The inputDialog window (Step 3 of 3) popups, then fill in the index number of sheet to convert (default is using ActiveSheet).
* Your Google Spreadsheet are automatically updated.
