import { Injectable } from "@angular/core";

@Injectable()
export class UtilService {

    downloadText(fileName: string, text: string): void {
        this.download(fileName, text, 'text/plain');
    }
    
    download(fileName: string, content: any, type: any): void {
        const contentAsBlob: Blob = new Blob([content], { type: type });
        const downloadLink: any = document.createElement('a');
        downloadLink.download = fileName;
        downloadLink.href = window.URL.createObjectURL(contentAsBlob);
        downloadLink.click();
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