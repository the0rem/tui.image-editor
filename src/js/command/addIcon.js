/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Add an icon
 */
import * as commandFactory from '../factory/command';
import { componentNames, commandNames } from '../consts';

const {ICON} = componentNames;

export const addIcon = {
    name: commandNames.ADD_ICON,

    /**
     * Add an icon
     * @param {Graphics} graphics - Graphics instance
     * @param {string} type - Icon type ('arrow', 'cancel', custom icon name)
     * @param {Object} options - Icon options
     *      @param {string} [options.fill] - Icon foreground color
     *      @param {string} [options.left] - Icon x position
     *      @param {string} [options.top] - Icon y position
     * @returns {Promise}
     */
    execute: async (graphics, type, options) => {
        const iconComp = graphics.getComponent(ICON);

        const objectProps = await  iconComp.add(type, options);
        this.undoData.object = graphics.getObject(objectProps.id);

        return objectProps;
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo: async (graphics) => {
        await graphics.remove(this.undoData.object);
    }
};

commandFactory.register(addIcon);
