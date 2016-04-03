/**
 * Created by tedshaffer on 4/3/16.
 */
console.log("ba.js invoked");

const dialog = require('electron').remote.dialog;

function openProject() {
    console.log("openProject");

    //dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]});
    var options = {};
    options.title = 'Open Project';
    options.properties =  ['openFile'];
    //options.filters = [
    //    { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
    //    { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
    //    { name: 'Custom File Type', extensions: ['as'] },
    //    { name: 'All Files', extensions: ['*'] }
    //];
    options.filters = [
        { name: 'BrightAuthor Project Files', extensions: ['bpf'] }
    ];

    //var options = { properties: [ 'openFile', 'openDirectory', 'multiSelections' ]};
    var baProjectFilePaths = dialog.showOpenDialog(options);

    if (baProjectFilePaths.length == 0) {
        console.log("No path selected");
    }
    else {
        console.log("selected project is: " + baProjectFilePaths[0]);
    }
}