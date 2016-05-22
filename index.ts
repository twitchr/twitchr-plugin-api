export interface PluginOnAction {
    (from: string, to: string, text: string): string;
}

export interface PluginOnJoin {
    (nick: string): string;
}

export interface PluginOnMessage {
    (nick: string, to: string, text: string): string;
}

export interface PluginOnNames {
    (nicks: string[]): string;
}

export interface PluginOnPart {
    (nick: string, reason: string): string;
}

export interface PluginEventListener {
    onAction?: PluginOnAction;
    onJoin?: PluginOnJoin;
    onMessage?: PluginOnMessage;
    onNames?: PluginOnNames;
    onPart?: PluginOnPart;
}

export interface Plugin {
    hooks: PluginEventListener;
}
