import { ImageEditor } from 'tui-image-editor';

const blackTheme = {
    'common.backgroundColor': '#1e1e1e',
    'common.backgroundImage': 'none',
    'common.bi.image': 'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
    'common.bisize.height': '21px',
    'common.bisize.width': '251px',
    'common.border': '0px',

    // header
    'header.backgroundColor': 'transparent',
    'header.backgroundImage': 'none',
    'header.border': '0px',

    // load button
    'loadButton.backgroundColor': '#fff',
    'loadButton.border': '1px solid #ddd',
    'loadButton.color': '#222',
    'loadButton.fontFamily': 'NotoSans, sans-serif',
    'loadButton.fontSize': '12px',

    // download button
    'downloadButton.backgroundColor': '#fdba3b',
    'downloadButton.border': '1px solid #fdba3b',
    'downloadButton.color': '#fff',
    'downloadButton.fontFamily': 'NotoSans, sans-serif',
    'downloadButton.fontSize': '12px',

    // main icons
    'menu.activeIcon.name': 'icon-a',
    'menu.activeIcon.path': '/svg/icon-a.svg',
    'menu.iconSize.height': '24px',
    'menu.iconSize.width': '24px',
    'menu.normalIcon.name': 'icon-b',
    'menu.normalIcon.path': '/svg/icon-b.svg',

    // submenu primary color
    'submenu.backgroundColor': '#1e1e1e',
    'submenu.partition.color': '#858585',

    // submenu icons
    'submenu.activeIcon.name': 'icon-c',
    'submenu.activeIcon.path': '/svg/icon-c.svg',
    'submenu.iconSize.height': '32px',
    'submenu.iconSize.width': '32px',
    'submenu.normalIcon.name': 'icon-a',
    'submenu.normalIcon.path': '/svg/icon-a.svg',

    // submenu labels
    'submenu.activeLabel.color': '#fff',
    'submenu.activeLabel.fontWeight': 'lighter',
    'submenu.normalLabel.color': '#858585',
    'submenu.normalLabel.fontWeight': 'lighter',

    // checkbox style
    'checkbox.backgroundColor': '#fff',
    'checkbox.border': '1px solid #ccc',

    // rango style
    'range.bar.color': '#666',
    'range.pointer.color': '#fff',
    'range.subbar.color': '#d1d1d1',
    'range.title.color': '#fff',
    'range.title.fontWeight': 'lighter',
    'range.value.backgroundColor': '#151515',
    'range.value.border': '1px solid #353535',
    'range.value.color': '#fff',
    'range.value.fontSize': '11px',
    'range.value.fontWeight': 'lighter',

    // colorpicker style
    'colorpicker.button.border': '1px solid #1e1e1e',
    'colorpicker.title.color': '#fff'
};

const imageEditor = new ImageEditor('#container', {
    cssMaxHeight: 500,
    cssMaxWidth: 700,
    includeUI: {
        initMenu: 'filter',
        loadImage: {
            name: 'SampleImage',
            path: 'img/sampleImage.jpg',
        },
        menu: ['shape', 'filter'],
        menuBarPosition: 'bottom',
        theme: blackTheme,
        uiSize: {
            height: '700px',
            width: '1000px',
        },
    },
    selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
    }
});

imageEditor.addIcon('arrow');
imageEditor.addIcon('cancel', {
    left: 100,
    top: 100
}).then((objectProps) => {
    // tslint:disable-next-line: no-console
    console.log(objectProps.id);
});

imageEditor.addImageObject('path/fileName.jpg').then((objectProps) => {
    // tslint:disable-next-line: no-console
    console.log(objectProps);
});

imageEditor.addShape('rect', {
    fill: 'red',
    height: 200,
    isRegular: true,
    left: 10,
    stroke: 'blue',
    strokeWidth: 3,
    top: 10,
    width: 100,
});

imageEditor.addShape('circle', {
    fill: 'red',
    isRegular: false,
    rx: 10,
    ry: 100,
    stroke: 'blue',
    strokeWidth: 3,
}).then((objectProps) => {
    // tslint:disable-next-line: no-console
    console.log(objectProps.id);
});

imageEditor.addText('initText', {
    position: {
        x: 10,
        y: 10
    },
    styles: {
        fill: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
}).then((objectProps) => {
    // tslint:disable-next-line: no-console
    console.log(objectProps.id);
});

imageEditor.applyFilter('Grayscale');
imageEditor.applyFilter('mask', {
    maskObjId: 0
}).then((obj) => {
    // tslint:disable-next-line: no-console
    console.log(`filterType: ${obj.type}`);
    // tslint:disable-next-line: no-console
    console.log(`actType: ${obj.action}`);
});

imageEditor.changeCursor('crosshair');
imageEditor.changeIconColor(0, '#000000');
imageEditor.changeSelectableAll(false);
imageEditor.changeShape(0, {
    fill: 'red',
    rx: 10,
    ry: 100,
    stroke: 'blue',
    strokeWidth: 3,
});

imageEditor.changeText(0, 'change text');
imageEditor.changeTextStyle(0, {
    fontStyle: 'italic'
});

imageEditor.clearObjects();
imageEditor.clearRedoStack();
imageEditor.clearUndoStack();

imageEditor.crop(imageEditor.getCropzoneRect());
imageEditor.deactivateAll();
imageEditor.destroy();
imageEditor.discardSelection();
imageEditor.flipX().then((status) => {
    // tslint:disable-next-line: no-console
    console.log(`flipX: ${status.flipX}`);
    // tslint:disable-next-line: no-console
    console.log(`flipY: ${status.flipY}`);
    // tslint:disable-next-line: no-console
    console.log(`angle: ${status.angle}`);
}).catch((message) => {
    // tslint:disable-next-line: no-console
    console.log(`error: ${message}`);
});
imageEditor.flipY();
imageEditor.getCanvasSize();
imageEditor.getCropzoneRect();
imageEditor.getDrawingMode();
imageEditor.getImageName();
imageEditor.getObjectPosition(0, 'left', 'top');
imageEditor.getObjectProperties(0, 'left');
imageEditor.getObjectProperties(0, ['left', 'top', 'width', 'height']);
imageEditor.getObjectProperties(0, {
    height: null,
    left: null,
    opacity: null,
    top: null,
});

imageEditor.hasFilter('filterType');
imageEditor.isEmptyRedoStack();
imageEditor.isEmptyUndoStack();
let fileObj: any;
imageEditor.loadImageFromFile(fileObj, 'SampleImage').then((result) => {
    // tslint:disable-next-line: no-console
    console.log(`old: ${result.oldWidth}, ${result.oldHeight}`);
    // tslint:disable-next-line: no-console
    console.log(`new: ${result.newWidth}, ${result.newHeight}`);
});
imageEditor.loadImageFromURL('http://url/testImage.png', 'lena').then((result) => {
    // tslint:disable-next-line: no-console
    console.log(`old: ${result.oldWidth}, ${result.oldHeight}`);
    // tslint:disable-next-line: no-console
    console.log(`new: ${result.newWidth}, ${result.newHeight}`);
});
imageEditor.redo();
imageEditor.registerIcons({
    customArrow: 'M 60 0 L 120 60 H 90 L 75 45 V 180 H 45 V 45 L 30 60 H 0 Z',
    customIcon: 'M 0 0 L 20 20 L 10 10 Z',
});
imageEditor.removeActiveObject();
imageEditor.removeFilter('Grayscale').then(obj => {
    // tslint:disable-next-line: no-console
    console.log(`filterType: ${obj.type}`);
    // tslint:disable-next-line: no-console
    console.log(`actType: ${obj.action}`);
}).catch((message) => {
    // tslint:disable-next-line: no-console
    console.log(`error : ${message}`);
});
imageEditor.removeObject(0);
imageEditor.resetFlip().then((status) => {
    // tslint:disable-next-line: no-console
    console.log(`filpX : ${status.flipX}`);
    // tslint:disable-next-line: no-console
    console.log(`flipY : ${status.flipY}`);
    // tslint:disable-next-line: no-console
    console.log(`angle : ${status.angle}`);
});

imageEditor.resizeCanvasDimension({
    height: 300,
    width: 300,
});
imageEditor.rotate(10);
imageEditor.setAngle(45);
imageEditor.setBrush({
    color: 'rgba(0, 0, 0, 0.5)',
    width: 12,
});
imageEditor.setBrush({
    color: '#FFFFFF',
    width: 20,
});
imageEditor.setCropzoneRect(1 / 1);
imageEditor.setDrawingShape('rect', {
    fill: 'red',
    height: 200,
    width: 100,
});
imageEditor.setDrawingShape('circle', {
    isRegular: true,
    rx: 10,
    ry: 10,
});
imageEditor.setObjectPosition(0, {
    originX: 'left',
    originY: 'top',
    x: 0,
    y: 0,
});
imageEditor.setObjectProperties(0, {
    height: 200,
    left: 100,
    opacity: 0.5,
    top: 100,
    width: 200,
}).then((arg) => {
    // tslint:disable-next-line: no-console
    console.log(arg);
});
imageEditor.setObjectPropertiesQuietly(0, {
    height: 200,
    left: 100,
    opacity: 0.5,
    top: 100,
    width: 200,
}).then((arg) => {
    // tslint:disable-next-line: no-console
    console.log(arg);
});
imageEditor.startDrawingMode('FREE_DRWARING', {
    color: 'rgba(255, 0, 0, 0.5)',
    width: 10,
});
imageEditor.stopDrawingMode();
imageEditor.toDataURL();
imageEditor.undo();

imageEditor.on('addText', pos => {
    imageEditor.addText('Double Click', {
        position: pos.originPosition
    });

    // tslint:disable-next-line: no-console
    console.log(`text position on canvas : ${pos.originPosition}`);
    // tslint:disable-next-line: no-console
    console.log(`text position on browser : ${pos.clientPosition}`);
});
