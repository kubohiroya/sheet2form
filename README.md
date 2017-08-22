# sheet2form

Bi directional conversion of Google Forms and Google Spreadsheets using Google Apps Scripts handling representations of form properties and items on Google Spreadsheet in a certain format..

* ExportForm: 
   create/update your Google Form properties and items by converting Google Spreadsheet content values in a certain format.
   
* ImportForm:
   update your Google Spreadsheet content values in a certain format by converting Google Form properties and items.
   
## Example

A short example of Google Spreadsheet content as a source of Google Form:
 
 | | A | B | C | D | E |
 |---|---|---|---|---|---|
 |1|id||||
 |2|publishedUrl||||
 |3|editUrl||||
 |4|summaryUrl||||
 |5|title| sample | | | 
 |6|description|This is a sample form.|||
 |7|text| Your name | Please input your full-name. | TRUE | |
 |8|paragraphText| How do you feel like? |  |  | |
 |9|multipleChoice | Your gender | Please select your gender.| TRUE | TRUE |
 |10| | male | | |
 |11| | female | | |
 |12|checkbox| Your favorite season| Please select all of your favorite season|TRUE||
 |13| | spring | | |
 |14| | summer | | |
 |15| | autumn | | |
 |16| | winter | | |
  
Each row is to define a key value pair of form property or a form item properties:
 * Row 1-6: example to set form properties.
    * Column A and B consist a set of key value pair.  
 * Row 7-16: example to create form items.
    * Column A: itemType in lower camel case
    * Column B: title
    * Column C: helpText
      * Column D: isRequired
      * Column E: hasOptional
      * and so on.
 * Row 10-11, 13-16: example to create choice items of multipleChoice/checkbox.
    * Column A: (empty)
    * Column B: title

This Example of Google Spreadsheet can be translated into a Google Form like this: 
https://docs.google.com/forms/d/e/1FAIpQLSc37hbcvgFYFXyLgD4ZBdK0eiLO-i3woPcf_aBGCtSN7jZMDQ/viewform
    

  
### Create new form or update pre-exist form
 
#### Create new form by `id` row with *empty value*
 The `id` row with empty value, a new Google Form will be created by the Google Forms API method `FormApp.create` 
 and the `id` row will be set with the newly created form id in process of the conversion.
 
   * In the similar way, the values of `editUrl` row, `publishedUrl` row and `summaryUrl` rows will be set.

#### Update pre-exist form by `id` row with *actual value*
 If an `id` row with actual(not-empty) value exists and its related Google Form can be opened by the Google Forms API method `FormApp.openById`, the opened form will be reused and updated.


### Setup goToPage navigation from one of multipleChoice items to a pageBreak

1. Define the target `pageBreak` item row with column B as the title of pageBreak.
1. Define the referrer `pageBreak` item row with column D cell as the reference to the other pageBreak item by the title text. 

Example: 
https://docs.google.com/forms/d/e/1FAIpQLSdGJawVXHJ-Q8J2OQ_YjKOd2TR-ViIkM21exFOkJ8_-aJLMlA/viewform

#### Setup as Quiz form 

1. Define the `isQuiz` property row with `TRUE` value.
1. Define the `multipleChoice`, `checkbox` or `list` item row,
   * fill in the point value in column F cell for the correct answer.
   * fill in the feedbackForCorrect message in column G cell.
   * fill in the feedbackForIncorrect message in column H cell.
1. Every choice item row of which answer is correct, set TRUE value in column C cell. 

Example: 
https://docs.google.com/forms/d/e/1FAIpQLScTzqvc44242QDfRtP-VBXKDu3hYeNPy-kfwussxmiFdH8EKA/viewform

#### Add Feedback by reference

1. Define feedback rows of `feedback` command and and label with prefix \# . 
1. Refer a feedback definition by label with prefix \# .

Example: 
https://docs.google.com/forms/d/e/1FAIpQLSf3kP2KkUj6fXwQW__Ak7otYNJUsImt390rTHjxShck8ZrkhA/viewform

## Usage documentation in detail
   
 * Usage & Example Spreadsheet (usage of all of the command descriptions and examples): 
    https://docs.google.com/spreadsheets/d/1W8OxCjZVDmqEz9EKAXRQjn2wvHDFibSRkQRuqnUBo60/edit?usp=sharing
    
    https://docs.google.com/forms/d/e/1FAIpQLSf3kP2KkUj6fXwQW__Ak7otYNJUsImt390rTHjxShck8ZrkhA/viewform
    
 These commands and props are almost compatible to Google Apps Script Forms Service API
: https://developers.google.com/apps-script/reference/forms/

### Limitations

Warning: some incomplete conversions may be caused by Google Forms API insufficiency.

 * see https://github.com/kubohiroya/sheet2form/issues
 

## Installation

There are 2 installation strategies. Strategy A is rather simple and easy to start. 

### Installation Strategy A: Copy and paste ./dist/sheet2form.gs file

#### 1. Create an empty spreadsheet and its Container Bounded Script
1. Create an empty Google Spreadsheet file on your GoogleDrive.
1. Open the ScriptEditor from the spreadsheet to create a Container Bounded Script Project.
1. Add a new Google Apps Script file in the project by copying `./dist/sheet2form.gs` file content in this repository.

#### 2. Setup onOpen event trigger 
1. Setup a trigger to execute function `onOpen` with spreadsheet `onOpen` event.
1. Execute function `onOpen`.

### Installation Strategy B: Setup and bind a reusable standalone script 

#### 1. Create an empty spreadsheet and its Container Bounded Script

1. Create an empty Google Spreadsheet file on your GoogleDrive.
1. Select **Tools > Script editor** from within the spreadsheet to create a Container Bounded Script Project.
1. Select **File > New** from within Script editor, add a new Google Apps Script file in the project by copying `./bridge.gs` file content in this repository.

#### 2. Enable API

1. Enable `Google Drive API`, `Google Sheets API` by `Advanced Google Services` and `Google API Console` from `Resource` menu in the ScriptEditor.
 
#### 3. Create a Standalone Script hosted on GitHub

1. Fork the GitHub project repository git@github.com:kubohiroya/sheet2form.git  
1. Create an empty Google Apps Script on your GoogleDrive as a Standalone Script Project.
1. Setup `node-google-apps-script` so as to create your credential file and `./gapps.config.json` file.
  cf. https://www.npmjs.com/package/node-google-apps-script
1. Build the repository and distribute it into the standalone script as a reusable library with `npm run build && npm run dist` 

#### 4. Bind the spreadsheet to the Standalone Script Project
1. In the Standalone Script Project, copy the value of 'Project Key' project property.
1. In the Container Bounded Script Project, click `Resource` -> `Library` menu to open `Adding Library`, 
 paste the copy of 'Project Key', so as to setup your Standalone Script Project as the library referenced by `sheet2form` variable.
 
#### 5. Setup onOpen event trigger 
1. Setup a trigger to execute function `onOpen` with spreadsheet `onOpen` event.
1. Execute function `onOpen`.

## Usage

Execute the functions from customized menu `sheet2form` in the spreadsheet UI.
 
### Export Form 
 
To create/update your Google Form items and properties by converting Google Spreadsheet content values in a certain format.
 
#### *Execute Form*

 1. Click *sheet2form > Export Form* of the Google Spreadsheet toolbar.
 1. Your Google Form is automatically created with use of ActiveSheet contents of ActiveSpreadsheet, set title by `title` row value. 
  
#### *Execute Form...* 

 1. Click *sheet2form > Export Form...* of the Google Spreadsheet toolbar.
 1. The inputDialog window (Step 1 of 3) popups, then fill in the form title (default is using `title` row value).
 1. The inputDialog window (Step 2 of 3) popups, then fill in the Spreadsheet ID or URL to convert (default is using ActiveSpreadsheet).
 1. The inputDialog window (Step 3 of 3) popups, then fill in the index number of sheet to convert (default is using ActiveSheet).
 1. Your Google Form is automatically created/updated.
 1. The message dialog of the URL of exported form is shown.
  
### Import Form

Update your form definitions in your Google Spreadsheet in the format as described above.

#### *Import Form* 

 1. Click *sheet2form > Import Form* of the Google Spreadsheet toolbar.
 1. The active sheet of the Google Spreadsheet content is automatically updated with specified form by `id` row value.

#### *Import Form...*

 1. Click *sheet2form > Import Form...* of the Google Spreadsheet toolbar.
 1. The inputDialog window (Step 1 of 3) popups, then fill in the the Form ID or URL to convert.
 1. The inputDialog window (Step 2 of 3) popups, then fill in the Spreadsheet ID or URL to update (default is using ActiveSpreadsheet).
 1. The inputDialog window (Step 3 of 3) popups, then fill in the index number of sheet to update (default is using ActiveSheet).
 1. Your Google Spreadsheet content is automatically updated.
