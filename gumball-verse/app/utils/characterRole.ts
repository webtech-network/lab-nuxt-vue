const ROLE_LABELS: Record<string, string> = {
    main: 'Principal',
    supporting: 'Coadjuvante',
    minor: 'Secundário',
};

export function getCharacterRole(role: string): string {
    return ROLE_LABELS[role] ?? 'Desconhecido';
}
