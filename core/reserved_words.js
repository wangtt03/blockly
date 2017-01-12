/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly reserved words.
 * @author beate.jost@iais.fraunhofer.de
 */
'use strict';

goog.provide('Blockly.reservedWords');

Blockly.JAVA = [ 'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'default', 'goto', 'package', 'synchronized', 'boolean', 'do', 'if', 'private', 'this', 'break', 'double', 'implements', 'protected', 'throw', 'byte', 'else', 'import', 'public', 'throws', 'case', 'enum', 'instanceof', 'return', 'transient', 'catch', 'extends', 'int', 'short', 'try', 'char', 'final', 'interface', 'static', 'void', 'class', 'finally', 'long', 'strictfp', 'volatile', 'const', 'float', 'native', 'super', 'while', 'brickConfiguration', 'usedSensors', 'hal', 'NEPOprog' ];

Blockly.CPP  = ['auto', 'const', 'double', 'float', 'int', 'short', 'struct', 'unsigned', 'break', 'continue', 'else', 'for', 'long', 'signed', 'switch', 'void', 'case', 'default', 'enum', 'goto', 'register', 'sizeof', 'typedef', 'volatile', 'char', 'do', 'extern', 'if', 'return', 'static', 'union', 'while', 'asm', 'dynamic_cast', 'namespace', 'reinterpret_cast', 'try', 'bool', 'explicit', 'new', 'static_cast', 'typeid', 'catch', 'false', 'operator', 'template', 'typename', 'class', 'friend', 'private', 'this', 'using', 'const_cast', 'inline', 'public', 'throw', 'virtual', 'delete', 'mutable', 'protected', 'true', 'wchar_t', 'and', 'bitand', 'compl', 'not_eq', 'or_eq', 'xor_eq', 'and_eq', 'bitor', 'not', 'or', 'xor'];

Blockly.PYTHON = ['and', 'del', 'from', 'not', 'while', 'as', 'elif', 'global', 'or', 'with', 'assert', 'else', 'if', 'pass', 'yield', 'break', 'except', 'import', 'print', 'class', 'exec', 'in', 'raise', 'continue', 'finally', 'is', 'return', 'def', 'for', 'lambda', 'try', 'brickConfiguration', 'hal' ];

Blockly.ev3 = Blockly.JAVA;
Blockly.microbit = Blockly.PYTHON;
Blockly.calliope = Blockly.CPP;
Blockly.ardu = Blockly.CPP;
Blockly.nxt = Blockly.CPP;
Blockly.nao = Blockly.PYTHON;
