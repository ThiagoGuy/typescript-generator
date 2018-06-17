export class Writer {
    private text: string;

    constructor() {
        this.text = '';
    }

    writeLine(): void {
        this.write('\n');
    }

    write(str): void {
        this.text += str;
    }

    reset(): void {
        this.text = '';
    }

    toString(): string {
        return this.text;
    }
}