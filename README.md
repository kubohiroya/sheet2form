# sheet2form

Google Apps Script to convert Google Form from/to Google Spreadsheet.

* exportForm: 
   create/update your Google Form items and preferences by converting Google Spreadsheet content values in a certain format.
   
* importForm:
   update your Google Spreadsheet content values in a certain format by converting Google Form items and form preferences.
  
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
  
Each row stands for a command and a set of properties to create a form item:
 * Row 1-6: example to set form preferences.
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


#### Add pageBreak and goToPage navigation by multipleChoice

(FIXME: to be written)

* choice item with NAVIGATION value
* pageBreak item with GO_TO_PAGE label value

https://docs.google.com/forms/d/e/1FAIpQLSdGJawVXHJ-Q8J2OQ_YjKOd2TR-ViIkM21exFOkJ8_-aJLMlA/viewform

#### setup as Quiz form 

(FIXME: to be written)

* Form#setIsQuiz
* Item#setPoint, Item#setFeedbackForCorrect, Item#setFeedbackForIncorrect
* Choice#isCorrectAnswer

https://docs.google.com/forms/d/e/1FAIpQLSc37hbcvgFYFXyLgD4ZBdK0eiLO-i3woPcf_aBGCtSN7jZMDQ/viewform

#### Add Feedback by reference

(FIXME: to be written)

* feedback label with prefix \# 
* feedback reference with prefix \# 

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
1. Open the ScriptEditor from the spreadsheet to create a Container Bounded Script Project.
1. Add a new Google Apps Script file in the project by copying `./bridge.gs` file content in this repository.

#### 2. Enable API
1. Enable `Google Drive API`, `Google Sheets API` by `Advanced Google Services` and `Google API Console` from `Resource` menu in the ScriptEditor.
 
#### 3. Create a Standalone Script hosted on GitHub

1. Create an empty Google Apps Script on your GoogleDrive as a Standalone Script Project Project.
1. Setup `node-google-apps-script` so as to create your credential file and `./gapps.config.json` file.
  cf. https://www.npmjs.com/package/node-google-apps-script
1. Build and Dist the library with `npm run build && npm run dist` 

#### 4. Bind the spreadsheet to the Standalone Script Project
1. In the Standalone Script Project, COPY the value of 'Project Key' project property.
1. In the Container Bounded Script Project, click `Resource` -> `Library` menu to open `Adding Library`, 
 PASTE the copy of 'Project Key', so as to setup your Standalone Script Project as the library referenced by `sheet2form` variable.
 
#### 5. Setup onOpen event trigger 
1. Setup a trigger to execute function `onOpen` with spreadsheet `onOpen` event.
1. Execute function `onOpen`.

## Usage 
### exportForm 
 
Create/update your Google Form items and preferences by converting Google Spreadsheet content values in a certain format.
 
#### `executeForm`

 1. Execute the function `exportForm` from customized menu `Form I/O` in the spreadsheet UI.
 1. Your Google Form items and preferences, with using `title` row value and ActiveSheet of ActiveSpreadsheet, are created/updated.
  
#### `executeForm...` 

 1. Execute the function `exportForm...` from customized menu `Form I/O` in the spreadsheet UI.
 1. The inputDialog window (Step 1 of 3) popups, then fill in the form title (default is using `title` row value).
 1. The inputDialog window (Step 2 of 3) popups, then fill in the Spreadsheet ID or URL to convert (default is using ActiveSpreadsheet).
 1. The inputDialog window (Step 3 of 3) popups, then fill in the index number of sheet to convert (default is using ActiveSheet).
 1. Your Google Form items and preferences are automatically created/updated.
 1. The message dialog of the URL of exported form is shown.
  
### importForm

Update your form definitions in your Google Spreadsheet in the format as described above.

#### `importForm` 

 1. Execute the function `importForm` from customized menu `Form I/O` in the spreadsheet UI.
 1. The active sheet of the Google Spreadsheet content is automatically updated with specified form by `id` row.

#### `importForm...`

 1. Execute the function `importForm...` from customized menu `Form I/O` in the spreadsheet UI.
 1. The inputDialog window (Step 1 of 3) popups, then fill in the the Form ID or URL to convert.
 1. The inputDialog window (Step 2 of 3) popups, then fill in the Spreadsheet ID or URL to update (default is using ActiveSpreadsheet).
 1. The inputDialog window (Step 3 of 3) popups, then fill in the index number of sheet to update (default is using ActiveSheet).
 1. Your Google Spreadsheet content is automatically updated.
