/**
 * @fileoverview Action blocks for arduino-based robots.
 * @requires Blockly.Blocks
 * @author Artem Vinokurov
 */
'use strict';

goog.provide('Blockly.Blocks.cognitiveService');

goog.require('Blockly.Blocks');

Blockly.Blocks['brickpiFace_Detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_FACE_DETECT);
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiSpeech_Recognition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_SPEECH_RECOGNITION);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiSpeak'] = {
  init: function() {
    this.appendValueInput("OUT")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COGNITIVE_SPEEK);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiOCR'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_OCR);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiEmotion_Recognition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_EMOTION_RECOGNITION);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiDescribe_Image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_DESCRIBE_IMAGE);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiSet_Wakeup_Word'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_CHOOSE_WAKE_WORD_FOR_JASPER)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COGNITIVE_WAKEWORD_HELLO,"HELLO"], [Blockly.Msg.COGNITIVE_WAKEWORD_START,"START"], [Blockly.Msg.COGNITIVE_WAKEWORD_LAOJIA,"LAOJIA"]]), "WAKEUPWORD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiListen_For_Some_Seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_JASPER_LISTEN_FOR)
        .appendField(new Blockly.FieldDropdown([["5","FIVE_SECOND"], ["8","EIGHT_SECOND"], ["10","TEN_SECOND"]]), "SECOND")
        .appendField(Blockly.Msg.COGNITIVE_SECONDS);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['brickpiText_Contain'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COGNITIVE_CONTAINS);
    this.appendValueInput("SUBSTRING")
        .setCheck("String");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};