/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Resize a canvas
 */
import * as commandFactory from '../factory/command';
import { commandNames } from '../consts';

export const resizeCanvasDimension = {
    name: commandNames.RESIZE_CANVAS_DIMENSION,

    /**
     * resize the canvas with given dimension
     * @param {Graphics} graphics - Graphics instance
     * @param {{width: number, height: number}} dimension - Max width & height
     * @returns {Promise}
     */
    execute(graphics, dimension) {
        return new Promise(resolve => {
            this.undoData.size = {
                width: graphics.cssMaxWidth,
                height: graphics.cssMaxHeight
            };

            graphics.setCssMaxDimension(dimension);
            graphics.adjustCanvasDimension();
            resolve();
        });
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo(graphics) {
        graphics.setCssMaxDimension(this.undoData.size);
        graphics.adjustCanvasDimension();

        return Promise.resolve();
    }
};

commandFactory.register(resizeCanvasDimension);
