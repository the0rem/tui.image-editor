/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Flip an image
 */
import * as commandFactory from '../factory/command';
import { componentNames, commandNames } from '../consts';

const {FLIP} = componentNames;

export const flip = {
    name: commandNames.FLIP_IMAGE,

    /**
     * flip an image
     * @param {Graphics} graphics - Graphics instance
     * @param {string} type - 'flipX' or 'flipY' or 'reset'
     * @returns {Promise}
     */
    execute(graphics, type) {
        const flipComp = graphics.getComponent(FLIP);

        this.undoData.setting = flipComp.getCurrentSetting();

        return flipComp[type]();
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo(graphics) {
        const flipComp = graphics.getComponent(FLIP);

        return flipComp.set(this.undoData.setting);
    }
};

commandFactory.register(flip);
