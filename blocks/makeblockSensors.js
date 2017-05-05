/**
 * @fileoverview Sensor blocks for EV3.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.makeblockSensors');

goog.require('Blockly.Blocks');


Blockly.Blocks['makeblockSensors_temperature_getSample'] = {
    /**
     * Get the current reading from the compass sensor.
     *
     * @constructs mbedSensors_temperature_getSample
     * @this.Blockly.Block
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var sensorPort = new Blockly.FieldDropdown([ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_GET_SAMPLE).appendField(Blockly.Msg.SENSOR_TEMPERATURE).appendField(sensorPort, 'SENSORPORT');

        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.TEMPERATURE_GETSAMPLE_TOOLTIP);
    }
};
