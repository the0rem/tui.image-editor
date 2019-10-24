/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Rotate an image
 */
import * as commandFactory from '../factory/command';
import { componentNames, commandNames } from '../consts';

const {ROTATION} = componentNames;

export const rotate = {
    name: commandNames.ROTATE_IMAGE,

    /**
     * Rotate an image
     * @param {Graphics} graphics - Graphics instance
     * @param {string} type - 'rotate' or 'setAngle'
     * @param {number} angle - angle value (degree)
     * @returns {Promise}
     */
    execute(graphics, type, angle, isSilent) {
        const rotationComp = graphics.getComponent(ROTATION);

        if (!isSilent) {
            this.undoData.angle = rotationComp.getCurrentAngle();
        }

        this.undoData.angle = rotationComp.getCurrentAngle();

        return rotationComp[type](angle);
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo(graphics) {
        const rotationComp = graphics.getComponent(ROTATION);
        const [, type, angle] = this.args;

        if (type === 'setAngle') {
            return rotationComp[type](this.undoData.angle);
        }
        
        return rotationComp.rotate(-angle);
    }
};

commandFactory.register(rotate);
