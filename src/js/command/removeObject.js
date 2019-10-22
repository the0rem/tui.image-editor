/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Remove an object
 */
import * as commandFactory from '../factory/command';
import { commandNames, rejectMessages } from '../consts';

export const removeObject = {
    name: commandNames.REMOVE_OBJECT,

    /**
     * Remove an object
     * @param {Graphics} graphics - Graphics instance
     * @param {number} id - object id
     * @returns {Promise}
     */
    execute(graphics, id) {
        return new Promise((resolve, reject) => {
            this.undoData.objects = graphics.removeObjectById(id);
            if (this.undoData.objects.length) {
                resolve();
            } else {
                reject(rejectMessages.noObject);
            }
        });
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo(graphics) {
        graphics.add(this.undoData.objects);

        return Promise.resolve();
    }
};

commandFactory.register(removeObject);
