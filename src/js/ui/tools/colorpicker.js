import Pickr from '@simonwep/pickr';
import { CustomEvents } from '../../custom-events';

const PICKER_COLOR = [
    '#000000',
    '#2a2a2a',
    '#545454',
    '#7e7e7e',
    '#a8a8a8',
    '#d2d2d2',
    '#ffffff',
    '#ff4040',
    '#ff6518',
    '#ffbb3b',
    '#03bd9e',
    '#00a9ff',
    '#515ce6',
    '#9e5fff',
    '#ff5583',
    '',
];

/**
 * Colorpicker control class
 * @class
 * @ignore
 */
export class Colorpicker {
    constructor(colorpickerElement, defaultColor = '#7e7e7e', toggleDirection = 'up') {
        const title = colorpickerElement.getAttribute('title');

        // this._show = false;

        this._colorpickerElement = colorpickerElement;
        this._toggleDirection = toggleDirection;
        this._makePickerLayerElement(colorpickerElement, title);
        this.color = defaultColor;
        this.picker = Pickr.create({
            el: this.pickerControl,
            theme: 'nano',
            default: defaultColor,
            swatches: PICKER_COLOR,
            useAsButton: false,
        });

        this._addEvent();
    }

    /**
     * Make picker layer element
     * @param {HTMLElement} colorpickerElement color picker element
     * @param {string} title picker title
     * @private
     */
    _makePickerLayerElement(colorpickerElement, title) {
        colorpickerElement.classList.add('tui-image-editor-button');

        const label = document.createElement('label');
        const triangle = document.createElement('div');

        this.pickerControl = document.createElement('div');
        this.pickerControl.className = 'color-picker-control';

        this.pickerElement = document.createElement('div');
        this.pickerElement.className = 'color-picker';

        label.innerHTML = title;
        triangle.className = 'triangle';

        this.pickerControl.appendChild(this.pickerElement);
        this.pickerControl.appendChild(triangle);

        colorpickerElement.appendChild(this.pickerControl);
        colorpickerElement.appendChild(label);
    }

    /**
     * Add event
     * @param {HTMLElement} colorpickerElement color picker element
     * @private
     */
    _addEvent() {
        this.picker.on('change', (value) => {
            const colour = `#${value.toHEXA().join('')}`;
            console.log({ colour });
            this.picker.applyColor();
            this.picker.hide();
            this.color = colour;
            this.picker
            this.fire('change', colour);
        });
    }
}

CustomEvents.mixin(Colorpicker);
