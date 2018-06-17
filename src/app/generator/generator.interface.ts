import { Content } from './models/content';

export interface Generator {
    create(json: any, fieldName: string, className?: string): void;
    build(): Array<Content>;
}