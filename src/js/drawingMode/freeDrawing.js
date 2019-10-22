/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview FreeDrawingMode class
 */
import { DrawingMode } from '../interface/drawingMode';
import { drawingModes, componentNames } from '../consts';

/**
 * FreeDrawingMode class
 * @class
 * @ignore
 */
export class FreeDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.FREE_DRAWING);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @param {{width: ?number, color: ?string}} [options] - Brush width & color
    * @override
    */
    start(graphics, options) {
        const freeDrawing = graphics.getComponent(componentNames.FREE_DRAWING);
        freeDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const freeDrawing = graphics.getComponent(componentNames.FREE_DRAWING);
        freeDrawing.end();
    }
}
