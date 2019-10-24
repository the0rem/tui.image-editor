/**
 * @fileoverview Test env
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */
import '../src';
import { fabric } from 'fabric';

fabric.Object.prototype.objectCaching = false;

const testsContext = require.context('.', true, /spec\.js$/);
testsContext.keys().forEach(testsContext);
