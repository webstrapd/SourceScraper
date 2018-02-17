import { Info } from './Info';
import { ScrapperExec } from './Scrapper';

export type RunnerFunction = (o: {url: string, scrapper: ScrapperExec, options: any}) => Info | Promise<Info | null> | null;

export class Runner {
    public type: string;
    public run: RunnerFunction;

    constructor(type: string, f: RunnerFunction) {
        this.type = type;
        this.run = f;
    }
}
