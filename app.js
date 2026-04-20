'use strict';

// ── PROGRAM DATA ──────────────────────────────────────────────────────────────
const PROGRAM = {
  'Push A': { day: 'Mon', exercises: [
    { name: 'Incline DB Press',           sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Flat BB Bench',              sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Seated DB Shoulder Press',   sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Cable Lateral Raises',       sets: 3, repRange: '12-15', type: 'accessory' },
    { name: 'Cable Tri. Pushdown',        sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Overhead Cable Tri. Ext.',   sets: 2, repRange: '12-15', type: 'accessory' },
  ]},
  'Pull A': { day: 'Tue', exercises: [
    { name: 'Pull-Ups',                   sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Chest Supported DB Row',     sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Lat Pulldown',               sets: 3, repRange: '10-12', type: 'compound' },
    { name: 'Cable Rear Delt Fly',        sets: 3, repRange: '12-15', type: 'accessory' },
    { name: 'EZ Bar Curl',                sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Hammer Curl',                sets: 2, repRange: '12',    type: 'accessory' },
  ]},
  'Zone 2': { day: 'Wed', exercises: [] },
  'Legs':   { day: 'Thu', exercises: [
    { name: 'BB Back Squat',              sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'BB RDL',                     sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Walking DB Lunges',          sets: 3, repRange: '10',    type: 'compound' },
    { name: 'Seated Hamstring Curl',      sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Leg Extension',              sets: 3, repRange: '13-15', type: 'accessory' },
    { name: 'Seated Calf Raises',         sets: 4, repRange: '13-15', type: 'accessory' },
  ]},
  'Push B': { day: 'Fri', exercises: [
    { name: 'Flat BB Bench',              sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Incline DB Press',           sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Shoulder Press',             sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Cable Lateral Raises',       sets: 3, repRange: '12-15', type: 'accessory' },
    { name: 'Skull Crushers',             sets: 3, repRange: '12',    type: 'accessory' },
    { name: 'Rope Tri. Pushdown',         sets: 2, repRange: '12-15', type: 'accessory' },
  ]},
  'Pull B': { day: 'Sat', exercises: [
    { name: 'Pull-Ups',                   sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Single-Arm DB Row',          sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Lat. Pulldown',              sets: 3, repRange: '10-12', type: 'compound' },
    { name: 'Face Pulls',                 sets: 3, repRange: '15',    type: 'accessory' },
    { name: 'Incline DB Curl',            sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Hammer Curl',               sets: 2, repRange: '12',    type: 'accessory' },
  ]},
};

const DAY_ORDER = ['Push A','Pull A','Zone 2','Legs','Push B','Pull B'];

// Seed history from Excel data
const SEED_HISTORY = {
  'Push A': [
    { date:'3/9',  exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'7'},{w:'65',r:'6'},{w:'65',r:'6'}], 'Flat BB Bench':[{w:'165',r:'10'},{w:'170',r:'9'},{w:'185',r:'8'}], 'Seated DB Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'9'},{w:'35',r:'8'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'14'},{w:'12.5',r:'12'}], 'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'52.5',r:'11'},{w:'52.5',r:'10'}], 'Overhead Cable Tri. Ext.':[{w:'37.5',r:'12'},{w:'37.5',r:'12'}] }},
    { date:'3/16', exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'7'},{w:'65',r:'6'}], 'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'9'},{w:'175',r:'8'}], 'Seated DB Shoulder Press':[{w:'40',r:'9'},{w:'40',r:'8'},{w:'40',r:'8'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'13'}], 'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'47.5',r:'12'},{w:'47.5',r:'12'}], 'Overhead Cable Tri. Ext.':[{w:'37.5',r:'15'},{w:'37.5',r:'15'}] }},
    { date:'3/30', exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'7'}], 'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'9'},{w:'175',r:'8'}], 'Seated DB Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'10'},{w:'40',r:'9'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'13'}], 'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'47.5',r:'12'},{w:'47.5',r:'12'}], 'Overhead Cable Tri. Ext.':[{w:'47.5',r:'12'},{w:'47.5',r:'12'}] }},
    { date:'4/6',  exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'}], 'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'10'},{w:'175',r:'9'}], 'Seated DB Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'10'},{w:'35',r:'10'}], 'Cable Lateral Raises':[{w:'20',r:'15'},{w:'20',r:'14'},{w:'20',r:'13'}], 'Cable Tri. Pushdown':[{w:'60',r:'12'},{w:'70',r:'12'},{w:'70',r:'12'}], 'Overhead Cable Tri. Ext.':[{w:'70',r:'15'},{w:'80',r:'15'}] }},
    { date:'4/13', exercises:{ 'Incline DB Press':[{w:'70',r:'6'},{w:'70',r:'6'},{w:'70',r:'6'},{w:'70',r:'6'}], 'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'8'},{w:'175',r:'8'}], 'Seated DB Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'10'},{w:'35',r:'10'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'15'}], 'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'47.5',r:'12'},{w:'47.5',r:'12'}], 'Overhead Cable Tri. Ext.':[{w:'47.5',r:'12'},{w:'47.5',r:'12'}] }},
  ],
  'Pull A': [
    { date:'3/10', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'7'},{w:'BW',r:'6'}], 'Chest Supported DB Row':[{w:'60',r:'10'},{w:'60',r:'9'},{w:'60',r:'8'}], 'Lat Pulldown':[{w:'—',r:'—'},{w:'—',r:'—'},{w:'—',r:'—'}], 'Cable Rear Delt Fly':[{w:'15',r:'15'},{w:'20',r:'14'},{w:'20',r:'12'}], 'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'11'},{w:'60',r:'10'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'3/17', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}], 'Chest Supported DB Row':[{w:'60',r:'10'},{w:'60',r:'10'},{w:'60',r:'9'}], 'Lat Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'11'}], 'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'14'},{w:'20',r:'13'}], 'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'11'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'3/31', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}], 'Chest Supported DB Row':[{w:'60',r:'10'},{w:'60',r:'10'},{w:'60',r:'10'}], 'Lat Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'12'}], 'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}], 'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'12'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/7',  exercises:{ 'Pull-Ups':[{w:'+10',r:'7'},{w:'+10',r:'7'},{w:'+10',r:'7'},{w:'+10',r:'7'}], 'Chest Supported DB Row':[{w:'65',r:'10'},{w:'65',r:'9'},{w:'65',r:'8'}], 'Lat Pulldown':[{w:'150',r:'12'},{w:'150',r:'11'},{w:'150',r:'10'}], 'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}], 'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'12'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/14', exercises:{ 'Pull-Ups':[{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'7'}], 'Chest Supported DB Row':[{w:'65',r:'10'},{w:'65',r:'10'},{w:'65',r:'9'}], 'Lat Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'12'}], 'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}], 'EZ Bar Curl':[{w:'70',r:'10'},{w:'70',r:'10'},{w:'70',r:'10'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
  ],
  'Legs': [
    { date:'3/12', exercises:{ 'BB Back Squat':[{w:'205',r:'8'},{w:'205',r:'7'},{w:'205',r:'6'},{w:'205',r:'6'}], 'BB RDL':[{w:'185',r:'10'},{w:'185',r:'9'},{w:'185',r:'8'}], 'Walking DB Lunges':[{w:'40',r:'10'},{w:'40',r:'10'},{w:'40',r:'10'}], 'Seated Hamstring Curl':[{w:'161',r:'12'},{w:'161',r:'11'},{w:'161',r:'10'}], 'Leg Extension':[{w:'152',r:'15'},{w:'152',r:'14'},{w:'152',r:'13'}], 'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'14'},{w:'300',r:'13'},{w:'300',r:'13'}] }},
    { date:'3/19', exercises:{ 'BB Back Squat':[{w:'205',r:'8'},{w:'205',r:'8'},{w:'205',r:'7'},{w:'205',r:'6'}], 'BB RDL':[{w:'185',r:'10'},{w:'185',r:'10'},{w:'185',r:'9'}], 'Walking DB Lunges':[{w:'45',r:'10'},{w:'45',r:'10'},{w:'45',r:'10'}], 'Seated Hamstring Curl':[{w:'161',r:'12'},{w:'161',r:'12'},{w:'161',r:'11'}], 'Leg Extension':[{w:'152',r:'15'},{w:'152',r:'15'},{w:'152',r:'14'}], 'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'14'},{w:'300',r:'13'}] }},
    { date:'4/2',  exercises:{ 'BB Back Squat':[{w:'205',r:'8'},{w:'205',r:'8'},{w:'205',r:'8'},{w:'205',r:'7'}], 'BB RDL':[{w:'185',r:'10'},{w:'185',r:'10'},{w:'185',r:'10'}], 'Walking DB Lunges':[{w:'50',r:'10'},{w:'50',r:'10'},{w:'50',r:'10'}], 'Seated Hamstring Curl':[{w:'165',r:'12'},{w:'165',r:'12'},{w:'165',r:'12'}], 'Leg Extension':[{w:'150',r:'15'},{w:'150',r:'15'},{w:'150',r:'15'}], 'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'14'},{w:'300',r:'13'}] }},
    { date:'4/9',  exercises:{ 'BB Back Squat':[{w:'215',r:'6'},{w:'215',r:'6'},{w:'215',r:'6'},{w:'215',r:'6'}], 'BB RDL':[{w:'195',r:'10'},{w:'195',r:'9'},{w:'195',r:'8'}], 'Walking DB Lunges':[{w:'50',r:'10'},{w:'50',r:'10'},{w:'50',r:'10'}], 'Seated Hamstring Curl':[{w:'180',r:'12'},{w:'180',r:'12'},{w:'180',r:'12'}], 'Leg Extension':[{w:'150',r:'15'},{w:'150',r:'15'},{w:'150',r:'15'}], 'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'13'}] }},
    { date:'4/16', exercises:{ 'BB Back Squat':[{w:'215',r:'7'},{w:'215',r:'7'},{w:'215',r:'7'},{w:'215',r:'6'}], 'BB RDL':[{w:'195',r:'10'},{w:'195',r:'10'},{w:'195',r:'10'}], 'Walking DB Lunges':[{w:'50',r:'10'},{w:'50',r:'10'},{w:'50',r:'10'}], 'Seated Hamstring Curl':[{w:'173',r:'12'},{w:'173',r:'12'},{w:'173',r:'11'}], 'Leg Extension':[{w:'167',r:'15'},{w:'167',r:'15'},{w:'167',r:'15'}], 'Seated Calf Raises':[{w:'320',r:'15'},{w:'320',r:'15'},{w:'320',r:'15'},{w:'320',r:'13'}] }},
  ],
  'Push B': [
    { date:'3/13', exercises:{ 'Flat BB Bench':[{w:'185',r:'8'},{w:'185',r:'7'},{w:'185',r:'6'},{w:'185',r:'6'}], 'Incline DB Press':[{w:'60',r:'10'},{w:'60',r:'9'},{w:'60',r:'8'}], 'Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'9'},{w:'40',r:'8'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'14'},{w:'12.5',r:'14'}], 'Skull Crushers':[{w:'40',r:'12'},{w:'40',r:'12'},{w:'40',r:'12'}], 'Rope Tri. Pushdown':[{w:'47.5',r:'15'},{w:'47.5',r:'12'}] }},
    { date:'3/27', exercises:{ 'Flat BB Bench':[{w:'185',r:'8'},{w:'185',r:'8'},{w:'185',r:'7'},{w:'185',r:'6'}], 'Incline DB Press':[{w:'60',r:'10'},{w:'60',r:'9'},{w:'60',r:'7'}], 'Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'9'},{w:'35',r:'9'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'14'}], 'Skull Crushers':[{w:'50',r:'12'},{w:'50',r:'12'},{w:'50',r:'12'}], 'Rope Tri. Pushdown':[{w:'42.5',r:'12'},{w:'42.5',r:'12'}] }},
    { date:'4/3',  exercises:{ 'Flat BB Bench':[{w:'185',r:'8'},{w:'185',r:'8'},{w:'185',r:'8'},{w:'185',r:'8'}], 'Incline DB Press':[{w:'60',r:'10'},{w:'60',r:'10'},{w:'60',r:'10'}], 'Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'9'},{w:'40',r:'7'}], 'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'15'}], 'Skull Crushers':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'12'}], 'Rope Tri. Pushdown':[{w:'42.5',r:'12'},{w:'42.5',r:'12'}] }},
    { date:'4/17', exercises:{ 'Flat BB Bench':[{w:'195',r:'7'},{w:'195',r:'7'},{w:'195',r:'6'},{w:'195',r:'6'}], 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'}], 'Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'10'},{w:'35',r:'10'}], 'Cable Lateral Raises':[{w:'14',r:'15'},{w:'14',r:'13'},{w:'14',r:'12'}], 'Skull Crushers':[{w:'70',r:'12'},{w:'70',r:'12'},{w:'70',r:'12'}], 'Rope Tri. Pushdown':[{w:'52.5',r:'12'},{w:'52.5',r:'12'}] }},
  ],
  'Pull B': [
    { date:'3/14', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'7'}], 'Single-Arm DB Row':[{w:'70',r:'10'},{w:'70',r:'9'},{w:'70',r:'8'}], 'Lat. Pulldown':[{w:'146',r:'12'},{w:'146',r:'11'},{w:'146',r:'10'}], 'Face Pulls':[{w:'42.5',r:'15'},{w:'42.5',r:'15'},{w:'42.5',r:'15'}], 'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'11'},{w:'25',r:'10'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'3/28', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}], 'Single-Arm DB Row':[{w:'70',r:'10'},{w:'70',r:'10'},{w:'70',r:'10'}], 'Lat. Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'11'}], 'Face Pulls':[{w:'42.5',r:'15'},{w:'42.5',r:'15'},{w:'42.5',r:'15'}], 'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'11'},{w:'25',r:'10'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/4',  exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}], 'Single-Arm DB Row':[{w:'70',r:'10'},{w:'70',r:'10'},{w:'70',r:'10'}], 'Lat. Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'11'}], 'Face Pulls':[{w:'42.5',r:'15'},{w:'42.5',r:'15'},{w:'42.5',r:'15'}], 'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'12'},{w:'25',r:'11'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/18', exercises:{ 'Pull-Ups':[{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'8'}], 'Single-Arm DB Row':[{w:'75',r:'10'},{w:'75',r:'9'},{w:'75',r:'8'}], 'Lat. Pulldown':[{w:'156',r:'12'},{w:'156',r:'11'},{w:'156',r:'10'}], 'Face Pulls':[{w:'80',r:'15'},{w:'80',r:'15'},{w:'80',r:'15'}], 'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'12'},{w:'25',r:'12'}], 'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
  ],
};

const SEED_BW = [
  { date:'3/9',  bw:200,   cals:'', protein:'' },
  { date:'4/17', bw:203.8, cals:'', protein:'' },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }

let workouts = load('wp_workouts', {});
let bwLog    = load('wp_bw', SEED_BW);
let activeTab = 'log';
let selectedDay = null;

// Merge seed into saved (seed comes first, saved appended)
Object.keys(SEED_HISTORY).forEach(k => {
  if (!workouts[k]) workouts[k] = SEED_HISTORY[k];
});

// ── HELPERS ───────────────────────────────────────────────────────────────────
function getAllSessions(workoutName) {
  return workouts[workoutName] || [];
}
function getLastSession(workoutName) {
  const all = getAllSessions(workoutName);
  return all.length ? all[all.length - 1] : null;
}
function suggest(workoutName, exName) {
  const last = getLastSession(workoutName);
  if (!last) return null;
  const sets = last.exercises[exName];
  if (!sets || !sets.length) return null;
  const prog = PROGRAM[workoutName];
  const ex = prog.exercises.find(e => e.name === exName);
  const numericSets = sets.filter(s => s.w && !['BW','—',''].includes(s.w) && !s.w.startsWith('+'));
  if (!numericSets.length) return { w: sets[0].w, action: 'hold' };
  const lastW = parseFloat(numericSets[0].w);
  const topRep = ex ? parseInt((ex.repRange.split('-')[1] || ex.repRange)) : 10;
  const minRep = Math.min(...numericSets.map(s => parseInt(s.r) || 0));
  if (minRep >= topRep) {
    const inc = lastW >= 100 ? 5 : 2.5;
    return { w: lastW + inc, action: 'up' };
  }
  return { w: lastW, action: 'hold' };
}
function fmt(date) { return date; }
function today() {
  const d = new Date();
  return `${d.getMonth()+1}/${d.getDate()}`;
}
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}

// ── RENDER ────────────────────────────────────────────────────────────────────
function renderHeader(title, sub) {
  document.querySelector('header h1').textContent = title;
  document.querySelector('header p').textContent = sub || '';
}

// LOG TAB
function renderLog() {
  renderHeader('Workout Plan', 'Phase 1 — Mar 9 to Jun 1');
  const s = document.getElementById('sec-log');
  const dayGrid = DAY_ORDER.map((name, i) => {
    const prog = PROGRAM[name];
    const sel = selectedDay === name;
    return `<button class="day-btn ${sel ? 'active' : ''}" onclick="selectDay('${name}')">
      <div class="day-short">${prog.day}</div>
      <div class="day-name">${name}</div>
    </button>`;
  }).join('');

  let workoutHTML = '';
  if (selectedDay) {
    if (selectedDay === 'Zone 2') {
      workoutHTML = `<div class="card"><p style="color:var(--text2);font-size:14px;">Zone 2 cardio day. Log duration in bodyweight notes if needed.</p></div>`;
    } else {
      const prog = PROGRAM[selectedDay];
      const exBlocks = prog.exercises.map((ex, ei) => {
        const sug = suggest(selectedDay, ex.name);
        const badge = sug ? (sug.action === 'up'
          ? `<span class="badge badge-up">+weight</span>`
          : `<span class="badge badge-hold">hold</span>`) : '';
        const sets = Array.from({length: ex.sets}, (_, si) => `
          <div class="set-col">
            <div class="set-num">S${si+1}</div>
            <div class="set-inputs">
              <div>
                <input type="text" inputmode="decimal" id="w_${ei}_${si}" placeholder="${sug ? sug.w : 'wt'}" />
                <div class="set-lbl">lbs</div>
              </div>
              <div>
                <input type="number" inputmode="numeric" id="r_${ei}_${si}" placeholder="reps" />
                <div class="set-lbl">reps</div>
              </div>
            </div>
          </div>`).join('');
        return `<div class="exercise-block">
          <div class="ex-header">
            <div class="ex-name">${ex.name}${badge}</div>
            <div class="ex-scheme">${ex.sets}×${ex.repRange}</div>
          </div>
          <div class="sets-row">${sets}</div>
          <textarea class="ex-note" id="note_${ei}" rows="1" placeholder="Notes..."></textarea>
        </div>`;
      }).join('');
      workoutHTML = `<div class="card">${exBlocks}<button class="btn btn-primary" onclick="saveWorkout()">Save workout</button></div>`;
    }
  }

  s.innerHTML = `<div class="day-grid">${dayGrid}</div>${workoutHTML}`;
}

function selectDay(name) {
  selectedDay = name;
  renderLog();
  if (name !== 'Zone 2') {
    setTimeout(() => {
      document.querySelector('.card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

function saveWorkout() {
  if (!selectedDay || selectedDay === 'Zone 2') return;
  const prog = PROGRAM[selectedDay];
  const entry = { date: today(), exercises: {} };
  let hasData = false;
  prog.exercises.forEach((ex, ei) => {
    const sets = [];
    for (let si = 0; si < ex.sets; si++) {
      const w = document.getElementById(`w_${ei}_${si}`)?.value?.trim();
      const r = document.getElementById(`r_${ei}_${si}`)?.value?.trim();
      if (w || r) { sets.push({ w: w||'', r: r||'' }); hasData = true; }
    }
    const note = document.getElementById(`note_${ei}`)?.value?.trim();
    entry.exercises[ex.name] = sets;
    if (note) entry.note = note;
  });
  if (!hasData) { toast('Nothing to save'); return; }
  if (!workouts[selectedDay]) workouts[selectedDay] = [];
  workouts[selectedDay].push(entry);
  save('wp_workouts', workouts);
  toast('Workout saved!');
  renderLog();
}

// NEXT TAB
function renderNext() {
  const dow = new Date().getDay(); // 0=Sun
  const map = {1:'Push A',2:'Pull A',3:'Zone 2',4:'Legs',5:'Push B',6:'Pull B'};
  const todayWorkout = map[dow];
  const target = todayWorkout || 'Push A';
  const prog = PROGRAM[target];
  renderHeader('Next session', todayWorkout ? 'Today\'s workout' : 'Next up');

  if (target === 'Zone 2') {
    document.getElementById('sec-next').innerHTML = `<div class="card"><p style="color:var(--text2);font-size:14px;">Zone 2 cardio day. Keep it easy — 60–70% max HR.</p></div>`;
    return;
  }
  const rows = prog.exercises.map(ex => {
    const sug = suggest(target, ex.name);
    return `<div class="next-ex-row">
      <div>
        <div class="next-ex-name">${ex.name}</div>
        <div class="next-ex-scheme">${ex.sets} sets × ${ex.repRange} reps</div>
      </div>
      <div class="next-target">${sug ? sug.w + (sug.action==='up'?' ↑':'') : '—'}</div>
    </div>`;
  }).join('');
  document.getElementById('sec-next').innerHTML = `
    <div class="card"><div class="card-title">${target}</div>${rows}</div>
    <p style="font-size:12px;color:var(--text3);text-align:center;">Target weights based on your last session. ↑ = increase.</p>`;
}

// HISTORY TAB
function renderHistory() {
  renderHeader('History', 'All logged sessions');
  const s = document.getElementById('sec-history');
  const lifts = DAY_ORDER.filter(d => d !== 'Zone 2');
  let html = '';
  lifts.forEach(name => {
    const sessions = getAllSessions(name).slice().reverse();
    if (!sessions.length) return;
    html += `<div class="card"><div class="card-title">${name}</div>`;
    sessions.forEach(sess => {
      html += `<div class="history-session"><div class="history-date">${sess.date}</div><div>`;
      Object.entries(sess.exercises).forEach(([ex, sets]) => {
        if (!sets.length) return;
        const setsStr = sets.map(s => `${s.w}×${s.r}`).join(', ');
        html += `<div class="history-ex-row"><span class="history-ex-name">${ex}</span><span class="history-ex-sets">${setsStr}</span></div>`;
      });
      html += `</div></div>`;
    });
    html += `</div>`;
  });
  s.innerHTML = html || `<div class="empty">No sessions logged yet.</div>`;
}

// PRs TAB
function renderPRs() {
  renderHeader('Personal records', 'Best weight per lift');
  const lifts = [
    { name:'BB Back Squat',           workout:'Legs' },
    { name:'Flat BB Bench',           workout:'Push B' },
    { name:'Incline DB Press',        workout:'Push A' },
    { name:'BB RDL',                  workout:'Legs' },
    { name:'Pull-Ups',                workout:'Pull A' },
    { name:'Single-Arm DB Row',       workout:'Pull B' },
    { name:'EZ Bar Curl',             workout:'Pull A' },
    { name:'Skull Crushers',          workout:'Push B' },
    { name:'Seated Hamstring Curl',   workout:'Legs' },
    { name:'Leg Extension',           workout:'Legs' },
  ];
  const cards = lifts.map(lift => {
    let maxW = 0, maxDate = '';
    getAllSessions(lift.workout).forEach(s => {
      (s.exercises[lift.name] || []).forEach(set => {
        const w = parseFloat(set.w);
        if (!isNaN(w) && w > maxW) { maxW = w; maxDate = s.date; }
      });
    });
    return `<div class="pr-card">
      <div class="pr-lift">${lift.name}</div>
      <div class="pr-weight">${maxW > 0 ? maxW + ' lbs' : '—'}</div>
      <div class="pr-date">${maxDate}</div>
    </div>`;
  }).join('');
  document.getElementById('sec-prs').innerHTML = `<div class="pr-grid">${cards}</div>`;
}

// BODYWEIGHT TAB
function renderBW() {
  renderHeader('Bodyweight', 'Weight & nutrition log');
  const all = [...bwLog].reverse();
  const first = bwLog[0];
  const last = bwLog[bwLog.length - 1];
  const change = last && first ? (last.bw - first.bw).toFixed(1) : null;
  const changeClass = change > 0 ? 'green' : change < 0 ? 'red' : '';

  const rows = all.map(e => `
    <div class="bw-row-entry">
      <div class="bw-entry-date">${e.date}</div>
      <div class="bw-entry-vals">
        <div><div class="bw-entry-val">${e.bw} lbs</div></div>
        ${e.cals ? `<div><div class="bw-entry-val">${e.cals}</div><div class="bw-entry-sub">cal</div></div>` : ''}
        ${e.protein ? `<div><div class="bw-entry-val">${e.protein}g</div><div class="bw-entry-sub">protein</div></div>` : ''}
      </div>
    </div>`).join('');

  document.getElementById('sec-bw').innerHTML = `
    <div class="stats-row">
      <div class="stat-card"><div class="stat-label">Start</div><div class="stat-val">${first ? first.bw : '—'}</div></div>
      <div class="stat-card"><div class="stat-label">Current</div><div class="stat-val">${last ? last.bw : '—'}</div></div>
      <div class="stat-card"><div class="stat-label">Change</div><div class="stat-val ${changeClass}">${change !== null ? (change >= 0 ? '+' : '') + change : '—'}</div></div>
    </div>
    <div class="card">
      <div class="card-title">Log entry</div>
      <div class="bw-form">
        <input type="text" id="bw-date" placeholder="Date (e.g. 4/19)" />
        <input type="number" id="bw-val" placeholder="Weight (lbs)" step="0.1" inputmode="decimal" />
        <input type="number" id="bw-cals" placeholder="Calories" inputmode="numeric" />
        <input type="number" id="bw-protein" placeholder="Protein (g)" inputmode="numeric" />
      </div>
      <button class="btn btn-primary" onclick="logBW()">Add entry</button>
    </div>
    <div class="card">
      <div class="card-title">Log</div>
      ${rows || '<div class="empty">No entries yet.</div>'}
    </div>`;
}

function logBW() {
  const dateVal   = document.getElementById('bw-date').value.trim();
  const bwVal     = parseFloat(document.getElementById('bw-val').value);
  const cals      = document.getElementById('bw-cals').value.trim();
  const protein   = document.getElementById('bw-protein').value.trim();
  if (!bwVal) { toast('Enter a weight'); return; }
  const d = dateVal || today();
  bwLog.push({ date: d, bw: bwVal, cals, protein });
  save('wp_bw', bwLog);
  toast('Entry saved!');
  renderBW();
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function showTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + tab).classList.add('active');
  document.getElementById('nav-' + tab).classList.add('active');
  document.querySelector('main').scrollTop = 0;
  if (tab === 'log')     renderLog();
  if (tab === 'next')    renderNext();
  if (tab === 'history') renderHistory();
  if (tab === 'prs')     renderPRs();
  if (tab === 'bw')      renderBW();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  showTab('log');
});
