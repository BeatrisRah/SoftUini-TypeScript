import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { TypeMessage } from "./types";

export class LanguageMessageEncoder
    <Tlang extends Language, TChip extends Cipher<Tlang>> 
    extends PartialMessageEncoder implements MessageEncoder {
    
    private decodedCount = 0;
    private encodeCount = 0;

    constructor(lang: Tlang, chip: TChip){
            super(lang, chip)
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) return 'No message.';
            

        const isCompadible = this.language.isCompatibleToCharset(secretMessage);

        if(!isCompadible) return 'Message not compadible.';
        const decodedMessage = this.cipher.decipher(secretMessage)
        this.decodedCount += decodedMessage.length;
        return decodedMessage;

    }

    public encodeMessage(secretMessage: unknown) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) return 'No message.';

        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompadible = this.language.isCompatibleToCharset(strippedMessage);

        if(!isCompadible)  return 'Message not compatible.';

        const encoded = this.cipher.encipher(strippedMessage);
        this.encodeCount += encoded.length;
        return encoded;
    }

    protected override stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }

    public totalProcessedCharacters(type: TypeMessage): string {
        switch(type){
            case "Encoded":
                return `${this.encodeCount}`;
            case "Decoded":
                return `${this.decodedCount}`;
            case "Both":
                return `${this.encodeCount + this.decodedCount}`;
        }}
}
