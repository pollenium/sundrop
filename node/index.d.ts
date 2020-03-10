import { Snowdrop } from 'pollenium-snowdrop';
export declare class Sundrop<T> extends Snowdrop<T> {
    private parentSnowdrop;
    private parentHandleId;
    setParentSnowdrop(parentSnowdrop: Snowdrop<T>): void;
}
