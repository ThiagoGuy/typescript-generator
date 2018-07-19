import { Injectable } from "@angular/core";
import { saveAs } from "file-saver";
import { AlertService } from "./alert.service";

@Injectable()
export class UtilService {

    downloadText(fileName: string, text: string): void {
        this.download(fileName, text, 'text/plain;charset=utf-8');
    }

    download(fileName: string, content: any, type: any): void {
        try {
            !!new Blob;
        } catch (error) {
            AlertService.showError('Download is not supported on this browser.', error);
        }

        const contentAsBlob: Blob = new Blob([content], { type: type });
        saveAs(contentAsBlob, fileName);
    }

    isEmpty(obj: Array<any>): boolean {
        return !obj || obj.length === 0;
    }

    isBlank(val: string): boolean {
        return (!val || /^\s*$/.test(val));
    }

    isObject(val: any): boolean {
        return typeof val === 'object';
    }

    parseJson(json: any): any {
        const jsonParsed: any = JSON.parse(json);
        if (jsonParsed && this.isObject(jsonParsed)) {
            return jsonParsed;
        }
    }

}