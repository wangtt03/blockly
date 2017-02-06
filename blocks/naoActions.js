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

//Movement
Blockly.Blocks['naoActions_mode'] = {
    /**
     * Make NAO stand up or sit down.
     *
     * @constructs naoActions_mode
     * @this.Blockly.Block
     * @param {String}
     *            DIRECTION mode for NAO 
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_MODE_ACTIVE, 'ACTIVE' ], [ Blockly.Msg.NAO_MODE_REST, 'REST' ], ]);
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setInputsInline(true);
        this.appendDummyInput().appendField(Blockly.Msg.SET + ' ' + Blockly.Msg.MODE).appendField(dropdown, 'DIRECTION');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_STANDUP_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_applyPosture'] = {
    /**
     * Apply a posture on NAO.
     *
     * @constructs naoActions_applyPosture
     * @this.Blockly.Block
     * @param {String}
     *            DIRECTION posture NAO goes into
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_POSTURE_STAND, 'STAND' ], [ Blockly.Msg.NAO_POSTURE_STANDINIT, 'STANDINIT' ], [ Blockly.Msg.NAO_POSTURE_STANDZERO, 'STANDZERO' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_APPLYPOSTURE).appendField(dropdown, 'DIRECTION');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_APPLYPOSTURE_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_stiffness'] = {
    /**
     * Activate/Deactivate the stiffness on an effector.
     *
     * @constructs naoActions_stiffness
     * @this.Blockly.Block
     * @param {String}
     *            PART which is activated
     *            MODE turn the motor on or off
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var part = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_PART_BODY, 'BODY' ], [ Blockly.Msg.NAO_PART_HEAD, 'HEAD' ], [ Blockly.Msg.NAO_PART_ARMS, 'ARMS' ], [ Blockly.Msg.NAO_PART_LARM, 'LEFTARM' ], [ Blockly.Msg.NAO_PART_RARM, 'RIGHTARM' ], [ Blockly.Msg.NAO_PART_LEGS, 'LEGS' ], [ Blockly.Msg.NAO_PART_LLEG, 'LEFTLEG' ], [ Blockly.Msg.NAO_PART_RLEG, 'RIHTLEG' ] ]);
        var mode = new Blockly.FieldDropdown([ [ Blockly.Msg.ON, 'ON' ], [ Blockly.Msg.OFF, 'OFF' ] ])
        this.setInputsInline(true);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_STIFFNESS).appendField(part, 'PART').appendField(mode, 'MODE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_STIFFNESS_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_moveJoint'] = {
    /**
     * NAO moves a single joint.
     *
     * @constructs naoActions_moveJoint
     * @this.Blockly.Block
     * @param {String}
     *            JOINT that is moved
     * @param {Number}
     *            POWER degrees the joint is moved
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_JOINT_HEADYAW, 'HeadYaw' ], [ Blockly.Msg.NAO_JOINT_HEADPITCH, 'HeadPitch' ], [ Blockly.Msg.NAO_JOINT_LSHOULDERPITCH, 'LShoulderPitch' ], [ Blockly.Msg.NAO_JOINT_LSHOULDERROLL, 'LshoulderRoll' ], [ Blockly.Msg.NAO_JOINT_LELBOWYAW, 'LElbowYaw' ], [ Blockly.Msg.NAO_JOINT_LELBOWROLL, 'LElbowRoll' ], [ Blockly.Msg.NAO_JOINT_LWRISTYAW, 'LWristYaw' ], [ Blockly.Msg.NAO_JOINT_LHAND, 'LHand' ], [ Blockly.Msg.NAO_JOINT_LHIPYAWPITCH, 'LHipYawPitch' ], [ Blockly.Msg.NAO_JOINT_LHIPROLL, 'LHipRoll' ], [ Blockly.Msg.NAO_JOINT_LHIPPITCH, 'LHipPitch' ], [ Blockly.Msg.NAO_JOINT_LKNEEPITCH, 'LKneePitch' ], [ Blockly.Msg.NAO_JOINT_LANKLEPITCH, 'LAnklePitch' ], [ Blockly.Msg.NAO_JOINT_RANKLEROLL, 'RAnkleRoll' ], [ Blockly.Msg.NAO_JOINT_RHIPYAWPITCH, 'RHipYawPitch' ], [ Blockly.Msg.NAO_JOINT_RHIPROLL, 'RHipRoll' ], [ Blockly.Msg.NAO_JOINT_RHIPPITCH, 'RHipPitch' ], [ Blockly.Msg.NAO_JOINT_RKNEEPITCH, 'RKneePitch' ], [ Blockly.Msg.NAO_JOINT_RANKLEPITCH, 'RAnklePitch' ], [ Blockly.Msg.NAO_JOINT_LANKLEROLL, 'LAnkleRoll' ], [ Blockly.Msg.NAO_JOINT_RSHOULDERPITCH, 'RShoulderPitch' ], [ Blockly.Msg.NAO_JOINT_RSHOULDERROLL, 'RShoulderRoll' ], [ Blockly.Msg.NAO_JOINT_RELBOWYAW, 'RElbowYaw' ], [ Blockly.Msg.NAO_JOINT_RELBOWROLL, 'RElbowRoll' ], [ Blockly.Msg.NAO_JOINT_RWRISTYAW, 'RWristYaw' ], [ Blockly.Msg.NAO_JOINT_RHAND, 'RHand' ] ]);
        var mode = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_ABSOLUTE, 'ABSOLUTE' ], [ Blockly.Msg.NAO_RELATIVE, 'RELATIVE' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.NAO_MOVE).appendField(dropdown, 'joint').appendField(mode, 'MODE').appendField(Blockly.Msg.MODE_DEGREE).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_MOVEJOINT_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_hand'] = {
    /**
     * NAO turns for a number of degrees.
     *
     * @constructs naoActions_hand
     * @this.Blockly.Block
     * @param {String}
     *            SIDE on which the hand moves
     *            MODE the hand is set to
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var side = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_RIGHT, 'LEFT' ], [ Blockly.Msg.MOTOR_LEFT, 'RIGHT' ] ]);
        var mode = new Blockly.FieldDropdown([ [ Blockly.Msg.MODE_OPEN, 'OPEN' ], [ Blockly.Msg.MODE_CLOSE, 'CLOSE' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_HAND).appendField(side, 'SIDE').appendField(mode, 'MODE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_HAND_TOOLTIP);
    }
};

//Walk

Blockly.Blocks['naoActions_walk'] = {
    /**
     * NAO walks for a given distance.
     *
     * @constructs naoActions_walk
     * @this.Blockly.Block
     * @param {String}
     *            DIRECTION in which NAO walks
     * @param {Number}
     *            POWER distance NAO walks
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_FOREWARD, 'FOREWARD' ], [ Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.NAO_WALK).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.NAO_WALK_DISTANCE).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_WALK_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_turn'] = {
    /**
     * NAO turns for a number of degrees.
     *
     * @constructs naoActions_turn
     * @this.Blockly.Block
     * @param {String}
     *            DIRECTION in which NAO turns
     * @param {Number}
     *            POWER degrees NAO turns
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_LEFT, 'LEFT' ], [ Blockly.Msg.MOTOR_RIGHT, 'RIGHT' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.MOTOR_TURN).appendField(dropdown, 'DIRECTION').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MOTOR_DEGREE).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_TURN_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_walkTo'] = {
    /**
     * NAO walks to a position.
     *
     * @constructs naoActions_walkTo
     * @this.Blockly.Block
     * @param {Number}
     *            X,Y,Theta coordinates
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_WALKTO)
        this.appendValueInput('X').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("x");
        this.appendValueInput('Y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("y");
        this.appendValueInput('Theta').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("theta");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_WALKTO_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_stop'] = {
    /**
     * NAO stops all movement
     *
     * @constructs naoActions_stop
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setInputsInline(true);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_STOP);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_STOP_TOOLTIP);
    }
};

//Animations

Blockly.Blocks['naoActions_animation'] = {
    /**
     * NAo performs an animation.
     *
     * @constructs naoActions_animation
     * @this.Blockly.Block
     * @param {String}
     *            MOVE animation NAO performs
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_TAI_CHI, 'TAICHI' ], [ Blockly.Msg.NAO_WAVE, 'WAVE' ], [ Blockly.Msg.NAO_BLINK, 'BLINK' ], [ Blockly.Msg.NAO_WIPE_FOREHEAD, 'WIPEFOREHEAD' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_PERFORM).appendField(dropdown, 'MOVE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_ANIMATION_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_pointLookAt'] = {
    /**
     * Make NAO point/look at a specified position.
     *
     * @constructs naoActions_pointLookAt
     * @this.Blockly.Block
     * @param {String}
     *            MODE look or point at
     *            DIRECTION the frame the coordinates are in
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_FRAME_TORSO, '0' ], [ Blockly.Msg.NAO_FRAME_WORLD, '1' ], [ Blockly.Msg.MENU_ROBOT, '2' ] ]);
        var mode = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_POINTAT, '0' ], [ Blockly.Msg.NAO_LOOKAT, '1' ] ]);
        this.appendDummyInput().appendField(mode, 'MODE');
        this.appendDummyInput().appendField(Blockly.Msg.NAO_FRAME).appendField(dropdown, 'DIRECTION');
        this.appendValueInput('X').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("x");
        this.appendValueInput('Y').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("y");
        this.appendValueInput('Z').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("z");
        this.appendValueInput('Speed').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField("speed");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_POINTLOOKAT_TOOLTIP);
    }
};

//Sounds

Blockly.Blocks['naoActions_playFile'] = {
    /**
     * Play a sound file from the robots file system.
     *
     * @constructs naoActions_playFile
     * @this.Blockly.Block
     * @param {String}
     *            OUT File to play
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('OUT').appendField(Blockly.Msg.NAO_PLAY_FILE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_PLAYFILE_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_dialog'] = {
    /**
     * Tries to recognize a phrase and says the answer on success.
     *
     * @constructs naoActions_dialog
     * @this.Blockly.Block
     * @param {String}
     *            PHRASE Phrase that is recognized
     *            ANSWER NAOs answer
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('PHRASE').appendField(Blockly.Msg.NAO_PHRASE);
        this.appendValueInput('ANSWER').appendField(Blockly.Msg.NAO_ANSWER);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_DIALOG_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_recognizeWord'] = {
    /**
     * Recognize a word.
     *
     * @constructs naoActions_playFile
     * @this.Blockly.Block
     * @param {String}
     *            WORD Word to recognize
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('WORD').appendField(Blockly.Msg.NAO_RECOGNIZEWORD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_RECOGNIZEWORD_TOOLTIP);
    }
};

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
        this.setTooltip(Blockly.Msg.NAO_SETVOLUME_TOOLTIP);
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
     * @see {@link naoActions_getVolume}
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.GET + ' ' + Blockly.Msg.PLAY_VOLUME);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.NAO_GETVOLUME_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_getLanguage'] = {
    /**
     * Block to get the currently active language.
     *
     * @constructs naoActions_getLanguage
     * @this.Blockly.Block
     * @returns immediately
     * @returns {String}
     * @memberof Block
     * @see {@link naoActions_getLanguage}
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_GETLANGUAGE);
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.NAO_GETLANGUAGE_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_setLanguage'] = {
    /**
     * Sets the language NAO uses.
     *
     * @constructs naoActions_setLanguage
     * @this.Blockly.Block
     * @param {String}
     *            LANGUAGE 
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_LANGUAGE_GERMAN, 'GERMAN' ], [ Blockly.Msg.NAO_LANGUAGE_ENGLISH, 'ENGLISH' ], [ Blockly.Msg.NAO_LANGUAGE_FRENCH, 'FRENCH' ], [ Blockly.Msg.NAO_LANGUAGE_JAPANESE, 'JAPANESE' ], [ Blockly.Msg.NAO_LANGUAGE_CHINESE, 'CHINESE' ], [ Blockly.Msg.NAO_LANGUAGE_SPANISH, 'SPANISH' ], [ Blockly.Msg.NAO_LANGUAGE_KOREAN, 'KOREAN' ], [ Blockly.Msg.NAO_LANGUAGE_ITALIAN, 'ITALIAN' ], [ Blockly.Msg.NAO_LANGUAGE_DUTCH, 'DUTCH' ], [ Blockly.Msg.NAO_LANGUAGE_FINNISH, 'FINNISH' ], [ Blockly.Msg.NAO_LANGUAGE_POLISH, 'POLISH' ], [ Blockly.Msg.NAO_LANGUAGE_RUSSIAN, 'RUSSIAN' ], [ Blockly.Msg.NAO_LANGUAGE_TURKISH, 'TURKISH' ], [ Blockly.Msg.NAO_LANGUAGE_ARABIC, 'ARABIC' ], [ Blockly.Msg.NAO_LANGUAGE_CZECH, 'CZECH' ], [ Blockly.Msg.NAO_LANGUAGE_PORTUGUESE, 'PORTUGUESE' ], [ Blockly.Msg.NAO_LANGUAGE_BRAZILIAN, 'BRAZILIAN' ], [ Blockly.Msg.NAO_LANGUAGE_SWEDISH, 'SWEDISH' ], [ Blockly.Msg.NAO_LANGUAGE_DANISH, 'DANISH' ], [ Blockly.Msg.NAO_LANGUAGE_NORWEGIAN, 'NORWEGIAN' ], [ Blockly.Msg.NAO_LANGUAGE_GREEK, 'GREEK' ], ]);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_SETLANGUAGE).appendField(dropdown, 'LANGUAGE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_SETLANGUAGE_TOOLTIP);
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
        this.appendValueInput('OUT').appendField(Blockly.Msg.NAO_SAY);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_SAY_TOOLTIP);
    }
};

//Vision

Blockly.Blocks['naoActions_takePicture'] = {
    /**
     * Take a picture and save it on the robot.
     *
     * @constructs naoActions_takePicture
     * @this.Blockly.Block
     * @param {Number}
     *            CAMERA
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var camera = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_CAMERA_TOP, '0' ], [ Blockly.Msg.NAO_CAMERA_BOTTOM, '1' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_TAKEPICTURE);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_CAMERA).appendField(camera, 'CAMERA');
        this.appendValueInput('FILENAME').appendField(Blockly.Msg.NAO_FILENAME);
        this.setTooltip(Blockly.Msg.NAO_TAKEPICTURE_TOOLTIP);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['naoActions_recordVideo'] = {
    /**
     * Record a video.
     *
     * @constructs naoActions_recordVideo
     * @this.Blockly.Block
     * @param {Number}
     *            RESOLUTION the video will be recorded in
     *            CAMERA that is used for the recording
     *            DURATION the video will be recorded
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var resolution = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_QQVGA, '0' ], [ Blockly.Msg.NAO_QVGA, '1' ], [ Blockly.Msg.NAO_VGA, '2' ] ]);
        var camera = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_CAMERA_TOP, '0' ], [ Blockly.Msg.NAO_CAMERA_BOTTOM, '1' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_RECORDVIDEO);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_RESOLUTION).appendField(resolution, 'RESOLUTION');
        this.appendDummyInput().appendField(Blockly.Msg.NAO_CAMERA).appendField(camera, 'CAMERA');
        this.appendValueInput('DURATION').appendField(Blockly.Msg.PLAY_DURATION).setCheck('Number');
        this.appendValueInput('FILENAME').appendField(Blockly.Msg.NAO_FILENAME);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_RECORDVIDEO_TOOLTIP);
    }
};

//Lights

Blockly.Blocks['naoActions_leds'] = {
    /**
     * Record a video.
     *
     * @constructs naoActions_recordVideo
     * @this.Blockly.Block
     * @param {Number}
     *            LED that is altered
     *            COLOR the LED is set to
     *            INTENSITY the LED is set to
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var led = new Blockly.FieldDropdown([ [ Blockly.Msg.NAO_LED_EYES, 'EYES' ], [ Blockly.Msg.NAO_LED_LEFTEYE, 'LEFTEYE' ], [ Blockly.Msg.NAO_LED_RIGHTEYE, 'RIGHTEYE' ], [ Blockly.Msg.NAO_LED_EARS, 'EARS' ], [ Blockly.Msg.NAO_LED_LEFTEAR, 'LEFTEAR' ], [ Blockly.Msg.NAO_LED_RIGHTEAR, 'RIGHTEAR' ], [ Blockly.Msg.NAO_LED_CHEST, 'CHEST' ], [ Blockly.Msg.NAO_LED_HEAD, 'HEAD' ], [ Blockly.Msg.NAO_LED_LEFTFOOT, 'LEFTFOOT' ], [ Blockly.Msg.NAO_LED_RIGHTFOOT, 'RIGHTFOOT' ], [ Blockly.Msg.NAO_LED_ALL, 'ALL' ] ]);
        var color = new Blockly.FieldDropdown([ [ Blockly.Msg.BRICKLIGHT_GREEN, 'GREEN' ], [ Blockly.Msg.BRICKLIGHT_BLUE, 'BLUE' ], [ Blockly.Msg.BRICKLIGHT_RED, 'RED' ], [ Blockly.Msg.NAO_COLOR_WHITE, 'WHITE' ], [ Blockly.Msg.NAO_COLOR_YELLOW, 'YELLOW' ], [ Blockly.Msg.NAO_COLOR_MAGENTA, 'MAGENTA' ], [ Blockly.Msg.NAO_COLOR_CYAN, 'CYAN' ] ]);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.NAO_LED).appendField(led, 'LED');
        this.appendDummyInput().setAlign(Blockly.ALIGN_LEFT).appendField(Blockly.Msg.BRICKLIGHT_COLOR).appendField(color, 'COLOR');
        this.appendValueInput('INTENSITY').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.NAO_INTENSITY);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_LED_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_ledOff'] = {
    /**
     * Turn LEDs off.
     *
     * @constructs naoActions_ledOff
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setInputsInline(true);
        this.appendDummyInput().appendField(Blockly.Msg.LED_OFF);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_LEDOFF_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_ledReset'] = {
    /**
     * Reset all LEDs to initial setup.
     *
     * @constructs naoActions_ledReset
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setInputsInline(true);
        this.appendDummyInput().appendField(Blockly.Msg.NAO_LEDRESET);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_LEDRESET_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_randomEyes'] = {
    /**
     * Color the eyes randomly.
     *
     * @constructs naoActions_randomEyes
     * @this.Blockly.Block
     * @param {Number}
     *            DURATION the eyes are colored
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('DURATION').appendField(Blockly.Msg.NAO_RANDOMEYES + ' ' + Blockly.Msg.PLAY_DURATION).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_RANDOMEYES_TOOLTIP);
    }
};

Blockly.Blocks['naoActions_rasta'] = {
    /**
     * Color the eyes in red, green and yellow.
     *
     * @constructs naoActions_rasta
     * @param {Number}
     *            DURATION the eyes are colored
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('DURATION').appendField(Blockly.Msg.NAO_RASTA + ' ' + Blockly.Msg.PLAY_DURATION).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NAO_RASTA_TOOLTIP);
    }
};
