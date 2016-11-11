/**
 * @fileoverview Action blocks for NAO.
 * @requires Blockly.Blocks
 * @author Janis
 */
'use strict';

goog.provide('Blockly.Blocks.naoActions');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

//Move

Blockly.Blocks['naoActions_standUp'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.STANDUP);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.STANDUP_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_sitDown'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.SITDOWN);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.SITDOWN_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_taiChi'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.TAICHI);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.TAICHI_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_wave'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.WAVE);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.WAVE_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_wipeForehead'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.WIPEFOREHEAD);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.WIPEFOREHEAD_TOOLTIP);
	   }
};


Blockly.Blocks['naoActions_applyPosture'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.POSTURE_STAND, 'STAND' ], [ Blockly.Msg.POSTURE_STANDINIT, 'STANDINIT' ], [ Blockly.Msg.POSTURE_STANDZERO, 'STANDZERO' ] ]);
	        this.appendValueInput('POWER').appendField(Blockly.Msg.APPLYPOSTURE).appendField(dropdown, 'DIRECTION');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.APPLYPOSTURE_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_pointAt'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.FRAME_TORSO, '0' ], [ Blockly.Msg.FRAME_WORLD, '1' ], [ Blockly.Msg.FRAME_ROBOT, '2' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.POINTAT).appendField(dropdown, 'DIRECTION');
	        this.appendValueInput('X').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("x");
	        this.appendValueInput('Y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("y");
	        this.appendValueInput('Z').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("z");
	        this.appendValueInput('Speed').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("speed");
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.POINTAT_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_lookAt'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.FRAME_TORSO, '0' ], [ Blockly.Msg.FRAME_WORLD, '1' ], [ Blockly.Msg.FRAME_ROBOT, '2' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.LOOKAT).appendField(dropdown, 'DIRECTION');
	        this.appendValueInput('X').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("x");
	        this.appendValueInput('Y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("y");
	        this.appendValueInput('Z').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("z");
	        this.setPreviousStatement(true);
	        this.appendValueInput('Speed').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("speed");
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.LOOKAT_TOOLTIP);
	    }
	};

Blockly.Blocks['naoActions_stiffnessOn'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.STIFFNESSON);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.STIFFNESSON_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_stiffnessOff'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.STIFFNESSOFF);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.STIFFNESSOFF_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_partialStiffnessOn'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.BODY_ARM, 'ARM' ], [ Blockly.Msg.BODY_LARM, 'LARM' ], [ Blockly.Msg.BODY_RARM, 'RARM' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.PARTIALSTIFFNESSON).appendField(dropdown, 'DIRECTION');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.PARTIALSTIFFNESSON_TOOLTIP);
	   }
};


Blockly.Blocks['naoActions_partialStiffnessOff'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.BODY_ARM, 'ARM' ], [ Blockly.Msg.BODY_LARM, 'LARM' ], [ Blockly.Msg.BODY_RARM, 'RARM' ] ]);
	        this.appendDummyInput().appendField(Blockly.Msg.PARTIALSTIFFNESSOFF).appendField(dropdown, 'DIRECTION');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.PARTIALSTIFFNESSOFF_TOOLTIP);
	   }
};



//Walk

Blockly.Blocks['naoActions_walk'] = {
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_FOREWARD, 'FOREWARD' ], [ Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.WALK).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.WALK_DISTANCE).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.WALK_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_turn'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.TURN_LEFT, 'LEFT' ], [ Blockly.Msg.TURN_RIGHT, 'RIGHT' ] ]);
	        this.appendValueInput('POWER').appendField(Blockly.Msg.TURN).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.TURN_DEGREES).setCheck('Number');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.TURN_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_walkTo'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.WALKTO)
	        this.appendValueInput('X').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("x");
	        this.appendValueInput('Y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("y");
	        this.appendValueInput('Theta').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("theta");
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.WALKTO_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_stop'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.STOP);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.STOP_TOOLTIP);
	   }
};



//Sounds

Blockly.Blocks['naoActions_setVolume'] = {
	    /**
	     * Set volume.
	     * 
	     * @constructs naoActions_setVolume
	     * @this.Blockly.Block
	     * @param {Number}
	     *            VOLUME 0-100, default 50
	     * @returns immediately
	     * @memberof Block
	     */
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.appendValueInput('VOLUME').appendField(Blockly.Msg.SET + ' ' + Blockly.Msg.PLAY_VOLUME).setCheck('Number');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.SETVOLUME_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_getVolume'] = {
	    /**
	     * Get current volume
	     * 
	     * @constructs naoActions_getVolume
	     * @this.Blockly.Block
	     * @returns immediately
	     * @returns {Number}
	     * @memberof Block
	     * @see {@link naoActions_setVolume}
	     */
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.appendDummyInput().appendField(Blockly.Msg.GET + ' ' + Blockly.Msg.PLAY_VOLUME);
	        this.setOutput(true, 'Number');
	        this.setTooltip(Blockly.Msg.GETVOLUME_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_getLanguage'] = {
			  /**
			   * Block to get the currently active language.
			   * @this Blockly.Block
			   */
			  init: function() {
			    this.setColour(Blockly.CAT_ACTION_RGB);
			    this.appendDummyInput().appendField(Blockly.Msg.GETLANGUAGE);
			    this.setOutput(true, 'String');
			    this.setTooltip(Blockly.Msg.GETLANGUAGE_TOOLTIP);
			  }
};
	
Blockly.Blocks['naoActions_setLanguage'] = {
		    init : function() {
		        this.setColour(Blockly.CAT_ACTION_RGB);
		        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.LANGUAGE_GERMAN, 'GERMAN' ], [ Blockly.Msg.LANGUAGE_ENGLISH, 'ENGLISH' ], [ Blockly.Msg.LANGUAGE_FRENCH, 'FRENCH' ] ]);
		        this.appendDummyInput().appendField(Blockly.Msg.SETLANGUAGE).appendField(dropdown, 'LANGUAGE');
		        this.setPreviousStatement(true);
		        this.setNextStatement(true);
		        this.setTooltip(Blockly.Msg.SETLANGUAGE_TOOLTIP);
		    }
};
	
Blockly.Blocks['naoActions_sayText'] = {
		    /**
		     * Say a text.
		     * 
		     * @constructs naoActions_sayText
		     * @this.Blockly.Block
		     * @param {String}
		     *            OUT Text to say
		     * @returns immediately
		     * @memberof Block
		     */
		    init : function() {
		        this.setColour(Blockly.CAT_ACTION_RGB);
		        this.appendValueInput('OUT').appendField(Blockly.Msg.DISPLAY_SAY + ' ' + Blockly.Msg.DISPLAY_TEXT);
		        this.setPreviousStatement(true);
		        this.setNextStatement(true);
		        this.setTooltip(Blockly.Msg.SAYTEXT_TOOLTIP);
		    }
};
	
//Lights
	
Blockly.Blocks['naoActions_setEyeColor'] = {
		    init : function() {
		        this.setColour(Blockly.CAT_ACTION_RGB);
		        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.COLOR_GREEN, 'GREEN' ], [ Blockly.Msg.COLOR_BLUE, 'BLUE' ], [ Blockly.Msg.COLOR_RED, 'RED' ] ]);
		        this.appendDummyInput().appendField(Blockly.Msg.SETEYECOLOR).appendField(dropdown, 'COLOR');
		        this.setPreviousStatement(true);
		        this.setNextStatement(true);
		        this.setTooltip(Blockly.Msg.SETEYECOLOR_TOOLTIP);
		    }
};

Blockly.Blocks['naoActions_setEarIntensity'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.appendValueInput('INTENSITY').appendField(Blockly.Msg.SETEARINTENSITY).setCheck('Number');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.SETEARINTENSITY_TOOLTIP);
	    }
};

	
Blockly.Blocks['naoActions_blink'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.BLINK);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.BLINK_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_ledOff'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.LEDOFF);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.LEDOFF_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_ledReset'] = {
	    init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.setInputsInline(true);
	        this.appendDummyInput().appendField(Blockly.Msg.LEDRESET);
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.LEDRESET_TOOLTIP);
	   }
};

Blockly.Blocks['naoActions_randomEyes'] = {
		init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.appendValueInput('DURATION').appendField(Blockly.Msg.RANDOMEYES + ' ' + Blockly.Msg.DURATION).setCheck('Number');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.RANDOMEYES_TOOLTIP);
	    }
};

Blockly.Blocks['naoActions_rasta'] = {
	   init : function() {
	        this.setColour(Blockly.CAT_ACTION_RGB);
	        this.appendValueInput('DURATION').appendField(Blockly.Msg.RASTA + ' ' + Blockly.Msg.DURATION).setCheck('Number');
	        this.setPreviousStatement(true);
	        this.setNextStatement(true);
	        this.setTooltip(Blockly.Msg.RASTA_TOOLTIP);
	    }
};




