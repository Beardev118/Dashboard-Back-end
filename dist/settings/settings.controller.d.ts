import { CreateSettingsDto } from './settings.docs';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): any;
    create(body: CreateSettingsDto): void;
}
