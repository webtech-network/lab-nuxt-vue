const DEFAULT_COLOR = '#3db8e0';
const MAX_LUMINANCE = 0.88;

function getLuminance(hex: string): number | null {
    const match = /^#?([0-9a-f]{6})$/i.exec(hex);

    if (!match) {
        return null;
    }

    const value = parseInt(match[1]!, 16);
    const red = (value >> 16) & 255;
    const green = (value >> 8) & 255;
    const blue = value & 255;

    return (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
}

export function getCharacterColor(colors: string[] = []): string {
    const vividColor = colors.find((hex) => {
        const luminance = getLuminance(hex);
        return luminance !== null && luminance < MAX_LUMINANCE;
    });

    return vividColor ?? DEFAULT_COLOR;
}
