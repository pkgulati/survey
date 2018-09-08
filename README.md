### Installation
you must run npm install and bower install,
You must be running a mongodb instance

### To vulcanize 
vulcanize all-imports.html > all-imports-vulcanized.html

### filter
{"where" : {"FEEDBACK" : { "inq" : ["Modest", "Pleasing", "Ok", "Arrogant"]}}}

{ "fields": { "NAME" : true} , "where" : {"FEEDBACK" : { "inq" : ["Modest", "Pleasing", "Ok", "Arrogant"]}}}

{ "fields": { "GIS_ID" : true} , "where" : {"FEEDBACK" : { "inq" : ["Modest", "Pleasing", "Ok", "Arrogant"]}}}


{ "fields": { "GIS_ID" : true, "REMARKS" : true} , "where" : {"REMARKS" : {"gt" : ""} }}

{ "fields2": { "FEEDBACK":true, "GIS_ID" : true, "REMARKS" : true} , "where" : {"_modifiedOn" : {"gt" : "2018-09-08T00:17:01.958Z"} }}