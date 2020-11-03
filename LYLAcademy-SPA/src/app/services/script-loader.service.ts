import {Injectable} from '@angular/core';
import * as $ from 'jquery';

declare let document: any;

interface Script {
  src: string;
  loaded: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
public _scripts: Script[] = [];

/**
* @deprecated
* @param tag
* @param {string} scripts
* @returns {Promise<any[]>}
*/
load(tag, ...scripts: string[]) {
scripts.forEach((src: string) => {
  if (!this._scripts[src]) {
    this._scripts[src] = {src: src, loaded: false};
  }
});

let promises: any[] = [];
scripts.forEach((src) => promises.push(this.loadScript(tag, src)));

return Promise.all(promises);
}

 /**
 * Lazy load list of scripts
 * @param tag
 * @param scripts
 * @param loadOnce
 * @returns {Promise<any[]>}
 */

 
loadScriptsManuel() { 
  
  // This array contains all the files/CDNs 
  const dynamicScripts = [ 
 /*   'vendor/modernizr/modernizr.custom.js',
    'vendor/js-storage/js.storage.js',
    'vendor/screenfull/dist/screenfull.js',
    'vendor/i18next/i18next.js',
    'vendor/i18next-xhr-backend/i18nextXHRBackend.js',
    'vendor/jquery/dist/jquery.js',
    'vendor/popper.js/dist/umd/popper.js',
    'vendor/bootstrap/dist/js/bootstrap.js',
    'vendor/datatables.net/js/jquery.dataTables.js',
    'vendor/datatables.net-bs4/js/dataTables.bootstrap4.js',
    'vendor/datatables.net-buttons/js/dataTables.buttons.js',
    'vendor/datatables.net-buttons-bs/js/buttons.bootstrap.js',
    'vendor/datatables.net-buttons/js/buttons.colVis.js',
    'vendor/datatables.net-buttons/js/buttons.flash.js',
    'vendor/datatables.net-buttons/js/buttons.html5.js',
    'vendor/datatables.net-buttons/js/buttons.print.js',
    'vendor/datatables.net-keytable/js/dataTables.keyTable.js',
    'vendor/datatables.net-responsive/js/dataTables.responsive.js',
    'vendor/datatables.net-responsive-bs/js/responsive.bootstrap.js',
    'vendor/jszip/dist/jszip.js',
    'vendor/pdfmake/build/pdfmake.js',
    'vendor/pdfmake/build/vfs_fonts.js',
    'js/app.js'*/
  ]; 
  for (let i = 0; i < dynamicScripts.length; i++) { 
    const node = document.createElement('script'); 
    node.src = dynamicScripts[i]; 
    node.type = 'text/javascript'; 
    node.async = false; 
    document.getElementsByTagName('head')[0].appendChild(node); 
  } 
}
loadScripts(tag, scripts, loadOnce?: boolean) {
loadOnce = loadOnce || false;

scripts.forEach((script: string) => {
  if (!this._scripts[script]) {
    this._scripts[script] = {src: script, loaded: false};
  }
});

let promises: any[] = [];
scripts.forEach(
    (script) => promises.push(this.loadScript(tag, script, loadOnce)));

return Promise.all(promises);
}

/**
 * Lazy load a single script
 * @param tag
 * @param {string} src
 * @param loadOnce
 * @returns {Promise<any>}
 */
loadScript(tag, src: string, loadOnce?: boolean) {
loadOnce = loadOnce || false;

if (!this._scripts[src]) {
  this._scripts[src] = {src: src, loaded: false};
}

return new Promise((resolve, reject) => {
  // resolve if already loaded
  if (this._scripts[src].loaded && loadOnce) {
    resolve({src: src, loaded: true});
  }
  else {
    // load script tag
    let scriptTag = $('<script/>').
        attr('type', 'text/javascript').
        attr('src', this._scripts[src].src);

    $(tag).append(scriptTag);

    this._scripts[src] = {src: src, loaded: true};
    resolve({src: src, loaded: true});
  }
 });
 }
 }