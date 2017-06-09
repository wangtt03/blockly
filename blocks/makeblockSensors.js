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

Blockly.Blocks['makeblockSensors_gyroscope_getSample'] = {
    /**
     * Get a sample from the gyroscope.
     *
     * @constructs makeSensors_gyroscope_getSample
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MODE - angle or acceleration mode of the gyroscope
     * @param {String/dropdown}
     *            GYROAXIS - X, Y or Z axis of the gyroscope.
     * @param {String/dropdown}
     *            SENSORPORT - 1, 2, 3 or 4
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var axis = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ], ['Z', 'Z'] ], 
            function(option) {
               this.updateShape_(option);
        });
        var sensorPort = new Blockly.FieldDropdown([ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ]);
        var mode = new Blockly.FieldDropdown([ [ 'angle', 'angle' ], [ 'acceleration', 'acceleration' ] ]);
        this.appendDummyInput().appendField(mode, 'GYROMODE').appendField(Blockly.Msg.SENSOR_GET_SAMPLE).appendField(axis, 'GYROAXIS').appendField(Blockly.Msg.SENSOR_GYRO).appendField(sensorPort, 'SENSORPORT');
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GYRO_TOOLTIP);
    },

    updateShape_ : function(option) {
        var input = this.getInput('DROPDOWN');
        for (var i = 0, field; field = input.fieldRow[i]; i++) {
            console.log(field.name);
            if (field.name === 'SENSORTYPE' || field.name === 'GET') {
                continue;
            }
            toRemove.push(field.name);
        }/*
        for (var j = 0; j < toRemove.length; j++) {
            input.removeField(toRemove[j]);
        }*/
    }
};

/**
 * @lends Block
 */

Blockly.Blocks['mbedSensors_getSample'] = {
    /**
     * Get the current reading from choosen sensor.
     * 
     * @constructs mbedSensors_getSample
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            SENSORPORT - 1, 2, 3 or 4
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */
    init : function() {
        
    },
    /**
     * Create XML to represent whether the sensor type has changed.
     * 
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom : function() {
        var container = document.createElement('mutation');
        container.setAttribute('input', this.sensorType_);
        return container;
    },
    /**
     * Parse XML to restore the sensor type.
     * 
     * @param {!Element}
     *            xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation : function(xmlElement) {
        var input = xmlElement.getAttribute('input');
        this.sensorType_ = input;
        this.updateShape_(this.sensorType_);
    },

    /**
     * Called whenever anything on the workspace changes.
     * 
     * @this Blockly.Block
     */
    /*
     * onchange : function() { if (!this.workspace) { // Block has been deleted.
     * return; } else if (this.update) this.updateShape_(); },
     */
    /**
     * Called whenever the shape has to change.
     * 
     * @this Blockly.Block
     */
    updateShape_ : function(option) {
        var input = this.getInput('DROPDOWN');
        for (var i = 0, field; field = input.fieldRow[i]; i++) {
            console.log(field.name);
            if (field.name === 'SENSORTYPE' || field.name === 'GET') {
                continue;
            }
            toRemove.push(field.name);
        }
    },

    /**
     * Called whenever the blocks shape has changed.
     * 
     * @this Blockly.Block
     */
    appendValue_ : function(type, value) {
        
    }
};
