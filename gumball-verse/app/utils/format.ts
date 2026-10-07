export function formatNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
}

export function formatMonthYear(isoDate: string): string {
    return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(
        new Date(isoDate)
    );
}

export function formatDate(date: string): string {
    const [year, month, day] = date.split('-').map(Number);

    return new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(year!, month! - 1, day));
}
