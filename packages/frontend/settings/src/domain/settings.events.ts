import { EventEmitter } from "@frontend/events";

type SettingsEvents = {};

export const SettingsEventController = new EventEmitter<SettingsEvents>();
