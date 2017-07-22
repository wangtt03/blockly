/**
 * @fileoverview Action blocks for arduino-based robots.
 * @requires Blockly.Blocks
 * @author Artem Vinokurov
 */
'use strict';

goog.provide('Blockly.Blocks.cognitiveService');

goog.require('Blockly.Blocks');

Blockly.Blocks['face_detect'] = {
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