export const LOCATION_TYPE_LABELS: Record<string, string> = {
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
};

export function getLocationType(type: string): string {
    return LOCATION_TYPE_LABELS[type] ?? 'Outro';
}
