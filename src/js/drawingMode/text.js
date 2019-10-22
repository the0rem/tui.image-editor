/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview TextDrawingMode class
 */
import { DrawingMode } from '../interface/drawingMode';
import { drawingModes, componentNames } from '../consts';

/**
 * TextDrawingMode class
 * @class
 * @ignore
 */
export class TextDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.TEXT);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @override
    */
    start(graphics) {
        const text = graphics.getComponent(componentNames.TEXT);
        text.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const text = graphics.getComponent(componentNames.TEXT);
        text.end();
    }
}
