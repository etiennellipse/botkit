import { TurnContext } from 'botbuilder';
import { Dialog, DialogInstance, DialogReason } from 'botbuilder-dialogs';
export declare class BotkitConversation<O extends object = {}> extends Dialog<O> {
    script: any;
    private _prompt;
    private _beforeHooks;
    private _afterHooks;
    private _changeHooks;
    constructor(dialogId: string);
    say(message: any): void;
    addMessage(message: any, thread_name: any): void;
    ask(message: any, handlers: any, options: any): void;
    addQuestion(message: any, handlers: any, options: any, thread_name: any): void;
    before(thread_name: any, handler: any): void;
    private runBefore;
    after(handler: (context: TurnContext, results: any) => void): void;
    private runAfter;
    onChange(variable: any, handler: any): void;
    private runOnChange;
    beginDialog(dc: any, options: any): Promise<any>;
    continueDialog(dc: any): Promise<any>;
    resumeDialog(dc: any, reason: any, result: any): Promise<any>;
    onStep(dc: any, step: any): any;
    runStep(dc: any, index: any, thread_name: any, reason: any, result?: any): any;
    endDialog(context: TurnContext, instance: DialogInstance, reason: DialogReason): Promise<void>;
    private makeOutgoing;
    private parseTemplatesRecursive;
    gotoThread(thread: any, dc: any, step: any): Promise<void>;
    private gotoThreadAction;
    private handleAction;
}
