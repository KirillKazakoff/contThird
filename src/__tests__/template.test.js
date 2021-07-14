import Settings from '../js/app';

let userSettings;

beforeEach(() => {
    userSettings = new Settings();
})

test('setProperty successful', () => {
    const expected = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'normal'],
    ]);

    userSettings.setProperty('difficulty', 'normal');
    expect(userSettings.defaults).toEqual(expected);
})

test('setProperty failled', () => {
    userSettings.setProperty('theme', 'dar');
    expect(userSettings.setProperty()).toEqual(false);
})