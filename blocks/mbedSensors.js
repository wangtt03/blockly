/**
 * @fileoverview Sensor blocks for EV3.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.mbedSensors');

goog.require('Blockly.Blocks');

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
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var sensorType;
        var sensorPort = new Blockly.FieldDropdown([ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ]);
        if (this.workspace.device === 'nxt') {
            sensorType = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_TOUCH + Blockly.Msg.SENSOR_PRESSED, 'TOUCH' ],
                    [ Blockly.Msg.MODE_SOUND + ' ' + Blockly.Msg.SENSOR_SOUND, 'SOUND_SOUND' ],
                    [ Blockly.Msg.MODE_LIGHT + ' ' + Blockly.Msg.SENSOR_LIGHT, 'LIGHT_LIGHT' ],
                    [ Blockly.Msg.MODE_AMBIENTLIGHT + ' ' + Blockly.Msg.SENSOR_LIGHT, 'LIGHT_AMBIENTLIGHT' ],
                    [ Blockly.Msg.MODE_DISTANCE + ' ' + Blockly.Msg.SENSOR_ULTRASONIC, 'ULTRASONIC_DISTANCE' ],
                    [ Blockly.Msg.MODE_ROTATION + ' ' + Blockly.Msg.SENSOR_ENCODER, 'ENCODER_ROTATION' ],
                    [ Blockly.Msg.MODE_DEGREE + ' ' + Blockly.Msg.SENSOR_ENCODER, 'ENCODER_DEGREE' ],
                    [ Blockly.Msg.SENSOR_KEY + ' ' + Blockly.Msg.SENSOR_PRESSED, 'KEYS_PRESSED' ],
                    [ Blockly.Msg.MODE_COLOUR + ' ' + Blockly.Msg.SENSOR_COLOUR, 'COLOUR_COLOUR' ],
                    [ Blockly.Msg.MODE_LIGHT + ' ' + Blockly.Msg.SENSOR_COLOUR, 'COLOUR_LIGHT' ],
                    [ Blockly.Msg.MODE_AMBIENTLIGHT + ' ' + Blockly.Msg.SENSOR_COLOUR, 'COLOUR_AMBIENTLIGHT' ] ], function(option) {
                if (option && this.sourceBlock_.getFieldValue('SENSORTYPE') !== option) {
                    this.sourceBlock_.updateShape_(option);
                }
            });
            this.data = 'nxt';
            this.sensorType_ = 'TOUCH';
            this.setOutput(true, 'Boolean');
        } else {
            sensorType = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_TOUCH + Blockly.Msg.SENSOR_PRESSED, 'TOUCH' ],
                    [ Blockly.Msg.MODE_DISTANCE + ' ' + Blockly.Msg.SENSOR_ULTRASONIC, 'ULTRASONIC_DISTANCE' ],
                    [ Blockly.Msg.MODE_PRESENCE + ' ' + Blockly.Msg.SENSOR_ULTRASONIC, 'ULTRASONIC_PRESENCE' ],
                    [ Blockly.Msg.MODE_COLOUR + ' ' + Blockly.Msg.SENSOR_COLOUR, 'COLOUR_COLOUR' ],
                    [ Blockly.Msg.MODE_LIGHT + ' ' + Blockly.Msg.SENSOR_COLOUR, 'COLOUR_LIGHT' ],
                    [ Blockly.Msg.MODE_AMBIENTLIGHT + ' ' + Blockly.Msg.SENSOR_COLOUR, 'COLOUR_AMBIENTLIGHT' ],
                    [ Blockly.Msg.MODE_DISTANCE + ' ' + Blockly.Msg.SENSOR_INFRARED, 'INFRARED_DISTANCE' ],
                    [ Blockly.Msg.MODE_ROTATION + ' ' + Blockly.Msg.SENSOR_ENCODER, 'ENCODER_ROTATION' ],
                    [ Blockly.Msg.MODE_DEGREE + ' ' + Blockly.Msg.SENSOR_ENCODER, 'ENCODER_DEGREE' ],
                    [ Blockly.Msg.SENSOR_KEY + ' ' + Blockly.Msg.SENSOR_PRESSED, 'KEYS_PRESSED' ],
                    [ Blockly.Msg.MODE_ANGLE + ' ' + Blockly.Msg.SENSOR_GYRO, 'GYRO_ANGLE' ],
                    [ Blockly.Msg.MODE_RATE + ' ' + Blockly.Msg.SENSOR_GYRO, 'GYRO_RATE' ], [ Blockly.Msg.SENSOR_TIME, 'TIME' ] ], function(option) {
                if (option && this.sourceBlock_.getFieldValue('SENSORTYPE') !== option) {
                    this.sourceBlock_.updateShape_(option);
                }
            });
            this.data = 'ev3';
            this.sensorType_ = 'TOUCH';
        }

        this.appendDummyInput('DROPDOWN').appendField(Blockly.Msg.GET, 'GET').appendField(sensorType, 'SENSORTYPE');
        this.setTooltip(Blockly.Msg.GETSAMPLE_TOOLTIP);
        this.setMovable(false);
        this.setDeletable(false);
        this.updateShape_(this.sensorType_);
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
        this.sensorType_ = option;
        var key;
        var motorPort;
        var sensorNum;
        var sensorPort = new Blockly.FieldDropdown([ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ]);
        if (this.workspace.device === 'nxt') {
            key = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_KEY_ENTER, 'ENTER' ], [ Blockly.Msg.SENSOR_KEY_LEFT, 'LEFT' ],
                    [ Blockly.Msg.SENSOR_KEY_RIGHT, 'RIGHT' ] ]);
            motorPort = new Blockly.FieldDropdown([ [ 'Motor Port A', 'A' ], [ 'Motor Port B', 'B' ], [ 'Motor Port C', 'C' ] ]);
            sensorNum = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_TIMER + ' 1', '1' ] ]);
            this.data = 'nxt';
        } else {
            key = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_KEY_ENTER, 'ENTER' ], [ Blockly.Msg.SENSOR_KEY_UP, 'UP' ],
                    [ Blockly.Msg.SENSOR_KEY_DOWN, 'DOWN' ], [ Blockly.Msg.SENSOR_KEY_LEFT, 'LEFT' ], [ Blockly.Msg.SENSOR_KEY_RIGHT, 'RIGHT' ],
                    [ Blockly.Msg.SENSOR_KEY_ESCAPE, 'ESCAPE' ], [ Blockly.Msg.SENSOR_KEY_ANY, 'ANY' ] ]);
            motorPort = new Blockly.FieldDropdown([ [ 'Motor Port A', 'A' ], [ 'Motor Port B', 'B' ], [ 'Motor Port C', 'C' ], [ 'Motor Port D', 'D' ] ]);
            sensorNum = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_TIMER + ' 1', '1' ], [ Blockly.Msg.SENSOR_TIMER + ' 2', '2' ],
                    [ Blockly.Msg.SENSOR_TIMER + ' 3', '3' ], [ Blockly.Msg.SENSOR_TIMER + ' 4', '4' ], [ Blockly.Msg.SENSOR_TIMER + ' 5', '5' ] ]);
            this.data = 'ev3';
        }

        var input = this.getInput('DROPDOWN');
        var toRemove = [];
        for (var i = 0, field; field = input.fieldRow[i]; i++) {
            if (field.name === 'SENSORTYPE' || field.name === 'GET') {
                continue;
            }
            toRemove.push(field.name);
        }
        for (var j = 0; j < toRemove.length; j++) {
            input.removeField(toRemove[j]);
        }
        if (this.sensorType_ == 'ENCODER_ROTATION') {
            input.appendField(motorPort, 'MOTORPORT');
            this.appendValue_('NUM_REV', 2);
            this.setOutput(true, 'Number');
        } else if (this.sensorType_ == 'ENCODER_DEGREE') {
            input.appendField(motorPort, 'MOTORPORT');
            this.appendValue_('NUM_REV', 180);
            this.setOutput(true, 'Number');
        } else if (this.sensorType_ == 'KEYS_PRESSED') {
            input.appendField(key, 'KEY');
            this.appendValue_('BOOL');
            this.setOutput(true, 'Boolean');
        } else if (this.sensorType_ == 'TIME') {
            input.appendField(Blockly.Msg.SENSOR_MS_TIMER).appendField(sensorNum, 'SENSORNUM');
            this.appendValue_('NUM_REV', 500);
            this.setOutput(true, 'Number');
        } else {
            input.appendField(sensorPort, 'SENSORPORT');
            if (this.sensorType_ == 'TOUCH') {
                this.appendValue_('BOOL');
                this.setOutput(true, 'Boolean');
            } else if (this.sensorType_ == 'SOUND_SOUND') {
                this.appendValue_('NUM_REV', 50);
                sensorPort.setValue('2');
                this.setOutput(true, 'Number');
            } else if (this.sensorType_ == 'LIGHT_AMBIENTLIGHT' || this.sensorType_ == 'LIGHT_LIGHT') {
                this.appendValue_('NUM', 50);
                sensorPort.setValue('3');
                this.setOutput(true, 'Number');
            } else if (this.sensorType_ == 'GYRO_ANGLE' || this.sensorType_ == 'GYRO_RATE') {
                this.appendValue_('NUM_REV', 90);
                sensorPort.setValue('2');
                this.setOutput(true, 'Number');
            } else if (this.sensorType_ == 'ULTRASONIC_DISTANCE') {
                this.appendValue_('NUM');
                sensorPort.setValue('4');
                this.setOutput(true, 'Number');
            } else if (this.sensorType_ == 'ULTRASONIC_PRESENCE') {
                this.appendValue_('BOOL');
                sensorPort.setValue('4');
                this.setOutput(true, 'Boolean');
            } else if (this.sensorType_ == 'COLOUR_COLOUR') {
                this.appendValue_('COLOUR');
                sensorPort.setValue('3');
                this.setOutput(true, 'Colour');
            } else if (this.sensorType_ == 'COLOUR_LIGHT' || this.sensorType_ == 'COLOUR_LIGHT') {
                this.appendValue_('NUM', 50);
                sensorPort.setValue('3');
                this.setOutput(true, 'Number');
            } else if (this.sensorType_ == 'INFRARED_DISTANCE') {
                this.appendValue_('NUM');
                sensorPort.setValue('4');
                this.setOutput(true, 'Number');
            }
        }
        // sensorType.setValue(this.sensorType_);
    },

    /**
     * Called whenever the blocks shape has changed.
     *
     * @this Blockly.Block
     */
    appendValue_ : function(type, value) {
        value = value || 30;
        var logComp = this.getParent();
        if (logComp && logComp.type != 'logic_compare')
            logComp = null;
        if (logComp) {
            // change inputs, if block is in logic_compare and not rebuild from mutation.
            if (logComp.getInputTargetBlock('B')) {
                logComp.getInputTargetBlock('B').dispose();
            }
            var block = null;
            logComp.updateShape(type);
            if (type == 'NUM' || type == 'NUM_REV') {
                block = this.workspace.newBlock('math_number');
                block.setFieldValue(value.toString(), 'NUM');
            } else if (type == 'BOOL') {
                block = this.workspace.newBlock('logic_boolean');
            } else {
                block = this.workspace.newBlock('robColour_picker');
                block.setFieldValue('#b30006', 'COLOUR')
            }
            block.initSvg();
            block.render();
            if (!logComp.inTask) {
                block.setInTask(false);
            }
            var valueB = logComp.getInput('B');
            valueB.connection.connect(block.outputConnection);
        }
    }
};

Blockly.Blocks['mbedSensors_key_isPressed'] = {
    /**
     * Is the specific key (button of the brick) pressed?
     *
     * @constructs mbedSensors_key_isPressed
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            KEY - Enter, Up, Down, Left, Right, Escape or Any
     * @returns immediately
     * @returns {Boolean}
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var key = new Blockly.FieldDropdown([ [ 'A', 'button_a' ], [ 'B', 'button_b' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_KEY).appendField(key, 'KEY').appendField(Blockly.Msg.SENSOR_IS_PRESSED);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.KEY_ISPRESSED_TOOLTIP);
    }
};

Blockly.Blocks['mbedSensors_gesture_isActive'] = {
    /**
     * Get the current distance from the ultrasonic sensor.
     *
     * @constructs mbedSensors_ultrasonic_getDistance
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MODE - Distance or Presence
     * @param {String/dropdown}
     *            SENSORPORT - 1, 2, 3 or 4
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var gesture = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_GESTURE_UP, 'UP' ], [ Blockly.Msg.SENSOR_GESTURE_DOWN, 'DOWN' ],
                [ Blockly.Msg.SENSOR_GESTURE_FACE_UP, 'FACE_UP' ], [ Blockly.Msg.SENSOR_GESTURE_FACE_DOWN, 'FACE_DOWN' ],
                [ Blockly.Msg.SENSOR_GESTURE_SHAKE, 'SHAKE' ], [ Blockly.Msg.SENSOR_GESTURE_FREEFALL, 'FREEFALL' ] ]); // [ 'left', 'LEFT' ], [ 'right', 'RIGHT' ], [ '3g', 'G3' ], [ '6g', 'G6' ], [ '8g', 'G8' ] ]);
        this.appendDummyInput().appendField(gesture, 'GESTURE').appendField(Blockly.Msg.SENSOR_GESTURE_ACTIVE);
        this.setOutput(true, 'Boolean');
        //  this.setTooltip(Blockly.Msg.ULTRASONIC_GETSAMPLE_TOOLTIP);
    }
};

Blockly.Blocks['mbedSensors_compass_getSample'] = {
    /**
     * Get the current reading from the compass sensor.
     *
     * @constructs mbedSensors_gyro_getSample
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MODE - Angle or Rate
     * @param {String/dropdown}
     *            SENSORPORT - 1, 2, 3 or 4
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_GET_SAMPLE).appendField(Blockly.Msg.SENSOR_COMPASS);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.COMPASS_GETSAMPLE_TOOLTIP);
    }
};

Blockly.Blocks['mbedSensors_temperature_getSample'] = {
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
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_GET_SAMPLE).appendField(Blockly.Msg.SENSOR_TEMPERATURE);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.TEMPERATURE_GETSAMPLE_TOOLTIP);
    }
};

Blockly.Blocks['mbedSensors_timer_reset'] = {
    /**
     * Reset the timer.
     *
     * @constructs mbedSensors_timer_reset
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            TIMER - 1-10
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var sensorNum;
        sensorNum = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_TIMER + ' 1', '1' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_RESET).appendField(sensorNum, 'SENSORNUM').appendField(Blockly.Msg.SENSOR_RESET_II);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TIMER_RESET_TOOLTIP);
    }
};

Blockly.Blocks['mbedSensors_timer_getSample'] = {
    /**
     * Get the current reading from the timer.
     *
     * @constructs mbedSensors_timer_getSample
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            TIMER - 1-10
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        var sensorNum;
        sensorNum = new Blockly.FieldDropdown([ [ Blockly.Msg.SENSOR_TIMER + ' 1', '1' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_GET_SAMPLE).appendField(sensorNum, 'SENSORNUM').appendField(Blockly.Msg.SENSOR_MS_TIMER);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.TIMER_GETSAMPLE_TOOLTIP);
    }
};

Blockly.Blocks['mbedSensors_ambientLight_getSample'] = {
    /**
     * Get the current reading from a light sensor.
     * 
     * @constructs mbedSensors_ambientLight_getSample
     * @this.Blockly.Block
     * @returns immediately
     * @returns {Number}
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_SENSOR_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.SENSOR_GET_SAMPLE).appendField(Blockly.Msg.MODE_AMBIENTLIGHT);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.LIGHT_GETSAMPLE_TOOLTIP);
    }
};
