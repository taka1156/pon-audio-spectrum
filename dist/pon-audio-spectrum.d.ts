// Generated by dts-bundle v0.7.3

export default class PonAudioSpectrum {
    static VisualizerType: typeof VisualizerType;
    get canvas(): HTMLCanvasElement | null;
    constructor(type: VisualizerType, options: any);
    destroy(): void;
    setAudio(howl: Howl): void;
    get isReady(): boolean;
    draw(): void;
}

declare enum VisualizerType {
    Solid = 0,
    Block = 1
}
export default VisualizerType;

