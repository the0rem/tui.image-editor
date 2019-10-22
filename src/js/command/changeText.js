/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Change a text
 */
import * as commandFactory from '../factory/command';
import { componentNames, rejectMessages, commandNames } from '../consts';

const {TEXT} = componentNames;

export const changeText = {
    name: commandNames.CHANGE_TEXT,

    /**
     * Change a text
     * @param {Graphics} graphics - Graphics instance
     * @param {number} id - object id
     * @param {string} text - Changing text
     * @returns {Promise}
     */
    execute(graphics, id, text) {
        const textComp = graphics.getComponent(TEXT);
        const targetObj = graphics.getObject(id);

        if (!targetObj) {
            return Promise.reject(rejectMessages.noObject);
        }

        this.undoData.object = targetObj;
        this.undoData.text = textComp.getText(targetObj);

        return textComp.change(targetObj, text);
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo(graphics) {
        const textComp = graphics.getComponent(TEXT);
        const {object: textObj, text} = this.undoData;

        return textComp.change(textObj, text);
    }
};

commandFactory.register(changeText);
