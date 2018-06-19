export class UtilService {

    private static downloadLink: any;

    static downloadText(fileName: string, text: string): void {
        this.download(fileName, text, 'text/plain');
    }

    static download(fileName: string, content: any, type: any): void {
        const contentAsBlob = new Blob([content], { type: type });
        this.downloadLink = document.createElement('a');
        this.downloadLink.download = fileName;
        this.downloadLink.href = window.URL.createObjectURL(contentAsBlob);
        this.downloadLink.click();
    }

    static isEmpty(obj: Array<any>): boolean {
        return !obj || obj.length == 0;
    }

    static isBlank(val: string): boolean {
        return val ? val.indexOf(' ') != -1 : true;
    }

    static isObject(val: any): boolean {
        return typeof val == 'object';
    }

    static parseJson(json: any): any {
        const jsonParsed: any = JSON.parse(json);
        if (jsonParsed && this.isObject(jsonParsed)) {
            return jsonParsed;
        }
    }

}