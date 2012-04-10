define("ace/theme/tomorrow_night",[], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night";
exports.cssText = "\
.ace-tomorrow-night .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-tomorrow-night .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-tomorrow-night .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-tomorrow-night .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-tomorrow-night .ace_scroller {\
  background-color: #1D1F21;\
}\
\
.ace-tomorrow-night .ace_text-layer {\
  cursor: text;\
  color: #C5C8C6;\
}\
\
.ace-tomorrow-night .ace_cursor {\
  border-left: 2px solid #AEAFAD;\
}\
\
.ace-tomorrow-night .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #AEAFAD;\
}\
 \
.ace-tomorrow-night .ace_marker-layer .ace_selection {\
  background: #373B41;\
}\
\
.ace-tomorrow-night .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-tomorrow-night .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #4B4E55;\
}\
\
.ace-tomorrow-night .ace_marker-layer .ace_active_line {\
  background: #282A2E;\
}\
\
.ace-tomorrow-night .ace_marker-layer .ace_selected_word {\
  border: 1px solid #373B41;\
}\
       \
.ace-tomorrow-night .ace_invisible {\
  color: #4B4E55;\
}\
\
.ace-tomorrow-night .ace_keyword, .ace-tomorrow-night .ace_meta {\
  color:#B294BB;\
}\
\
.ace-tomorrow-night .ace_keyword.ace_operator {\
  color:#8ABEB7;\
}\
\
.ace-tomorrow-night .ace_constant.ace_language {\
  color:#DE935F;\
}\
\
.ace-tomorrow-night .ace_constant.ace_numeric {\
  color:#DE935F;\
}\
\
.ace-tomorrow-night .ace_constant.ace_other {\
  color:#CED1CF;\
}\
\
.ace-tomorrow-night .ace_invalid {\
  color:#CED2CF;\
background-color:#DF5F5F;\
}\
\
.ace-tomorrow-night .ace_invalid.ace_deprecated {\
  color:#CED2CF;\
background-color:#B798BF;\
}\
\
.ace-tomorrow-night .ace_support.ace_constant {\
  color:#DE935F;\
}\
\
.ace-tomorrow-night .ace_fold {\
    background-color: #81A2BE;\
    border-color: #C5C8C6;\
}\
\
.ace-tomorrow-night .ace_support.ace_function {\
  color:#81A2BE;\
}\
\
.ace-tomorrow-night .ace_storage {\
  color:#B294BB;\
}\
\
.ace-tomorrow-night .ace_storage.ace_type,  .ace-tomorrow-night .ace_support.ace_type{\
  color:#B294BB;\
}\
\
.ace-tomorrow-night .ace_variable {\
  color:#81A2BE;\
}\
\
.ace-tomorrow-night .ace_variable.ace_parameter {\
  color:#DE935F;\
}\
\
.ace-tomorrow-night .ace_string {\
  color:#B5BD68;\
}\
\
.ace-tomorrow-night .ace_string.ace_regexp {\
  color:#CC6666;\
}\
\
.ace-tomorrow-night .ace_comment {\
  color:#969896;\
}\
\
.ace-tomorrow-night .ace_variable {\
  color:#CC6666;\
}\
\
.ace-tomorrow-night .ace_meta.ace_tag {\
  color:#CC6666;\
}\
\
.ace-tomorrow-night .ace_entity.ace_other.ace_attribute-name {\
  color:#CC6666;\
}\
\
.ace-tomorrow-night .ace_entity.ace_name.ace_function {\
  color:#81A2BE;\
}\
\
.ace-tomorrow-night .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace-tomorrow-night .ace_markup.ace_heading {\
  color:#B5BD68;\
}";

    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});

