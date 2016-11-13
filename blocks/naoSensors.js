/**
 * @fileoverview Sensor blocks for NAO.
 * @requires Blockly.Blocks
 * @author Janis
 */

'use strict';

goog.provide('Blockly.Blocks.naoSensors');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

Blockly.Blocks['naoSensors_headsensors'] = {
	    /**
	     * Get the current reading from one of the headsensors.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.TOUCH_FRONT, 'FRONT' ], [ Blockly.Msg.TOUCH_MIDDLE, 'MIDDLE' ], [ Blockly.Msg.TOUCH_REAR, 'REAR' ] ]);
	        this.appendDummyInput().appendField('Is ' + Blockly.Msg.HEADSENSOR).appendField(dropdown, 'POSITION').appendField(Blockly.Msg.TOUCHED);
	        this.setOutput(true, 'Boolean');
	        this.setTooltip(Blockly.Msg.HEADSENSOR_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_touchsensors'] = {
	    /**
	     * Get the current reading from one of the touchsensors.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var position = new Blockly.FieldDropdown([ [ Blockly.Msg.TOUCH_HAND, 'HAND' ], [ Blockly.Msg.TOUCH_BUMPER, 'BUMPER' ] ]);
	        var side = new Blockly.FieldDropdown([ [ Blockly.Msg.TOUCH_LEFT, 'LEFT' ], [ Blockly.Msg.TOUCH_RIGHT, 'RIGHT' ] ]);
	        this.appendDummyInput().appendField('Is ' + Blockly.Msg.TOUCHSENSOR).appendField(position, 'POSITION').appendField(side, 'SIDE').appendField(Blockly.Msg.TOUCHED);
	        this.setOutput(true, 'Boolean');
	        this.setTooltip(Blockly.Msg.TOUCHSENSOR_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_sonar'] = {
	    /**
	     * Get the current reading from the sonar.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.SONAR);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.SONAR_TOOLTIP);
	    }
	};

Blockly.Blocks['naoSensors_selectCamera'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var camera = new Blockly.FieldDropdown([ [ Blockly.Msg.CAMERA_TOP, '0' ], [ Blockly.Msg.CAMERA_BOTTOM, '1' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.SELECTCAMERA).appendField(camera, 'CAMERA');
	        this.setTooltip(Blockly.Msg.SELECTCAMERA_TOOLTIP);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	    }
};


Blockly.Blocks['naoSensors_naoMark'] = {
	    /**
	     * Get the number of a detected NAOMark.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.NAOMARK);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAOMARK_TOOLTIP);
	    }
};


Blockly.Blocks['naoSensors_takePicture'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.TAKEPICTURE);
	        this.setTooltip(Blockly.Msg.TAKEPICTURE_TOOLTIP);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	    }
};

Blockly.Blocks['naoSensors_recordVideo'] = {
	    /**
	     * Get the current reading from the accelerometer.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var resolution = new Blockly.FieldDropdown([ [ Blockly.Msg.QQVGA, '0' ], [ Blockly.Msg.QVGA, '1' ], [ Blockly.Msg.VGA, '2' ] ]);
	        var camera = new Blockly.FieldDropdown([ [ Blockly.Msg.CAMERA_TOP, '0' ], [ Blockly.Msg.CAMERA_BOTTOM, '1' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.RECORDVIDEO);
	        this.appendDummyInput().appendField(Blockly.Msg.RESOLUTION).appendField(resolution, 'RESOLUTION');
	        this.appendDummyInput().appendField(Blockly.Msg.CAMERA).appendField(camera, 'CAMERA');
	        this.appendValueInput('DURATION').appendField(Blockly.Msg.DURATION).setCheck('Number');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.RECORDVIDEO_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_gyrometer'] = {
	    /**
	     * Get the current reading from the gyro sensor.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.GYROMETER).appendField(dropdown, 'COORDINATE');
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.GYROMETER_TOOLTIP);
	    }
	};


Blockly.Blocks['naoSensors_accelerometer'] = {
	    /**
	     * Get the current reading from the accelerometer.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ], [ 'Z', 'Z' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.ACCELEROMETER).appendField(dropdown, 'COORDINATE');
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.ACCELEROMETER_TOOLTIP);
	    }
	};

Blockly.Blocks['naoSensors_fsr'] = {
	    /**
	     * Get the current reading from the accelerometer.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var side = new Blockly.FieldDropdown([ [ Blockly.Msg.TOUCH_LEFT, 'LEFT' ], [ Blockly.Msg.TOUCH_RIGHT, 'RIGHT' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.FSR).appendField(side, 'SIDE');
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.FSR_TOOLTIP);
	    }
	};






