/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview ShapeDrawingMode class
 */
import { DrawingMode } from '../interface/drawingMode';
import { drawingModes, componentNames } from '../consts';

/**
 * ShapeDrawingMode class
 * @class
 * @ignore
 */
export class ShapeDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.SHAPE);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @override
    */
    start(graphics) {
        const shape = graphics.getComponent(componentNames.SHAPE);
        shape.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const shape = graphics.getComponent(componentNames.SHAPE);
        shape.end();
    }
}
