'use strict';

goog.provide('Blockly.MutatorMinus');

goog.require('Blockly.Mutator');
goog.require('Blockly.Bubble');
goog.require('Blockly.Icon');

Blockly.MutatorMinus = function(quarkNames) {
    Blockly.MutatorMinus.superClass_.constructor.call(this, null);
};
goog.inherits(Blockly.MutatorMinus, Blockly.Mutator);

/**
 * Icon in svg format.
 * @private
 */
Blockly.MutatorMinus.prototype.png_ = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24"><path d="M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z" fill="white" /></svg>';

/**
 * Clicking on the icon toggles if the mutator bubble is visible.
 * Disable if block is uneditable.
 * @param {!Event} e Mouse click event.
 * @private
 * @override
 */
Blockly.MutatorMinus.prototype.iconClick_ = function(e) {
  if (this.block_.isEditable() && Blockly.dragMode_ != 2) {
    this.block_.updateShape_(-1);
  }
};

Blockly.MutatorMinus.prototype.clicked_ = false;
