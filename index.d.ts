export interface IrcContext<T extends IrcEvent> {
    /**
     * Returns the respective event arguments.
     */
    getArgs(): T;

    /**
     * Returns the bot's channel.
     */
    getChannel(): string;

    /**
     * Returns the bot's name.
     */
    getName(): string;

    /**
     * Sends a given message.
     */
    send(text: string): void;

    /**
     * Times a given user out for an optional number of seconds (default is 600).
     */
    timeout(user: string, seconds?: number): void;

    /**
     * Bans a given user.
     */
    ban(user: string): void;

    /**
     * Unbans a given user.
     */
    unban(user: string): void;

    /**
     * Enables slow mode with the given number of seconds.
     */
    slow(seconds: number): void;

    /**
     * Disables slow mode.
     */
    slowoff(): void;

    /**
     * Enables subscribers only chat.
     */
    subscribers(): void;

    /**
     * Disables subscribers only chat.
     */
    subscribersoff(): void;

    /**
     * Clears the chat history.
     */
    clear(): void;

    /**
     * Enables R9K mode.
     */
    r9kbeta(): void;

    /**
     * Disables R9K mode.
     */
    r9kbetaoff(): void;

    /**
     * Enables emote only mode.
     */
    emoteonly(): void;

    /**
     * Disables emote only mode.
     */
    emoteonlyoff(): void;
}

export type IrcEvent = IrcJoin | IrcMessage | IrcNames | IrcPart;

/**
 * Event arguments of the JOIN event.
 */
export interface IrcJoin {
    user: string;
}

/**
 * Event arguments of the PRIVMSG event.
 */
export interface IrcMessage {
    user: string;
    text: string;
}

/**
 * Event arguments of the NAMES event.
 */
export interface IrcNames {
    users: string[];
}

/**
 * Event arguments of the PART event.
 */
export interface IrcPart {
    user: string;
}

export interface PluginHook<T extends IrcEvent> {
    (context: IrcContext<T>): void;
}

export interface PluginEventListener {
    onJoin?: PluginHook<IrcJoin>;
    onMessage?: PluginHook<IrcMessage>;
    onNames?: PluginHook<IrcNames>;
    onPart?: PluginHook<IrcPart>;
}

export interface Plugin {
    hooks: PluginEventListener;
}
