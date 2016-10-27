/**
 * @fileoverview Action blocks for EV3.
 * @requires Blockly.Blocks
 * @author Beate
 */
'use strict';

goog.provide('Blockly.Blocks.mbedImage');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

Blockly.Blocks['mbedImage_image'] = {
    /**
     * Represents an image.
     * 
     * @constructs mbedImage_image
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_IMAGE_RGB);
        this.appendDummyInput().appendField("    0      1      2      3      4");
        this.appendDummyInput().appendField("0").appendField(new Blockly.FieldTextInput('  ', this.validate_), "P00").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P10").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P20").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P30").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P40");
        this.appendDummyInput().appendField("1").appendField(new Blockly.FieldTextInput('  ', this.validate_), "P01").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P11").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P21").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P31").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P41");
        this.appendDummyInput().appendField("2").appendField(new Blockly.FieldTextInput('  ', this.validate_), "P02").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P12").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P22").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P32").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P42");
        this.appendDummyInput().appendField("3").appendField(new Blockly.FieldTextInput('  ', this.validate_), "P03").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P13").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P23").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P33").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P43");
        this.appendDummyInput().appendField("4").appendField(new Blockly.FieldTextInput('  ', this.validate_), "P04").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P14").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P24").appendField(' ').appendField(new Blockly.FieldTextInput(
                '  ', this.validate_), "P34").appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P44");
        this.setOutput(true, 'Image');
        // this.setTooltip();
    },
    validate_ : function(p) {
        if (!Blockly.FieldTextInput.htmlInput_)
            return p;
        if (p == Blockly.FieldTextInput.htmlInput_.value) {
            if (p == '  ') {
                Blockly.FieldTextInput.htmlInput_.value = '#';
                return '#';
            } else if (p == '#') {
                Blockly.FieldTextInput.htmlInput_.value = '  ';
                return '  ';
            } else if (p.match(/^[1-8]$/)) {
                Blockly.FieldTextInput.htmlInput_.value = p;
                return p;
            } else if (p == ' ' || p == '0') {
                Blockly.FieldTextInput.htmlInput_.value = '  ';
                return '  ';
            } else if (p.substring(0, 2) == '  ') {
                Blockly.FieldTextInput.htmlInput_.value = p.substr(2);
                return p.substr(2);
            } else if (p.substring(0, 1) == '#') {
                Blockly.FieldTextInput.htmlInput_.value = p.substr(1);
                return p.substr(1);
            } else if (!p.match(/^[1-8]$/)) {
                Blockly.FieldTextInput.htmlInput_.value = '#';
                return '#';
            } else {
                Blockly.FieldTextInput.htmlInput_.value = '  ';
                return '  ';
            }
        }
        Blockly.FieldTextInput.htmlInput_.value = '';
        return p;
    }
};

Blockly.Blocks['mbedImage_shift'] = {
    init : function() {
        this.jsonInit({
            "message0" : "shift %1 %2 %3",
            "args0" : [ {
                "type" : "input_value",
                "name" : "A",
                "check" : "Image"
            }, {
                "type" : "field_dropdown",
                "name" : "OP",
                "options" : [ [ 'up', 'UP' ], [ 'down', 'DOWN' ], [ 'right', 'RIGHT' ], [ 'left', 'LEFT' ] ]
            }, {
                "type" : "input_value",
                "name" : "B",
                "check" : "Number"
            } ],
            "inputsInline" : true,
            "output" : "Image",
            "colour" : Blockly.CAT_IMAGE_RGB
        });
    }
};

Blockly.Blocks['mbedImage_invert'] = {
    /**
     * Block to invert an image.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.jsonInit({
            "message0" : "invert %1",
            "args0" : [ {
                "type" : "input_value",
                "name" : "VAR",
                "check" : "Image"
            } ],
            "output" : "Image",
            "colour" : Blockly.CAT_IMAGE_RGB
        });
    }
};

// This is just a draft. TODO if or how many images we would like to provide.
Blockly.Blocks['mbedImage_get_image'] = {
    /**
     * Block to get a predefined image.
     * 
     * @this Blockly.Block
     */
    init : function() {
        var options = [ [ 'heart', 'HEART' ], [ 'heart small', 'HEART_SMALL' ], [ 'smile', 'SMILE' ], [ 'confused', 'CONFUSED' ], [ 'angry', 'ANGRY' ],
                [ 'asleep', 'ASLEEP' ], [ 'surprised', 'SURPRISED' ], [ 'silly', 'SILLY' ], [ 'fabulous', 'FABULOUS' ], [ 'meh!', 'MEH' ], [ 'yes', 'YES' ],
                [ 'no', 'NO' ], [ 'triangle', 'TRIANGLE' ], [ 'triangle left', 'TRIANGLE_LEFT' ], [ 'chessboard', 'CHESSBOARD' ], [ 'diamond', 'DIAMOND' ],
                [ 'diamond small', 'DIAMOND_SMALL' ], [ 'square', 'SQUARE' ], [ 'square small', 'SQUARE_SMALL' ], [ 'rabbit', 'RABBIT' ], [ 'cow', 'COW' ],
                [ 'music crotchet', 'MUSIC_CROTCHET' ], [ 'music quaver', 'MUSIC_QUAVER' ], [ 'music quavers', 'MUSIC_QUAVERS' ], [ 'pitchfork', 'PITCHFORK' ],
                [ 'xmas', 'XMAS' ], [ 'pacman', 'PACMAN' ], [ 'target', 'TARGET' ], [ 'T-shirt', 'TSHIRT' ], [ 'rollerskate', 'ROLLERSKATE' ],
                [ 'duck', 'DUCK' ], [ 'house', 'HOUSE' ], [ 'tortoise', 'TORTOISE' ], [ 'butterfly', 'BUTTERFLY' ], [ 'stickfigure', 'STICKFIGURE' ],
                [ 'ghost', 'GHOST' ], [ 'sword', 'SWORD' ], [ 'giraffe', 'GIRAFFE' ], [ 'skull', 'SKULL' ], [ 'umbrella', 'UMBRELLA' ], [ 'snake', 'SNAKE' ],
                [ 'sad', 'SAD' ] ];
        var dropdown = new Blockly.FieldDropdownImage(options, '../media/dropDowns/', 24, 24, 'png');
        this.setColour(Blockly.CAT_IMAGE_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.GET).appendField(dropdown, 'IMAGE');
        this.setOutput(true, 'Image');
        this.setTooltip('hallo Beate');
    }
};
