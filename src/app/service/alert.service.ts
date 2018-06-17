export class AlertService {

    static showError(message: string, error?: any): void {
        if (error) {
            console.error(error);
        }
        this.showMessage('Error: ' + message);
        throw new Error(message);
    }

    static showMessage(message: string): void {
        alert(message);
    }

}