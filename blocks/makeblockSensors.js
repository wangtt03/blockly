/**
 * @fileoverview Sensor blocks for MakeBlock.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.makeblockSensors');

goog.require('Blockly.Blocks');

Blockly.Blocks['makeblockColour_rgb'] = {
    /**
     * Block for composing a colour from RGB components.
     * @this Blockly.Block
     */
    init : function() {
        //this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL);
        this.setColour(Blockly.CAT_COLOUR_RGB);
        this.appendValueInput('RED').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_TITLE).appendField(Blockly.Msg.COLOUR_RGB_RED);
        this.appendValueInput('GREEN').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_GREEN);
        this.appendValueInput('BLUE').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_BLUE);
        this.setOutput(true, 'Colour');
        this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP);
    }
};
