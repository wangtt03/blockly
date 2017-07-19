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