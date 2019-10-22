/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview LineDrawingMode class
 */
import { DrawingMode } from '../interface/drawingMode';
import { drawingModes, componentNames } from '../consts';

/**
 * LineDrawingMode class
 * @class
 * @ignore
 */
export class LineDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.LINE_DRAWING);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @param {{width: ?number, color: ?string}} [options] - Brush width & color
    * @override
    */
    start(graphics, options) {
        const lineDrawing = graphics.getComponent(componentNames.LINE);
        lineDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const lineDrawing = graphics.getComponent(componentNames.LINE);
        lineDrawing.end();
    }
}
