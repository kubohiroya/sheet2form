# sheet2form

Google Apps Script to convert Google Form from/to Google Spreadsheet.

* exportForm: 
   Create a Google Form by converting Google Spreadsheet content values in a certain format.
   
* importForm:
   Import predefined Google Form items and preferences into your Google Spreadsheet content values in a certain format.
  
### Limitations

Warning: Incomplete interpretation caused by Google Forms API insufficiency.

 * see https://github.com/kubohiroya/sheet2form/issues
 
## Example

#### a short example of Google Spreadsheet content as a source of Google Form
 
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
  
Each row in this Google Spreadsheet is for creating form item:
 * Row 1-7: to set a form configuration(`title`, `description`, `id`, `isQuiz`, `shuffleQuestions`, `acceptingResponses`, `publishingSummary` )
 * Row 8-18: to create a form item (`sectionHeader`, `text`, `paragraphText`, `multipleChoice`, `checkbox`)
 * Row 12-13, 15-18: to create choices of multiple selection item
 
 * Row 3: The empty `id` field will be set with the newly generated form id in process of converting from spreadsheet to form.
 
More detailed usage and example are available at:
  
 * spreadsheet (usage of all of the command descriptions and examples): 
    https://docs.google.com/spreadsheets/d/1W8OxCjZVDmqEz9EKAXRQjn2wvHDFibSRkQRuqnUBo60/edit?usp=sharing
 * form (an example translated by the spreadsheet): 
    https://docs.google.com/forms/d/14hZbP_PPKds9qsUaA6FSfQXI1ox5KSePtQWzJpCRnrI/viewform?edit_requested=true

 These commands and props are almost compatible to Google Apps Script Forms Service API
: https://developers.google.com/apps-script/reference/forms/

## Getting Started

### 1. Create an empty spreadsheet and its Container Bounded Script

* Create an empty Google Spreadsheet file on your GoogleDrive.
* Open the ScriptEditor from the spreadsheet to create a Container Bounded Script Project.
* Add a new Google Apps Script file in the project by copying `./bridge.gs` file content of this repository.

### 2. Create a Standalone Script hosted on GitHub

* Create an empty Google Apps Script on your GoogleDrive as a Standalone Script Project Project.
* Setup `node-google-apps-script` so as to create your credential file and `./gapps.config.json` file.
  cf. https://www.npmjs.com/package/node-google-apps-script
* Build and Dist the library with `npm run build && npm run dist` 

### 3. Bind the spreadsheet to the Standalone Script Project
* In the Standalone Script Project, COPY the value of 'Project Key' project property.
* In the Container Bounded Script Project, click `Resource` -> `Library` menu to open `Adding Library`, 
 PASTE the copy of 'Project Key', so as to setup your Standalone Script Project as the library referenced by `sheet2form` variable. 
* Setup a trigger to execute function `onOpen` by spreadsheet event `onOpen`.

## Usage 
### `exportForm` 
 * Create your own form definition in your Google Spreadsheet in the format as described above.
 * Execute the functions `exportForm` from customized menu in the spreadsheet UI.
 * The `id` row with empty value will be set with the newly generated form id in process of converting from spreadsheet to form. In the similar way, the values of `editUrl` row, `publishedUrl` row or `summaryUrl` rows will be set.
 * If an `id` row with actual(not-empty) value exists and its related form can be opened by the Google Forms API method `FormApp.openById`, the related form will be reused as the exporting target.
 
### `importForm`
* COPY the URL of your pre-existed Google Form
* Execute the function `importForm` from customized menu in the spreadsheet UI.
* PASTE the URL in opened dialog, then click OK.
