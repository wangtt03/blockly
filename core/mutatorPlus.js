'use strict';

goog.provide('Blockly.MutatorPlus');

goog.require('Blockly.Mutator');
goog.require('Blockly.Bubble');
goog.require('Blockly.Icon');

Blockly.MutatorPlus = function(quarkNames) {
    Blockly.MutatorPlus.superClass_.constructor.call(this, null);
};
goog.inherits(Blockly.MutatorPlus, Blockly.Mutator);

/**
 * Icon in svg format.
 * @private
 */
Blockly.MutatorPlus.prototype.png_ = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24"><path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z" fill="white" /></svg>';

/**
 * Clicking on the icon toggles if the mutator bubble is visible.
 * Disable if block is uneditable.
 * @param {!Event} e Mouse click event.
 * @private
 * @override
 */
Blockly.MutatorPlus.prototype.iconClick_ = function(e) {
  if (this.block_.isEditable() && Blockly.dragMode_ != 2) {
    this.block_.updateShape_(1);
  }
};

Blockly.MutatorPlus.prototype.clicked_ = false;
