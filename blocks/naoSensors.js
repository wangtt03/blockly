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

Blockly.Blocks['naoSensors_getSample'] = {
	    /**
	     * Get the current reading from chosen sensor.
	     *
	     * @constructs naoSensors_getSample
	     * @this.Blockly.Block
	     * @param {String/dropdown}
	     * @returns immediately
	     * @returns {Number}
	     * @memberof Block
	     */
	    init : function() {
	        this.setColour(Blockly.CAT_SENSOR_RGB);
	        var position = new Blockly.FieldDropdown([ 
	        	[ Blockly.Msg.NAO_TOUCH_HAND, 'HAND' ], 
	        	[ Blockly.Msg.NAO_TOUCH_BUMPER, 'BUMPER' ],
	        	[Blockly.Msg.NAO_HEADSENSOR, 'HEAD']
	        ]);
	        var touchside = new Blockly.FieldDropdown([ 
	        	[Blockly.Msg.NAO_TOUCH_LEFT, 'LEFT'], 
	        	[Blockly.Msg.NAO_TOUCH_RIGHT, 'RIGHT'],
	        	[Blockly.Msg.NAO_TOUCH_FRONT, 'FRONT'],
	        	[Blockly.Msg.NAO_TOUCH_MIDDLE, 'MIDDLE'],
	        	[Blockly.Msg.NAO_TOUCH_REAR, 'REAR']
	        ]);
	        var sensorType = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_TOUCHSENSOR, 'NAO_TOUCHSENSOR' ],
	                [ Blockly.Msg.NAO_DETECTFACE, 'NAO_DETECTFACE' ], [ Blockly.Msg.NAO_NAOMARK, 'NAO_NAOMARK' ], [ Blockly.Msg.NAO_SONAR, 'NAO_SONAR' ],
	                [ Blockly.Msg.NAO_GYROMETER, 'NAO_GYROMETER' ], [ Blockly.Msg.NAO_ACCELEROMETER, 'NAO_ACCELEROMETER' ], [ Blockly.Msg.NAO_FSR, 'NAO_FSR' ] ], function(option) {
	            if (option && this.sourceBlock_.getFieldValue('SENSORTYPE') !== option) {
	                this.sourceBlock_.updateShape_(option);
	            }
	        });
	        this.workspace.device === 'nao'
	        this.appendDummyInput('DROPDOWN').appendField(Blockly.Msg.GET, 'GET').appendField(sensorType, 'SENSORTYPE').appendField(position, 'POSITION').appendField(touchside, 'SIDE');
	        this.setOutput(true, 'Boolean');
	        this.sensorType_ = 'NAO_TOUCHSENSOR';
	        this.setTooltip(Blockly.Msg.GETSAMPLE_TOOLTIP);
	        this.setMovable(false);
	        this.setDeletable(false);
	        //this.updateShape_(this.sensorType_);
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
	        var position = new Blockly.FieldDropdown([ 
	        	[ Blockly.Msg.NAO_TOUCH_HAND, 'HAND' ], 
	        	[ Blockly.Msg.NAO_TOUCH_BUMPER, 'BUMPER' ],
	        	[Blockly.Msg.NAO_HEADSENSOR, 'HEAD']
	        ]);
	        var touchside = new Blockly.FieldDropdown([ 
	        	[Blockly.Msg.NAO_TOUCH_LEFT, 'LEFT'], 
	        	[Blockly.Msg.NAO_TOUCH_RIGHT, 'RIGHT'],
	        	[Blockly.Msg.NAO_TOUCH_FRONT, 'FRONT'],
	        	[Blockly.Msg.NAO_TOUCH_MIDDLE, 'MIDDLE'],
	        	[Blockly.Msg.NAO_TOUCH_REAR, 'REAR']
	        ]);
	        var gyrocoord = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ] ]);
	        var accelcoord = new Blockly.FieldDropdown([ [ 'X', 'X' ], [ 'Y', 'Y' ], [ 'Z', 'Z' ] ]);
	        var side = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_TOUCH_LEFT, 'LEFT' ], [ Blockly.Msg.NAO_TOUCH_RIGHT, 'RIGHT' ] ]);

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
	        if (this.sensorType_ == 'NAO_DETECTFACE') {
	            this.appendValue_('BOOL');
	            this.setOutput(true, 'Boolean');
	        } else if (this.sensorType_ == 'NAO_NAOMARK') {
	            this.appendValue_('BOOL');
	            this.setOutput(true, 'Boolean');
	        } else if (this.sensorType_ == 'NAO_SONAR') {
	            this.appendValue_('NUM_REV', 30);
	            this.setOutput(true, 'Number');
	        } else if (this.sensorType_ == 'NAO_GYROMETER') {
	            input.appendField(gyrocoord, 'COORDINATE');
	            this.appendValue_('NUM_REV', 1);
	            this.setOutput(true, 'Number');
	        } else if (this.sensorType_ == 'NAO_ACCELEROMETER') {
	            input.appendField(accelcoord, 'COORDINATE');
	            this.appendValue_('NUM_REV', 1);
	            this.setOutput(true, 'Number');
	        } else if (this.sensorType_ == 'NAO_FSR') {
	            input.appendField(side, 'SIDE');
	            this.appendValue_('NUM_REV', 2);
	            this.setOutput(true, 'Number');
	        }  else if (this.sensorType_ == 'NAO_TOUCHSENSOR') {
	            input.appendField(position, 'POSITION').appendField(touchside, 'SIDE');
	            this.appendValue_('BOOL');
	            this.setOutput(true, 'Boolean');
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
	        this.appendDummyInput().appendField('get ' + Blockly.Msg.NAO_GYROMETER).appendField(dropdown, 'COORDINATE');
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
	        this.appendDummyInput().appendField('get ' + Blockly.Msg.NAO_ACCELEROMETER).appendField(dropdown, 'COORDINATE');
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
	        this.appendDummyInput().appendField('get ' + Blockly.Msg.NAO_FSR).appendField(side, 'SIDE');
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