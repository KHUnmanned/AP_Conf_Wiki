<template>
  <table class="time-table">
    <thead>
      <tr>
        <th>Start Time</th>
        <th>Event</th>
        <th>Speaker</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(slot, idx) in slots" :key="slot">
        <!-- always render the time column -->
        <td>{{ slot }}</td>

        <!-- if an event starts here... -->
        <template v-if="startsMap[slot]">
          <template v-if="startsMap[slot].merge">
            <!-- merged Event+Speaker cell -->
            <td
              :rowspan="startsMap[slot].span"
              colspan="2"
              :style="{ backgroundColor: isDark ? '#1a3c47' : '#e0f0ff' }"
            >
              {{ startsMap[slot].title }}
            </td>
          </template>
          <template v-else>
            <!-- normal separate Event and Speaker cells -->
            <td :rowspan="startsMap[slot].span">{{ startsMap[slot].title }}</td>
            <td :rowspan="startsMap[slot].span">{{ startsMap[slot].speaker }}</td>
          </template>
        </template>

        <!-- if this slot is covered by a previous rowspan, skip -->
        <template v-else-if="skippedRows.has(idx)">
          <!-- nothing -->
        </template>

        <!-- otherwise empty cells -->
        <template v-else>
          <td></td>
          <td></td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const colour = '#003f7f'

const props = defineProps({
  /**
   * events: [
   *   {
   *     start: '09:40',
   *     end:   '10:00',
   *     title: '1st Talk',
   *     speaker: 'Tridge',
   *     merge: true        // <- if true, col-span Event+Speaker
   *   },
   *   …
   * ]
   */
  events: {
    type: Array,
    default: () => [],
  },
   /** First time slot (inclusive), e.g. "08:00" */
  rangeStart: {
    type: String,
    default: () => '08:00',
  },
  /** Last time slot (inclusive), e.g. "22:00" */
  rangeEnd: {
    type: String,
    default: () => '22:00',
  },
})

// generate 20-minute slots 08:00 → 22:00
function generateSlots(start, end) {
  const pad = n => String(n).padStart(2, '0')
  let [h, m] = start.split(':').map(Number)
  const [hEnd, mEnd] = end.split(':').map(Number)
  const out = []
  while (h < hEnd || (h === hEnd && m <= mEnd)) {
    out.push(`${pad(h)}:${pad(m)}`)
    m += 20
    if (m >= 60) { h += 1; m -= 60 }
  }
  return out
}
const slots = generateSlots(props.rangeStart, props.rangeEnd)

// build lookup: slot → { title, speaker, span, merge }
// and Set of row-indices to skip
const startsMap = {}
const skippedRows = new Set()

props.events.forEach(evt => {
  const toMin = t => {
    const [hh, mm] = t.split(':').map(Number)
    return hh * 60 + mm
  }
  const duration = toMin(evt.end) - toMin(evt.start)
  const span = Math.max(1, Math.ceil(duration / 20))

  startsMap[evt.start] = {
    title: evt.title,
    speaker: evt.speaker,
    span,
    merge: !!evt.merge,
  }

  const startIdx = slots.indexOf(evt.start)
  for (let i = 1; i < span; i++) {
    skippedRows.add(startIdx + i)
  }
})
</script>

<style scoped>
.time-table {
  width: 100%;
  border-collapse: collapse;
}
.time-table th,
.time-table td {
  border: 1px solid #ccc;
  padding: 0.5em 3em;
  text-align: center;      /* horizontal centering */
  vertical-align: middle;  /* vertical centering */
  white-space: pre-wrap;
}

/* override only the first column (Start Time) */
.time-table th:first-child,
.time-table td:first-child {
  padding: 0.75em 1.0em;
}

</style>
