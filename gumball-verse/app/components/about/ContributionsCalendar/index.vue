<script setup>
const props = defineProps({
    username: String,
});

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const WEEKDAYS = ['', 'Seg', '', 'Qua', '', 'Sex', ''];

const { data, error } = await useFetch(
    `https://github-contributions-api.jogruber.de/v4/${props.username}`,
    { query: { y: 'last' } }
);

const days = computed(() => data.value?.contributions ?? []);

const weeks = computed(() => {
    if (!days.value.length) {
        return [];
    }

    const offset = new Date(`${days.value[0].date}T00:00:00`).getDay();
    const cells = [...Array(offset).fill(null), ...days.value];
    const result = [];

    for (let index = 0; index < cells.length; index += 7) {
        result.push(cells.slice(index, index + 7));
    }

    return result;
});

function getMonthLabel(week) {
    const firstOfMonth = week.find((day) => day?.date.endsWith('-01'));
    return firstOfMonth ? MONTHS[Number(firstOfMonth.date.slice(5, 7)) - 1] : '';
}

function getDayTitle(day) {
    const label = day.count === 1 ? 'contribuição' : 'contribuições';
    return `${day.count} ${label} em ${formatDate(day.date)}`;
}

const stats = computed(() => {
    let longestStreak = 0;
    let currentStreak = 0;
    let bestDay = days.value[0];

    for (const day of days.value) {
        currentStreak = day.count > 0 ? currentStreak + 1 : 0;
        longestStreak = Math.max(longestStreak, currentStreak);

        if (day.count > bestDay.count) {
            bestDay = day;
        }
    }

    const activeDays = days.value.filter((day) => day.count > 0).length;

    return [
        {
            value: formatNumber(data.value.total.lastYear),
            label: 'contribuições no último ano',
            color: 'blue',
        },
        { value: formatNumber(activeDays), label: 'dias com atividade', color: 'yellow' },
        { value: `${longestStreak} dias`, label: 'maior sequência', color: 'orange' },
        { value: formatNumber(bestDay.count), label: 'no melhor dia', color: 'pink' },
    ];
});

const scroller = ref(null);

onMounted(() => {
    if (scroller.value) {
        scroller.value.scrollLeft = scroller.value.scrollWidth;
    }
});
</script>

<template>
    <section class="section">
        <div class="container">
            <SectionHeader
                eyebrow="Atividade"
                lead="Cada quadradinho é um dia. Quanto mais azul, mais código saiu naquele dia."
            >
                Um ano de <em>commits</em>
            </SectionHeader>

            <StateMessage v-if="error || !days.length">
                Não foi possível carregar o gráfico de contribuições agora.
            </StateMessage>

            <div v-else class="calendar">
                <div ref="scroller" class="calendar__scroller">
                    <div class="calendar__graph">
                        <div class="calendar__weekdays">
                            <span v-for="(weekday, index) in WEEKDAYS" :key="index">
                                {{ weekday }}
                            </span>
                        </div>

                        <div
                            v-for="(week, weekIndex) in weeks"
                            :key="weekIndex"
                            class="calendar__week"
                        >
                            <span class="calendar__month">{{ getMonthLabel(week) }}</span>
                            <template v-for="(day, dayIndex) in week" :key="dayIndex">
                                <span
                                    v-if="day"
                                    class="calendar__day"
                                    :class="`calendar__day--level-${day.level}`"
                                    :title="getDayTitle(day)"
                                ></span>
                                <span v-else class="calendar__day calendar__day--empty"></span>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="calendar__legend">
                    <span>Menos</span>
                    <span
                        v-for="level in [0, 1, 2, 3, 4]"
                        :key="level"
                        class="calendar__day"
                        :class="`calendar__day--level-${level}`"
                    ></span>
                    <span>Mais</span>
                </div>

                <dl class="calendar__stats">
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        class="calendar__stat"
                        :style="{ '--stat-color': `var(--color-${stat.color})` }"
                    >
                        <dt>{{ stat.value }}</dt>
                        <dd>{{ stat.label }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>

<style scoped>
.calendar {
    padding: clamp(18px, 3vw, 32px);
    background-color: var(--color-paper);
    border: var(--border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
}

.calendar__scroller {
    overflow-x: auto;
    padding-bottom: 6px;
}

.calendar__graph {
    display: flex;
    gap: 3px;
    width: max-content;
    margin-inline: auto;
}

.calendar__weekdays,
.calendar__week {
    display: grid;
    grid-template-rows: 16px repeat(7, 13px);
    gap: 3px;
}

.calendar__weekdays {
    grid-template-rows: repeat(7, 13px);
    margin-top: 19px;
    margin-right: 4px;
}

.calendar__weekdays span,
.calendar__month {
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
    color: var(--color-muted);
    white-space: nowrap;
}

.calendar__month {
    width: 13px;
    overflow: visible;
}

.calendar__day {
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 3px;
    outline: 1px solid rgba(28, 36, 51, 0.06);
    outline-offset: -1px;
    transition: transform 0.15s ease;
}

.calendar__week .calendar__day:hover {
    outline-color: var(--color-ink);
    transform: scale(1.35);
}

.calendar__day--empty {
    visibility: hidden;
}

.calendar__day--level-0 {
    background-color: #efe4d2;
}

.calendar__day--level-1 {
    background-color: #b8e6f5;
}

.calendar__day--level-2 {
    background-color: #6dcdec;
}

.calendar__day--level-3 {
    background-color: #2ea8d6;
}

.calendar__day--level-4 {
    background-color: #17668c;
}

.calendar__legend {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    padding-top: 12px;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--color-muted);
}

.calendar__legend span:first-child {
    margin-right: 4px;
}

.calendar__legend span:last-child {
    margin-left: 4px;
}

.calendar__stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin: 22px 0 0;
    padding: 22px 0 0;
    border-top: 2px dashed rgba(28, 36, 51, 0.12);
}

.calendar__stat {
    position: relative;
    overflow: hidden;
    padding: 16px 18px 16px 22px;
    background-color: var(--color-cream);
    border-radius: var(--radius-sm);
}

.calendar__stat::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 6px;
    background-color: var(--stat-color);
}

.calendar__stat dt {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 2.6vw, 2rem);
    font-weight: 700;
    line-height: 1.1;
}

.calendar__stat dd {
    margin: 2px 0 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-ink-soft);
}

@media (max-width: 900px) {
    .calendar__stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .calendar__stats {
        gap: 10px;
    }

    .calendar__stat {
        padding: 12px 12px 12px 18px;
    }

    .calendar__stat dd {
        font-size: 0.68rem;
        letter-spacing: 0.04em;
    }
}
</style>
