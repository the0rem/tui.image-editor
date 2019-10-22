/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Add an object
 */
import * as commandFactory from '../factory/command';
import { commandNames, rejectMessages }  from '../consts';

export const addObject = {
    name: commandNames.ADD_OBJECT,

    /**
     * Add an object
     * @param {Graphics} graphics - Graphics instance
     * @param {Object} object - Fabric object
     * @returns {Promise}
     */
    execute: (graphics, object) => {
        return new Promise((resolve, reject) => {
            if (!graphics.contains(object)) {
                graphics.add(object);
                resolve(object);
            } else {
                reject(rejectMessages.addedObject);
            }
        });
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @param {Object} object - Fabric object
     * @returns {Promise}
     */
    undo: (graphics, object) => {
        return new Promise((resolve, reject) => {
            if (graphics.contains(object)) {
                graphics.remove(object);
                resolve(object);
            } else {
                reject(rejectMessages.noObject);
            }
        });
    }
};

commandFactory.register(addObject);
