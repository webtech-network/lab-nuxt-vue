const TYPE_LABELS: Record<string, string> = {
    town: 'Cidade',
    residence: 'Residência',
    school: 'Escola',
    'school-facility': 'Espaço escolar',
    shop: 'Loja',
    restaurant: 'Restaurante',
    business: 'Comércio',
    'public-service': 'Serviço público',
    leisure: 'Lazer',
    transport: 'Transporte',
    nature: 'Natureza',
    'other-realm': 'Outra dimensão',
    other: 'Outro',
};

export function getLocationType(type: string): string {
    return TYPE_LABELS[type] ?? 'Outro';
}
