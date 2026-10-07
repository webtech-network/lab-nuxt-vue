const LANGUAGE_COLORS: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#663399',
    Vue: '#41b883',
    Python: '#3572a5',
    Java: '#b07219',
    'C#': '#178600',
    'C++': '#f34b7d',
    C: '#555555',
    PHP: '#4f5d95',
    Go: '#00add8',
    Rust: '#dea584',
    Kotlin: '#a97bff',
    Dart: '#00b4ab',
    Swift: '#f05138',
    Ruby: '#701516',
    Shell: '#89e051',
};

export function getLanguageColor(language: string): string {
    return LANGUAGE_COLORS[language] ?? '#7a8398';
}
