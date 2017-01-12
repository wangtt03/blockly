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
Blockly.Blocks['naoSensors_touchsensors'] = {
	    /**
	     * Get the current reading from one of the touchsensors.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var position = new Blockly.FieldDropdown([ 
	        	[ Blockly.Msg.NAO_TOUCH_HAND, 'HAND' ], 
	        	[ Blockly.Msg.NAO_TOUCH_BUMPER, 'BUMPER' ],
	        	[Blockly.Msg.NAO_HEADSENSOR, 'HEAD']
	        ]);
	        var side = new Blockly.FieldDropdown([ 
	        	[Blockly.Msg.NAO_TOUCH_LEFT, 'LEFT'], 
	        	[Blockly.Msg.NAO_TOUCH_RIGHT, 'RIGHT'],
	        	[Blockly.Msg.NAO_TOUCH_FRONT, 'FRONT'],
	        	[Blockly.Msg.NAO_TOUCH_MIDDLE, 'MIDDLE'],
	        	[Blockly.Msg.NAO_TOUCH_REAR, 'REAR']
	        ]);
	        this.appendDummyInput().appendField('Is ' + Blockly.Msg.NAO_TOUCHSENSOR).appendField(position, 'POSITION').appendField(side, 'SIDE').appendField(Blockly.Msg.NAO_TOUCHED);
	        this.setOutput(true, 'Boolean');
	        this.setTooltip(Blockly.Msg.NAO_TOUCHSENSOR_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_sonar'] = {
	    /**
	     * Get the current reading from the sonar.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_SONAR);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_SONAR_TOOLTIP);
	    }
	};

Blockly.Blocks['naoSensors_gyrometer'] = {
	    /**
	     * Get the current reading from the gyro sensor.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_GYROMETER).appendField(dropdown, 'COORDINATE');
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_GYROMETER_TOOLTIP);
	    }
	};


Blockly.Blocks['naoSensors_accelerometer'] = {
	    /**
	     * Get the current reading from the accelerometer.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ], [ 'Z', 'Z' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_ACCELEROMETER).appendField(dropdown, 'COORDINATE');
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_ACCELEROMETER_TOOLTIP);
	    }
	};

Blockly.Blocks['naoSensors_fsr'] = {
	    /**
	     * Get the current reading from the accelerometer.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var side = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_TOUCH_LEFT, 'LEFT' ], [ Blockly.Msg.NAO_TOUCH_RIGHT, 'RIGHT' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_FSR).appendField(side, 'SIDE');
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_FSR_TOOLTIP);
	    }
	};

Blockly.Blocks['naoSensors_naoMark'] = {
	    /**
	     * Get the number of a detected NAOMark.
	     */

	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_NAOMARK);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_NAOMARK_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_learnFace'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendValueInput('NAME').appendField(Blockly.Msg.NAO_LEARNFACEOF);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.NAO_LEARNFACE_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_forgetFace'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendValueInput('NAME').appendField(Blockly.Msg.NAO_FORGETFACEOF);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.NAO_FORGETFACE_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_detectFace'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_DETECTFACE);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_DETECTFACE_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_learnObject'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendValueInput('NAME').appendField(Blockly.Msg.NAO_LEARNOBJECT);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.NAO_LEARNOBJECT_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_forgetObject'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendValueInput('NAME').appendField(Blockly.Msg.NAO_FORGETOBJECT);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.NAO_FORGETOBJECT_TOOLTIP);
	    }
};

Blockly.Blocks['naoSensors_detectObject'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.NAO_DETECTOBJECT);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.NAO_DETECTOBJECT_TOOLTIP);
	    }
};