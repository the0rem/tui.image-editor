/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Add an image object
 */
import * as commandFactory from '../factory/command';
import { commandNames } from '../consts';

export const addImageObject = {
    name: commandNames.ADD_IMAGE_OBJECT,

    /**
     * Add an image object
     * @param {Graphics} graphics - Graphics instance
     * @param {string} imgUrl - Image url to make object
     * @returns {Promise}
     */
    execute: async (graphics, imgUrl) => {
        const objectProps = await graphics.addImageObject(imgUrl);
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

commandFactory.register(addImageObject);

