import possibleSettings from './possibleSettings';

export default class Settings {
    constructor() {
        this.defaults = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy'],
        ]);
    }

    setProperty(prop, value) {
        if (possibleSettings.find((element) => {
            const [key, valueArr] = element;
            const foundValue = valueArr.find((elem) => elem === value);

            return key === prop && foundValue;
        })) {
            this.defaults.set(prop, value);
            return true;
        }

        console.log('there is no such key or value');
        return false;
    }

    getSettings() {
        return [...this.defaults];
    }
}
