import { CreateSettingsDto } from './settings.docs';
import { Settings } from './settings.entity';
export declare class SettingsService {
    private readonly SETTINGS_REPOSITORY;
    constructor(SETTINGS_REPOSITORY: typeof Settings);
    getSettings: () => Promise<Settings[]>;
    createSettingsEntry: (data: CreateSettingsDto) => Promise<Settings>;
}
