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

//Blockly.Blocks['mbedImage_image'] = {
//    /**
//     * Represents an image.
//     *
//     * @constructs mbedImage_image
//     * @this.Blockly.Block
//     * @returns immediately
//     * @memberof Block
//     */
//    init : function() {
//        this.setColour(Blockly.CAT_IMAGE_RGB);
//        this.appendDummyInput().appendField("    0     1     2     3     4");
//        this.appendDummyInput().appendField("0").appendField(new Blockly.FieldCheckbox(), "P00").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P10").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P20").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P30").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P40");
//        this.appendDummyInput().appendField("1").appendField(new Blockly.FieldCheckbox(), "P01").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P11").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P21").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P31").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P41");
//        this.appendDummyInput().appendField("2").appendField(new Blockly.FieldCheckbox(), "P02").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P12").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P22").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P32").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P42");
//        this.appendDummyInput().appendField("3").appendField(new Blockly.FieldCheckbox(), "P03").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P13").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P23").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P33").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P43");
//        this.appendDummyInput().appendField("4").appendField(new Blockly.FieldCheckbox(), "P04").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P14").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P24").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P34").appendField(" ").appendField(new Blockly.FieldCheckbox(), "P44");
//        this.setOutput(true, 'Image');
//        // this.setTooltip();
//    }
//};

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
        this.appendDummyInput().appendField("0").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P00").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P10").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P20").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P30").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P40");
        this.appendDummyInput().appendField("1").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P01").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P11").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P21").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P31").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P41");
        this.appendDummyInput().appendField("2").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P02").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P12").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P22").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P32").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P42");
        this.appendDummyInput().appendField("3").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P03").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P13").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P23").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P33").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P43");
        this.appendDummyInput().appendField("4").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P04").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P14").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P24").appendField(" ").appendField(new Blockly.FieldTextInput(
                '\u00A0\u00A0', this.validate_), "P34").appendField(" ").appendField(new Blockly.FieldTextInput('\u00A0\u00A0', this.validate_), "P44");
        this.setOutput(true, 'Image');
        // this.setTooltip();
    },
    validate_ : function(p) {
        this.render_();
        if (p == '  ' && this.text_ == '\u00A0\u00A0')
            return p;
        if (p == '\u00A0\u00A0' && this.text_ == '\u00A0\u00A0')
            return '  ';
        if (p == '  ' && this.text_ == '  ')
            return 'x';
        if (p == '\u2713' && this.text_ == '\u2713')
            return '\u00A0\u00A0';
        if (p == ' ' && this.text_ != '  ')
            return '  ';
        if (!p.match(/^[1-8x]$/) && p != '\u00A0\u00A0') {
            this.text_ = p;
            return '\u2713';
        }
        if (p == '\u00A0\u00A0')
            return p;
        if (!p.match(/^[1-8'\u2713']$/))
            return '\u2713';
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
     * @this Blockly.Block
     */
    init : function() {
        this.jsonInit({
            "message0" : "get %1",
            "args0" : [ {
                "type" : "field_dropdown",
                "name" : "IMAGE",
                "options" : [ [ 'heart', 'HEART' ], [ 'heart small', 'HEART_SMALL' ], [ 'smile', 'SMILE' ], [ 'confused', 'CONFUSED' ], [ 'angry', 'ANGRY' ],
                        [ 'asleep', 'ASLEEP' ], [ 'surprised', 'SURPRISED' ], [ 'silly', 'SILLY' ], [ 'fabulous', 'FABULOUS' ], [ 'meh!', 'MEH' ],
                        [ 'yes', 'YES' ], [ 'no', 'NO' ] ]
            } ],
            "output" : "Image",
            "colour" : Blockly.CAT_IMAGE_RGB
        });
    }
};
