export class UtilService {


    static getListFieldName(fieldName: string, value: any): string {
        if (fieldName) {
            return Array.isArray(value) ? fieldName.concat('List') : fieldName.replace('List', '');
        }
    }

    static getNumberFromString(str: string): number {
        if (str) {
            const valuesFound: string[] = str.match(/\d+/g);
            if (valuesFound) {
                return Number.parseInt(valuesFound.join(''));
            }
        }
    }

    static isEmpty(obj: Array<any>): boolean {
        return !obj || obj.length == 0;
    }

    static getClassName(name: string): string {
        let result: string;
        if (name) {
            result = name.charAt(0).toUpperCase();
            if (name.length > 1) {
                result += name.substring(1);
            }
        }
        return result;
    }

    static getType(val: any): string {
        return val ? typeof val : 'string';
    }

    static fixFieldName(name: string): string {
        let result: string;
        if (name) {
            result = name.charAt(0).toLowerCase();
            if (name.length > 1) {
                result += name.substring(1);
            }
        }
        return result;
    }

    static fixValue(val: any, useOnlyStringDataType: boolean): string {
        let valFixed: string;
        if (!val) {
            valFixed = "''";
        } else if (useOnlyStringDataType || typeof val == 'string') {
            valFixed = "'" + val + "'";
        } else {
            valFixed = val;
        }
        return valFixed;
    }

    static fixMethodName(name: string): string {
        let result: string;
        if (name) {
            result = name.charAt(0).toUpperCase();
            if (name.length > 1) {
                result += name.substring(1);
            }
        }
        return result;
    }

    static isBlank(val: string): boolean {
        return val ? val.indexOf(' ') != -1 : true;
    }

    static isObject(val: any): boolean {
        return typeof val == 'object';
    }

    static isBase64(str: string): boolean {
        try {
            return str ? btoa(atob(str)) == str : false;
        } catch (e) {
            return false;
        }
    }

}