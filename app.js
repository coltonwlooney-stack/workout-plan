'use strict';

// ── SEED DATA ─────────────────────────────────────────────────────────────────
const DEFAULT_PROGRAM = {
  'Push A': { day: 'Mon', type: 'lift', exercises: [
    { name: 'Incline DB Press',         sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Flat BB Bench',            sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Seated DB Shoulder Press', sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Cable Lateral Raises',     sets: 3, repRange: '12-15', type: 'accessory' },
    { name: 'Cable Tri. Pushdown',      sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Overhead Cable Tri. Ext.', sets: 2, repRange: '12-15', type: 'accessory' },
  ]},
  'Pull A': { day: 'Tue', type: 'lift', exercises: [
    { name: 'Pull-Ups',                 sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Chest Supported DB Row',   sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Lat Pulldown',             sets: 3, repRange: '10-12', type: 'compound' },
    { name: 'Cable Rear Delt Fly',      sets: 3, repRange: '12-15', type: 'accessory' },
    { name: 'EZ Bar Curl',              sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Hammer Curl',              sets: 2, repRange: '12',    type: 'accessory' },
  ]},
  'Zone 2': { day: 'Wed', type: 'cardio', exercises: [] },
  'Legs':   { day: 'Thu', type: 'lift', exercises: [
    { name: 'BB Back Squat',            sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'BB RDL',                   sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Walking DB Lunges',        sets: 3, repRange: '10',    type: 'compound' },
    { name: 'Seated Hamstring Curl',    sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Leg Extension',            sets: 3, repRange: '13-15', type: 'accessory' },
    { name: 'Seated Calf Raises',       sets: 4, repRange: '13-15', type: 'accessory' },
  ]},
  'Push B': { day: 'Fri', type: 'lift', exercises: [
    { name: 'Flat BB Bench',            sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Incline DB Press',         sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Shoulder Press',           sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Cable Lateral Raises',     sets: 3, repRange: '12-15', type: 'accessory' },
    { name: 'Skull Crushers',           sets: 3, repRange: '12',    type: 'accessory' },
    { name: 'Rope Tri. Pushdown',       sets: 2, repRange: '12-15', type: 'accessory' },
  ]},
  'Pull B': { day: 'Sat', type: 'lift', exercises: [
    { name: 'Pull-Ups',                 sets: 4, repRange: '6-8',   type: 'main' },
    { name: 'Single-Arm DB Row',        sets: 3, repRange: '8-10',  type: 'compound' },
    { name: 'Lat. Pulldown',            sets: 3, repRange: '10-12', type: 'compound' },
    { name: 'Face Pulls',               sets: 3, repRange: '15',    type: 'accessory' },
    { name: 'Incline DB Curl',          sets: 3, repRange: '10-12', type: 'accessory' },
    { name: 'Hammer Curl',              sets: 2, repRange: '12',    type: 'accessory' },
  ]},
};

// All history including 4/20 Push A and 4/21 Pull A from screenshots
const SEED_HISTORY = {
  'Push A': [
    { date:'3/9',  exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'7'},{w:'65',r:'6'},{w:'65',r:'6'}],'Flat BB Bench':[{w:'165',r:'10'},{w:'170',r:'9'},{w:'185',r:'8'}],'Seated DB Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'9'},{w:'35',r:'8'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'14'},{w:'12.5',r:'12'}],'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'52.5',r:'11'},{w:'52.5',r:'10'}],'Overhead Cable Tri. Ext.':[{w:'37.5',r:'12'},{w:'37.5',r:'12'}] }},
    { date:'3/16', exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'7'},{w:'65',r:'6'}],'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'9'},{w:'175',r:'8'}],'Seated DB Shoulder Press':[{w:'40',r:'9'},{w:'40',r:'8'},{w:'40',r:'8'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'13'}],'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'47.5',r:'12'},{w:'47.5',r:'12'}],'Overhead Cable Tri. Ext.':[{w:'37.5',r:'15'},{w:'37.5',r:'15'}] }},
    { date:'3/30', exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'7'}],'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'9'},{w:'175',r:'8'}],'Seated DB Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'10'},{w:'40',r:'9'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'13'}],'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'47.5',r:'12'},{w:'47.5',r:'12'}],'Overhead Cable Tri. Ext.':[{w:'47.5',r:'12'},{w:'47.5',r:'12'}] }},
    { date:'4/6',  exercises:{ 'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'}],'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'10'},{w:'175',r:'9'}],'Seated DB Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'10'},{w:'35',r:'10'}],'Cable Lateral Raises':[{w:'20',r:'15'},{w:'20',r:'14'},{w:'20',r:'13'}],'Cable Tri. Pushdown':[{w:'60',r:'12'},{w:'70',r:'12'},{w:'70',r:'12'}],'Overhead Cable Tri. Ext.':[{w:'70',r:'15'},{w:'80',r:'15'}] }},
    { date:'4/13', exercises:{ 'Incline DB Press':[{w:'70',r:'6'},{w:'70',r:'6'},{w:'70',r:'6'},{w:'70',r:'6'}],'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'8'},{w:'175',r:'8'}],'Seated DB Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'10'},{w:'35',r:'10'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'15'}],'Cable Tri. Pushdown':[{w:'47.5',r:'12'},{w:'47.5',r:'12'},{w:'47.5',r:'12'}],'Overhead Cable Tri. Ext.':[{w:'47.5',r:'12'},{w:'47.5',r:'12'}] }},
    { date:'4/20', exercises:{ 'Incline DB Press':[{w:'70',r:'8'},{w:'70',r:'7'},{w:'70',r:'6'},{w:'70',r:'6'}],'Flat BB Bench':[{w:'175',r:'10'},{w:'175',r:'10'},{w:'175',r:'10'}],'Seated DB Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'10'},{w:'40',r:'10'}],'Cable Lateral Raises':[{w:'25',r:'15'},{w:'25',r:'15'},{w:'25',r:'15'}],'Cable Tri. Pushdown':[{w:'52.5',r:'12'},{w:'52.5',r:'11'},{w:'52.5',r:'10'}],'Overhead Cable Tri. Ext.':[{w:'52.5',r:'12'},{w:'52.5',r:'12'}],'Hanging Leg Raises':[{w:'BW',r:'10'},{w:'BW',r:'10'},{w:'BW',r:'10'}] }},
  ],
  'Pull A': [
    { date:'3/10', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'7'},{w:'BW',r:'6'}],'Chest Supported DB Row':[{w:'60',r:'10'},{w:'60',r:'9'},{w:'60',r:'8'}],'Lat Pulldown':[{w:'—',r:'—'}],'Cable Rear Delt Fly':[{w:'15',r:'15'},{w:'20',r:'14'},{w:'20',r:'12'}],'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'11'},{w:'60',r:'10'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'3/17', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}],'Chest Supported DB Row':[{w:'60',r:'10'},{w:'60',r:'10'},{w:'60',r:'9'}],'Lat Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'11'}],'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'14'},{w:'20',r:'13'}],'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'11'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'3/31', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}],'Chest Supported DB Row':[{w:'60',r:'10'},{w:'60',r:'10'},{w:'60',r:'10'}],'Lat Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'12'}],'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}],'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'12'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/7',  exercises:{ 'Pull-Ups':[{w:'+10',r:'7'},{w:'+10',r:'7'},{w:'+10',r:'7'},{w:'+10',r:'7'}],'Chest Supported DB Row':[{w:'65',r:'10'},{w:'65',r:'9'},{w:'65',r:'8'}],'Lat Pulldown':[{w:'150',r:'12'},{w:'150',r:'11'},{w:'150',r:'10'}],'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}],'EZ Bar Curl':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'12'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/14', exercises:{ 'Pull-Ups':[{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'7'}],'Chest Supported DB Row':[{w:'65',r:'10'},{w:'65',r:'10'},{w:'65',r:'9'}],'Lat Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'12'}],'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}],'EZ Bar Curl':[{w:'70',r:'10'},{w:'70',r:'10'},{w:'70',r:'10'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/21', exercises:{ 'Pull-Ups':[{w:'+25',r:'8'},{w:'+25',r:'8'},{w:'+25',r:'7'},{w:'+25',r:'6'}],'Chest Supported DB Row':[{w:'65',r:'10'},{w:'65',r:'10'},{w:'65',r:'10'}],'Lat Pulldown':[{w:'156',r:'12'},{w:'156',r:'12'},{w:'156',r:'11'}],'Cable Rear Delt Fly':[{w:'20',r:'15'},{w:'20',r:'15'},{w:'20',r:'15'}],'EZ Bar Curl':[{w:'70',r:'12'},{w:'70',r:'12'},{w:'70',r:'11'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
  ],
  'Legs': [
    { date:'3/12', exercises:{ 'BB Back Squat':[{w:'205',r:'8'},{w:'205',r:'7'},{w:'205',r:'6'},{w:'205',r:'6'}],'BB RDL':[{w:'185',r:'10'},{w:'185',r:'9'},{w:'185',r:'8'}],'Walking DB Lunges':[{w:'40',r:'10'},{w:'40',r:'10'},{w:'40',r:'10'}],'Seated Hamstring Curl':[{w:'161',r:'12'},{w:'161',r:'11'},{w:'161',r:'10'}],'Leg Extension':[{w:'152',r:'15'},{w:'152',r:'14'},{w:'152',r:'13'}],'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'14'},{w:'300',r:'13'},{w:'300',r:'13'}] }},
    { date:'3/19', exercises:{ 'BB Back Squat':[{w:'205',r:'8'},{w:'205',r:'8'},{w:'205',r:'7'},{w:'205',r:'6'}],'BB RDL':[{w:'185',r:'10'},{w:'185',r:'10'},{w:'185',r:'9'}],'Walking DB Lunges':[{w:'45',r:'10'},{w:'45',r:'10'},{w:'45',r:'10'}],'Seated Hamstring Curl':[{w:'161',r:'12'},{w:'161',r:'12'},{w:'161',r:'11'}],'Leg Extension':[{w:'152',r:'15'},{w:'152',r:'15'},{w:'152',r:'14'}],'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'14'},{w:'300',r:'13'}] }},
    { date:'4/2',  exercises:{ 'BB Back Squat':[{w:'205',r:'8'},{w:'205',r:'8'},{w:'205',r:'8'},{w:'205',r:'7'}],'BB RDL':[{w:'185',r:'10'},{w:'185',r:'10'},{w:'185',r:'10'}],'Walking DB Lunges':[{w:'50',r:'10'},{w:'50',r:'10'},{w:'50',r:'10'}],'Seated Hamstring Curl':[{w:'165',r:'12'},{w:'165',r:'12'},{w:'165',r:'12'}],'Leg Extension':[{w:'150',r:'15'},{w:'150',r:'15'},{w:'150',r:'15'}],'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'14'},{w:'300',r:'13'}] }},
    { date:'4/9',  exercises:{ 'BB Back Squat':[{w:'215',r:'6'},{w:'215',r:'6'},{w:'215',r:'6'},{w:'215',r:'6'}],'BB RDL':[{w:'195',r:'10'},{w:'195',r:'9'},{w:'195',r:'8'}],'Walking DB Lunges':[{w:'50',r:'10'},{w:'50',r:'10'},{w:'50',r:'10'}],'Seated Hamstring Curl':[{w:'180',r:'12'},{w:'180',r:'12'},{w:'180',r:'12'}],'Leg Extension':[{w:'150',r:'15'},{w:'150',r:'15'},{w:'150',r:'15'}],'Seated Calf Raises':[{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'15'},{w:'300',r:'13'}] }},
    { date:'4/16', exercises:{ 'BB Back Squat':[{w:'215',r:'7'},{w:'215',r:'7'},{w:'215',r:'7'},{w:'215',r:'6'}],'BB RDL':[{w:'195',r:'10'},{w:'195',r:'10'},{w:'195',r:'10'}],'Walking DB Lunges':[{w:'50',r:'10'},{w:'50',r:'10'},{w:'50',r:'10'}],'Seated Hamstring Curl':[{w:'173',r:'12'},{w:'173',r:'12'},{w:'173',r:'11'}],'Leg Extension':[{w:'167',r:'15'},{w:'167',r:'15'},{w:'167',r:'15'}],'Seated Calf Raises':[{w:'320',r:'15'},{w:'320',r:'15'},{w:'320',r:'15'},{w:'320',r:'13'}] }},
  ],
  'Push B': [
    { date:'3/13', exercises:{ 'Flat BB Bench':[{w:'185',r:'8'},{w:'185',r:'7'},{w:'185',r:'6'},{w:'185',r:'6'}],'Incline DB Press':[{w:'60',r:'10'},{w:'60',r:'9'},{w:'60',r:'8'}],'Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'9'},{w:'40',r:'8'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'14'},{w:'12.5',r:'14'}],'Skull Crushers':[{w:'40',r:'12'},{w:'40',r:'12'},{w:'40',r:'12'}],'Rope Tri. Pushdown':[{w:'47.5',r:'15'},{w:'47.5',r:'12'}] }},
    { date:'3/27', exercises:{ 'Flat BB Bench':[{w:'185',r:'8'},{w:'185',r:'8'},{w:'185',r:'7'},{w:'185',r:'6'}],'Incline DB Press':[{w:'60',r:'10'},{w:'60',r:'9'},{w:'60',r:'7'}],'Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'9'},{w:'35',r:'9'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'14'}],'Skull Crushers':[{w:'50',r:'12'},{w:'50',r:'12'},{w:'50',r:'12'}],'Rope Tri. Pushdown':[{w:'42.5',r:'12'},{w:'42.5',r:'12'}] }},
    { date:'4/3',  exercises:{ 'Flat BB Bench':[{w:'185',r:'8'},{w:'185',r:'8'},{w:'185',r:'8'},{w:'185',r:'8'}],'Incline DB Press':[{w:'60',r:'10'},{w:'60',r:'10'},{w:'60',r:'10'}],'Shoulder Press':[{w:'40',r:'10'},{w:'40',r:'9'},{w:'40',r:'7'}],'Cable Lateral Raises':[{w:'12.5',r:'15'},{w:'12.5',r:'15'},{w:'12.5',r:'15'}],'Skull Crushers':[{w:'60',r:'12'},{w:'60',r:'12'},{w:'60',r:'12'}],'Rope Tri. Pushdown':[{w:'42.5',r:'12'},{w:'42.5',r:'12'}] }},
    { date:'4/17', exercises:{ 'Flat BB Bench':[{w:'195',r:'7'},{w:'195',r:'7'},{w:'195',r:'6'},{w:'195',r:'6'}],'Incline DB Press':[{w:'65',r:'8'},{w:'65',r:'8'},{w:'65',r:'8'}],'Shoulder Press':[{w:'35',r:'10'},{w:'35',r:'10'},{w:'35',r:'10'}],'Cable Lateral Raises':[{w:'14',r:'15'},{w:'14',r:'13'},{w:'14',r:'12'}],'Skull Crushers':[{w:'70',r:'12'},{w:'70',r:'12'},{w:'70',r:'12'}],'Rope Tri. Pushdown':[{w:'52.5',r:'12'},{w:'52.5',r:'12'}] }},
  ],
  'Pull B': [
    { date:'3/14', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'7'}],'Single-Arm DB Row':[{w:'70',r:'10'},{w:'70',r:'9'},{w:'70',r:'8'}],'Lat. Pulldown':[{w:'146',r:'12'},{w:'146',r:'11'},{w:'146',r:'10'}],'Face Pulls':[{w:'42.5',r:'15'},{w:'42.5',r:'15'},{w:'42.5',r:'15'}],'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'11'},{w:'25',r:'10'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'3/28', exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}],'Single-Arm DB Row':[{w:'70',r:'10'},{w:'70',r:'10'},{w:'70',r:'10'}],'Lat. Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'11'}],'Face Pulls':[{w:'42.5',r:'15'},{w:'42.5',r:'15'},{w:'42.5',r:'15'}],'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'11'},{w:'25',r:'10'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/4',  exercises:{ 'Pull-Ups':[{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'},{w:'BW',r:'8'}],'Single-Arm DB Row':[{w:'70',r:'10'},{w:'70',r:'10'},{w:'70',r:'10'}],'Lat. Pulldown':[{w:'146',r:'12'},{w:'146',r:'12'},{w:'146',r:'11'}],'Face Pulls':[{w:'42.5',r:'15'},{w:'42.5',r:'15'},{w:'42.5',r:'15'}],'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'12'},{w:'25',r:'11'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
    { date:'4/18', exercises:{ 'Pull-Ups':[{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'8'},{w:'+10',r:'8'}],'Single-Arm DB Row':[{w:'75',r:'10'},{w:'75',r:'9'},{w:'75',r:'8'}],'Lat. Pulldown':[{w:'156',r:'12'},{w:'156',r:'11'},{w:'156',r:'10'}],'Face Pulls':[{w:'80',r:'15'},{w:'80',r:'15'},{w:'80',r:'15'}],'Incline DB Curl':[{w:'25',r:'12'},{w:'25',r:'12'},{w:'25',r:'12'}],'Hammer Curl':[{w:'30',r:'12'},{w:'30',r:'12'}] }},
  ],
};

const SEED_BW = [{ date:'3/9', bw:200, cals:'', protein:'' }, { date:'4/17', bw:203.8, cals:'', protein:'' }];

// ── STORAGE — using wp3 key so existing data is preserved ─────────────────────
const LS = {
  get: (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

// ── STATE ─────────────────────────────────────────────────────────────────────
let program   = LS.get('wp3_program', null);
let workouts  = LS.get('wp3_workouts', {});
let bwLog     = LS.get('wp3_bw', SEED_BW);
let zone2Log  = LS.get('wp3_zone2', []);
let phases    = LS.get('wp3_phases', [{ name: 'Phase 1', start: '3/9', end: null }]);
let activeTab = 'log';
let selDay    = null;
let editMode  = false;
let draft     = {};
let historyCollapsed = {};

// Timer
let timerInt = null, timerSecs = 0, timerTotal = 0;

// Init
if (!program) {
  program = JSON.parse(JSON.stringify(DEFAULT_PROGRAM));
  LS.set('wp3_program', program);
}
// Merge seed history without overwriting existing saved sessions
Object.keys(SEED_HISTORY).forEach(k => {
  if (!workouts[k] || workouts[k].length === 0) {
    workouts[k] = SEED_HISTORY[k];
  } else {
    // Add any seed dates not already in saved workouts
    const existingDates = new Set(workouts[k].map(s => s.date));
    SEED_HISTORY[k].forEach(sess => {
      if (!existingDates.has(sess.date)) workouts[k].push(sess);
    });
    // Sort by date
    workouts[k].sort((a, b) => {
      const [am, ad] = a.date.split('/').map(Number);
      const [bm, bd] = b.date.split('/').map(Number);
      return am !== bm ? am - bm : ad - bd;
    });
  }
});
LS.set('wp3_workouts', workouts);

const DAY_ORDER = Object.keys(program);

// ── HELPERS ───────────────────────────────────────────────────────────────────
function today() { const d = new Date(); return `${d.getMonth()+1}/${d.getDate()}`; }
function saveAll() { LS.set('wp3_program', program); LS.set('wp3_workouts', workouts); LS.set('wp3_bw', bwLog); LS.set('wp3_zone2', zone2Log); LS.set('wp3_phases', phases); }

function getLastSession(dayName) {
  const all = workouts[dayName] || [];
  return all.length ? all[all.length - 1] : null;
}

function suggest(dayName, exName) {
  const last = getLastSession(dayName);
  if (!last) return null;
  const sets = last.exercises[exName];
  if (!sets || !sets.length) return null;
  const ex = (program[dayName].exercises || []).find(e => e.name === exName);
  const numeric = sets.filter(s => s.w && !['BW','—',''].includes(s.w) && !s.w.startsWith('+'));
  if (!numeric.length) return { w: sets[0].w, action: 'hold' };
  const lastW = parseFloat(numeric[0].w);
  const topRep = ex ? parseInt((ex.repRange.split('-')[1] || ex.repRange)) : 10;
  const minRep = Math.min(...numeric.map(s => parseInt(s.r) || 0));
  if (minRep >= topRep) return { w: lastW + (lastW >= 100 ? 5 : 2.5), action: 'up' };
  return { w: lastW, action: 'hold' };
}

function oneRM(w, r) {
  const weight = parseFloat(w), reps = parseInt(r);
  if (isNaN(weight) || isNaN(reps) || reps <= 0) return null;
  return Math.round(weight * (1 + reps / 30));
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}

function svgIcon(name) {
  const icons = {
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
    timer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  };
  return icons[name] || '';
}

// ── DRAFT ─────────────────────────────────────────────────────────────────────
function captureDraft() {
  if (!selDay || !program[selDay] || program[selDay].type !== 'lift') return;
  const prog = program[selDay];
  const d = { exercises: {}, sessionNote: '' };
  prog.exercises.forEach((ex, ei) => {
    const sets = [];
    for (let si = 0; si < ex.sets; si++) {
      const wEl = document.getElementById(`w_${ei}_${si}`);
      const rEl = document.getElementById(`r_${ei}_${si}`);
      sets.push({ w: wEl ? wEl.value : '', r: rEl ? rEl.value : '' });
    }
    d.exercises[ex.name] = sets;
    const noteEl = document.getElementById(`note_${ei}`);
    if (noteEl) d.exercises[ex.name + '_note'] = noteEl.value;
  });
  const snEl = document.getElementById('sessionNote');
  if (snEl) d.sessionNote = snEl.value;
  draft[selDay] = d;
}

function applyDraft(dayName) {
  const d = draft[dayName];
  if (!d) return;
  const prog = program[dayName];
  prog.exercises.forEach((ex, ei) => {
    const sets = d.exercises[ex.name] || [];
    sets.forEach((s, si) => {
      const wEl = document.getElementById(`w_${ei}_${si}`);
      const rEl = document.getElementById(`r_${ei}_${si}`);
      if (wEl && s.w) { wEl.value = s.w; wEl.classList.toggle('has-value', !!s.w); }
      if (rEl && s.r) { rEl.value = s.r; rEl.classList.toggle('has-value', !!s.r); }
    });
    const noteEl = document.getElementById(`note_${ei}`);
    const noteVal = d.exercises[ex.name + '_note'];
    if (noteEl && noteVal) noteEl.value = noteVal;
  });
  const snEl = document.getElementById('sessionNote');
  if (snEl && d.sessionNote) snEl.value = d.sessionNote;
}

// ── TIMER ─────────────────────────────────────────────────────────────────────
function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.18, 0.36].forEach(offset => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = 880; osc.type = 'sine';
      gain.gain.setValueAtTime(0.4, ctx.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.14);
      osc.start(ctx.currentTime + offset); osc.stop(ctx.currentTime + offset + 0.16);
    });
  } catch(e) {}
}

function vibrate() { try { if (navigator.vibrate) navigator.vibrate([200, 100, 200]); } catch(e) {} }

function startTimer(secs) {
  clearInterval(timerInt);
  timerTotal = secs; timerSecs = secs;
  const circ = 2 * Math.PI * 88;
  document.getElementById('timerOverlay').style.display = 'flex';
  updateTimerUI(circ);
  timerInt = setInterval(() => {
    timerSecs--;
    updateTimerUI(circ);
    if (timerSecs <= 0) {
      clearInterval(timerInt);
      playBeep(); vibrate();
      document.getElementById('timerTime').textContent = 'Done!';
      document.getElementById('timerProg').style.strokeDashoffset = circ;
    }
  }, 1000);
}

function updateTimerUI(circ) {
  const m = Math.floor(timerSecs / 60), s = String(timerSecs % 60).padStart(2, '0');
  document.getElementById('timerTime').textContent = `${m}:${s}`;
  document.getElementById('timerProg').style.strokeDashoffset = circ * (1 - timerSecs / timerTotal);
  document.getElementById('timerProg').style.strokeDasharray = circ;
}

function closeTimer() { clearInterval(timerInt); document.getElementById('timerOverlay').style.display = 'none'; }

// ── MODALS ────────────────────────────────────────────────────────────────────
function setHeader(title, sub) {
  document.querySelector('#appHeader h1').textContent = title;
  document.querySelector('#appHeader p').textContent = sub || '';
}

function showModal(html) {
  document.getElementById('modalOverlay').innerHTML = `<div class="modal">${html}</div>`;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() { document.getElementById('modalOverlay').style.display = 'none'; }

function showTimerPicker() {
  showModal(`
    <h2>Rest timer</h2>
    <div class="timer-grid">
      ${[60,90,120,150,180,240,300,360].map(s => {
        const m = Math.floor(s/60), sec = s % 60;
        return `<button class="timer-opt" onclick="closeModal();startTimer(${s})">${m}:${String(sec).padStart(2,'0')}</button>`;
      }).join('')}
    </div>
    <div style="font-size:12px;color:var(--text3);margin-bottom:8px;text-align:center;">Custom (enter seconds):</div>
    <div class="timer-custom">
      <input type="number" id="customTimerSecs" placeholder="e.g. 105" inputmode="numeric" />
      <button class="btn btn-secondary btn-sm" onclick="startCustomTimer()" style="white-space:nowrap;">Start</button>
    </div>
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
  `);
}

function startCustomTimer() {
  const val = parseInt(document.getElementById('customTimerSecs')?.value);
  if (!val || val <= 0) { toast('Enter seconds'); return; }
  closeModal(); startTimer(val);
}

// ── WORKOUT SUMMARY ───────────────────────────────────────────────────────────
function showWorkoutSummary(dayName, newEntry, prevEntry) {
  const prog = program[dayName];
  const rows = prog.exercises.map(ex => {
    const newSets = (newEntry.exercises[ex.name] || []).filter(s => s.w && s.r);
    if (!newSets.length) return '';
    const prevSets = prevEntry ? (prevEntry.exercises[ex.name] || []).filter(s => s.w) : [];
    const newW = parseFloat(newSets[0].w);
    const prevW = prevSets.length ? parseFloat(prevSets[0].w) : null;
    const newReps = newSets.map(s => parseInt(s.r) || 0);
    const avgReps = Math.round(newReps.reduce((a,b) => a+b, 0) / newReps.length);
    const isNumeric = !isNaN(newW);

    let deltaHTML = '', feedbackText = '';
    if (!prevEntry) {
      deltaHTML = `<div class="summary-delta new">First log</div>`;
      feedbackText = 'Baseline set.';
    } else if (!isNumeric || isNaN(prevW)) {
      deltaHTML = `<div class="summary-delta hold">${newSets[0].w}</div>`;
      feedbackText = `${newSets.length} sets logged.`;
    } else {
      const diff = newW - prevW;
      if (diff > 0) {
        deltaHTML = `<div class="summary-delta up">+${diff} lbs ↑</div>`;
        feedbackText = `Good progression. ${avgReps} avg reps.`;
      } else if (diff < 0) {
        deltaHTML = `<div class="summary-delta hold">${diff} lbs</div>`;
        feedbackText = `Dropped ${Math.abs(diff)} lbs — note if intentional.`;
      } else {
        // Same weight — check if reps improved vs prev
        const prevReps = prevSets.map(s => parseInt(s.r) || 0);
        const prevAvg = prevReps.length ? Math.round(prevReps.reduce((a,b)=>a+b,0)/prevReps.length) : 0;
        if (avgReps > prevAvg) {
          deltaHTML = `<div class="summary-delta up">+${avgReps - prevAvg} reps ↑</div>`;
          feedbackText = `Same weight, more reps — ready to increase next time.`;
        } else {
          deltaHTML = `<div class="summary-delta hold">Same</div>`;
          feedbackText = `Hold weight, focus on rep quality.`;
        }
      }
    }
    return `<div class="summary-ex">
      <div>
        <div class="summary-ex-name">${ex.name}</div>
        <div class="summary-ex-detail">${newSets.map(s=>`${s.w}×${s.r}`).join(', ')}</div>
        <div class="summary-feedback">${feedbackText}</div>
      </div>
      ${deltaHTML}
    </div>`;
  }).filter(Boolean).join('');

  showModal(`
    <h2>${dayName} — ${newEntry.date}</h2>
    <div style="font-size:12px;color:var(--text2);margin-bottom:14px;">${prevEntry ? `vs ${prevEntry.date}` : 'First session logged'}</div>
    ${rows || '<div class="empty">No data to summarize.</div>'}
    <button class="btn btn-primary" onclick="closeModal()">Done</button>
  `);
}

// ── LOG TAB ───────────────────────────────────────────────────────────────────
function renderLog() {
  setHeader('Workout Plan', 'Phase 1 — Mar 9 to Jun 1');
  document.getElementById('editModeBtn').textContent = editMode ? 'Done' : 'Edit';
  document.getElementById('editModeBtn').classList.toggle('active', editMode);

  const dayGrid = DAY_ORDER.map(name => {
    const prog = program[name];
    const logged = (workouts[name] || []).some(s => s.date === today());
    return `<button class="day-btn ${selDay===name?'active':''}" onclick="selectDay('${name}')">
      <div class="day-short">${prog.day}</div>
      <div class="day-name">${name}</div>
      ${logged ? '<div class="day-logged"></div>' : ''}
    </button>`;
  }).join('');

  let workoutHTML = '';
  if (selDay) {
    const prog = program[selDay];
    if (prog.type === 'cardio') {
      workoutHTML = renderZone2Form();
    } else {
      const exBlocks = prog.exercises.map((ex, ei) => renderExBlock(ex, ei)).join('');
      const addBar = editMode ? `
        <div style="padding:12px 0 0;">
          <div class="add-ex-bar"><input type="text" id="newExName" placeholder="Exercise name" /></div>
          <div class="add-ex-row">
            <input type="number" id="newExSets" placeholder="Sets" inputmode="numeric" min="1" max="10" />
            <input type="text" id="newExReps" placeholder="Rep range (e.g. 8-10)" />
            <select id="newExType">
              <option value="main">Main</option>
              <option value="compound" selected>Compound</option>
              <option value="accessory">Accessory</option>
            </select>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="addExercise()" style="width:100%">+ Add exercise</button>
        </div>` : '';
      workoutHTML = `<div class="card">
        <div class="card-title">${selDay}</div>
        ${exBlocks}
        ${addBar}
        <textarea class="ex-note" id="sessionNote" rows="2" placeholder="Session notes..." style="margin-top:16px;"></textarea>
        <button class="btn btn-primary" onclick="saveWorkout()">Save workout</button>
        <button class="btn btn-secondary" onclick="showTimerPicker()">⏱ Rest timer</button>
      </div>`;
    }
  }

  document.getElementById('sec-log').innerHTML = `<div class="day-grid">${dayGrid}</div>${workoutHTML}`;
  if (selDay && program[selDay]?.type === 'lift') applyDraft(selDay);
}

function renderExBlock(ex, ei) {
  const sug = selDay ? suggest(selDay, ex.name) : null;
  const badge = sug ? (sug.action === 'up' ? `<span class="badge badge-up">+wt</span>` : `<span class="badge badge-hold">hold</span>`) : '';
  const typeTag = `<span class="tag ${ex.type}">${ex.type}</span>`;
  const deleteBtn = editMode ? `<button class="icon-btn danger" onclick="removeExercise(${ei})">${svgIcon('trash')}</button>` : '';
  const timerBtn = !editMode ? `<button class="icon-btn" onclick="showTimerPicker()" title="Rest timer">${svgIcon('timer')}</button>` : '';
  const sets = Array.from({length: ex.sets}, (_, si) => `
    <div class="set-col">
      <div class="set-num">S${si+1}</div>
      <div class="set-inputs">
        <div><input type="text" inputmode="decimal" id="w_${ei}_${si}" placeholder="${sug?sug.w:'wt'}" oninput="this.classList.toggle('has-value',!!this.value)" /><div class="set-lbl">lbs</div></div>
        <div><input type="number" inputmode="numeric" id="r_${ei}_${si}" placeholder="reps" oninput="this.classList.toggle('has-value',!!this.value)" /><div class="set-lbl">reps</div></div>
      </div>
    </div>`).join('');
  return `<div class="exercise-block">
    <div class="ex-header">
      <div><div class="ex-name">${ex.name}${badge}</div><div style="margin-top:4px;">${typeTag}</div></div>
      <div class="ex-actions"><span class="ex-scheme">${ex.sets}×${ex.repRange}</span>${timerBtn}${deleteBtn}</div>
    </div>
    <div class="sets-row">${sets}</div>
    <textarea class="ex-note" id="note_${ei}" rows="1" placeholder="Notes..."></textarea>
  </div>`;
}

function selectDay(name) {
  captureDraft(); selDay = name; editMode = false;
  renderLog();
  setTimeout(() => document.querySelector('.card')?.scrollIntoView({ behavior:'smooth', block:'start' }), 60);
}

function toggleEditMode() { captureDraft(); editMode = !editMode; renderLog(); }

function addExercise() {
  const name = document.getElementById('newExName')?.value?.trim();
  const sets = parseInt(document.getElementById('newExSets')?.value) || 3;
  const repRange = document.getElementById('newExReps')?.value?.trim() || '8-12';
  const type = document.getElementById('newExType')?.value || 'accessory';
  if (!name) { toast('Enter exercise name'); return; }
  program[selDay].exercises.push({ name, sets, repRange, type });
  saveAll(); toast(`${name} added`); renderLog();
}

function removeExercise(ei) {
  const ex = program[selDay].exercises[ei];
  if (!confirm(`Remove "${ex.name}"?`)) return;
  program[selDay].exercises.splice(ei, 1);
  if (draft[selDay]) delete draft[selDay].exercises[ex.name];
  saveAll(); renderLog();
}

function saveWorkout() {
  if (!selDay || program[selDay].type === 'cardio') return;
  captureDraft();
  const prog = program[selDay];
  const d = draft[selDay] || {};
  const entry = { date: today(), exercises: {}, note: d.sessionNote || '' };
  let hasData = false;
  prog.exercises.forEach(ex => {
    const sets = (d.exercises[ex.name] || []).filter(s => s.w || s.r);
    if (sets.length) hasData = true;
    entry.exercises[ex.name] = sets;
    const note = d.exercises[ex.name + '_note'];
    if (note) entry.exercises[ex.name + '_note'] = note;
  });
  if (!hasData) { toast('Nothing to save'); return; }
  const prevEntry = getLastSession(selDay);
  if (!workouts[selDay]) workouts[selDay] = [];
  workouts[selDay].push(entry);
  delete draft[selDay];
  saveAll();
  renderLog();
  showWorkoutSummary(selDay, entry, prevEntry);
}

// ── ZONE 2 ────────────────────────────────────────────────────────────────────
function renderZone2Form() {
  return `<div class="card">
    <div class="card-title">Zone 2 — Log session</div>
    <div class="zone2-form">
      <select id="z2type"><option>Treadmill walk</option><option>Boxing</option><option>Cycling</option><option>Rowing</option><option>Elliptical</option><option>Other</option></select>
      <input type="text" id="z2duration" placeholder="Duration (min)" inputmode="numeric" />
      <input type="text" id="z2speed" placeholder="Speed / intensity" />
      <input type="text" id="z2incline" placeholder="Incline / resistance" />
      <input type="text" id="z2hr" placeholder="Avg HR (bpm)" inputmode="numeric" />
      <input type="text" id="z2cals" placeholder="Calories burned" inputmode="numeric" />
      <textarea class="ex-note zone2-full" id="z2notes" rows="2" placeholder="Notes..."></textarea>
    </div>
    <button class="btn btn-primary" onclick="saveZone2()">Save session</button>
  </div>${renderZone2History()}`;
}

function renderZone2History() {
  if (!zone2Log.length) return '';
  const rows = [...zone2Log].reverse().slice(0,10).map(s => `
    <div class="zone2-session">
      <div class="zone2-date">${s.date} — <span style="color:var(--text)">${s.type}</span></div>
      <div class="zone2-detail">${[s.duration?s.duration+' min':'',s.speed?'Speed: '+s.speed:'',s.incline?'Incline: '+s.incline:'',s.hr?s.hr+' bpm':'',s.cals?s.cals+' cal':''].filter(Boolean).join(' · ')}${s.notes?`<br><span>${s.notes}</span>`:''}</div>
    </div>`).join('');
  return `<div class="card"><div class="card-title">Recent Zone 2</div>${rows}</div>`;
}

function saveZone2() {
  const entry = { date:today(), type:document.getElementById('z2type')?.value, duration:document.getElementById('z2duration')?.value?.trim(), speed:document.getElementById('z2speed')?.value?.trim(), incline:document.getElementById('z2incline')?.value?.trim(), hr:document.getElementById('z2hr')?.value?.trim(), cals:document.getElementById('z2cals')?.value?.trim(), notes:document.getElementById('z2notes')?.value?.trim() };
  if (!entry.duration && !entry.notes) { toast('Add at least duration'); return; }
  zone2Log.push(entry); saveAll(); toast('Session saved!'); renderLog();
}

// ── NEXT TAB ──────────────────────────────────────────────────────────────────
function renderNext() {
  const dow = new Date().getDay();
  const map = {1:'Push A',2:'Pull A',3:'Zone 2',4:'Legs',5:'Push B',6:'Pull B'};
  const target = map[dow] || 'Push A';
  setHeader('Next session', map[dow] ? "Today's workout" : 'Next up');
  const prog = program[target];
  let html = '';
  if (prog.type === 'cardio') {
    html = `<div class="card"><p style="color:var(--text2);font-size:14px;">Zone 2 day — keep HR 60–70% max. Log in the Log tab.</p></div>`;
  } else {
    const rows = prog.exercises.map(ex => {
      const sug = suggest(target, ex.name);
      return `<div class="next-ex-row">
        <div><div class="next-ex-name">${ex.name}</div><div class="next-ex-scheme">${ex.sets} × ${ex.repRange}</div></div>
        <div class="next-target">${sug ? sug.w + (sug.action==='up' ? ' ↑' : '') : '—'}</div>
      </div>`;
    }).join('');
    html = `<div class="card"><div class="card-title">${target}</div>${rows}</div>
      <p style="font-size:12px;color:var(--text3);text-align:center;margin-top:4px;">↑ = increase weight this session.</p>`;
  }
  document.getElementById('sec-next').innerHTML = html;
}

// ── HISTORY TAB ───────────────────────────────────────────────────────────────
function renderHistory() {
  setHeader('History', 'All logged sessions');
  const lifts = DAY_ORDER.filter(d => program[d].type === 'lift');
  let html = '';
  lifts.forEach(name => {
    const sessions = (workouts[name] || []).slice().reverse();
    if (!sessions.length) return;
    const isCollapsed = historyCollapsed[name] === true;
    const count = sessions.length;
    html += `<div class="card">
      <div class="history-day-header" onclick="toggleHistoryDay('${name}')">
        <h3>${name} <span style="font-weight:400;color:var(--text3)">(${count})</span></h3>
        <span class="history-chevron ${isCollapsed ? '' : 'open'}">▼</span>
      </div>
      <div class="history-day-body" id="hbody_${name.replace(/\s/g,'_')}" style="${isCollapsed ? 'display:none' : ''}">`;
    sessions.forEach((sess, revIdx) => {
      const realIdx = (workouts[name].length - 1) - revIdx;
      html += `<div class="history-session">
        <div class="history-date">
          <span>${sess.date}</span>
          <button class="history-edit-btn" onclick="showEditSession('${name}',${realIdx})">Edit</button>
        </div>`;
      if (sess.note) html += `<div style="font-size:12px;color:var(--text2);margin-bottom:4px;">${sess.note}</div>`;
      Object.entries(sess.exercises).forEach(([ex, sets]) => {
        if (ex.endsWith('_note') || !Array.isArray(sets) || !sets.length) return;
        html += `<div class="history-ex-row"><span class="history-ex-name">${ex}</span><span class="history-ex-sets">${sets.map(s=>`${s.w}×${s.r}`).join(', ')}</span></div>`;
      });
      html += `</div>`;
    });
    html += `</div></div>`;
  });

  if (zone2Log.length) {
    const isCollapsed = historyCollapsed['Zone 2'] === true;
    html += `<div class="card">
      <div class="history-day-header" onclick="toggleHistoryDay('Zone 2')">
        <h3>Zone 2 <span style="font-weight:400;color:var(--text3)">(${zone2Log.length})</span></h3>
        <span class="history-chevron ${isCollapsed ? '' : 'open'}">▼</span>
      </div>
      <div class="history-day-body" id="hbody_Zone_2" style="${isCollapsed ? 'display:none' : ''}">`;
    [...zone2Log].reverse().forEach(s => {
      html += `<div class="zone2-session"><div class="zone2-date">${s.date} — <span style="color:var(--text)">${s.type}</span></div>
        <div class="zone2-detail">${[s.duration?s.duration+' min':'',s.speed?'Speed: '+s.speed:'',s.incline?'Incline: '+s.incline:'',s.hr?s.hr+' bpm':''].filter(Boolean).join(' · ')}${s.notes?`<br>${s.notes}`:''}</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  document.getElementById('sec-history').innerHTML = html || `<div class="empty">No sessions logged yet.</div>`;
}

function toggleHistoryDay(name) {
  historyCollapsed[name] = !historyCollapsed[name];
  const key = name.replace(/\s/g,'_');
  const body = document.getElementById(`hbody_${key}`);
  const chevron = body?.previousElementSibling?.querySelector('.history-chevron');
  if (body) body.style.display = historyCollapsed[name] ? 'none' : '';
  if (chevron) chevron.classList.toggle('open', !historyCollapsed[name]);
}

function showEditSession(dayName, sessionIdx) {
  const sess = workouts[dayName][sessionIdx];
  if (!sess) return;
  const exEntries = Object.entries(sess.exercises).filter(([k,v]) => !k.endsWith('_note') && Array.isArray(v));
  const exForms = exEntries.map(([exName, sets]) => `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:6px;">${exName}</div>
      ${sets.map((s, si) => {
        const key = exName.replace(/[^a-z0-9]/gi,'_');
        return `<div class="edit-set-row">
          <div class="edit-set-label">S${si+1}</div>
          <input type="text" inputmode="decimal" id="edit_w_${sessionIdx}_${key}_${si}" value="${s.w}" placeholder="lbs" />
          <input type="number" inputmode="numeric" id="edit_r_${sessionIdx}_${key}_${si}" value="${s.r}" placeholder="reps" />
        </div>`;
      }).join('')}
    </div>`).join('');

  showModal(`
    <h2>Edit — ${dayName} ${sess.date}</h2>
    <div style="margin-bottom:12px;">
      <div style="font-size:12px;color:var(--text2);margin-bottom:4px;">Date</div>
      <input class="modal-input" type="text" id="edit_date_${sessionIdx}" value="${sess.date}" placeholder="e.g. 4/20" />
    </div>
    ${exForms}
    <input class="modal-input" type="text" id="edit_note_${sessionIdx}" value="${sess.note||''}" placeholder="Session notes..." />
    <button class="btn btn-primary" onclick="saveEditSession('${dayName}',${sessionIdx})">Save changes</button>
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-danger" onclick="deleteSession('${dayName}',${sessionIdx})">Delete session</button>
  `);
}

function saveEditSession(dayName, sessionIdx) {
  const sess = workouts[dayName][sessionIdx];
  const dateEl = document.getElementById(`edit_date_${sessionIdx}`);
  if (dateEl && dateEl.value.trim()) sess.date = dateEl.value.trim();
  const exEntries = Object.entries(sess.exercises).filter(([k,v]) => !k.endsWith('_note') && Array.isArray(v));
  exEntries.forEach(([exName, sets]) => {
    const key = exName.replace(/[^a-z0-9]/gi,'_');
    sets.forEach((s, si) => {
      const wEl = document.getElementById(`edit_w_${sessionIdx}_${key}_${si}`);
      const rEl = document.getElementById(`edit_r_${sessionIdx}_${key}_${si}`);
      if (wEl) s.w = wEl.value.trim();
      if (rEl) s.r = rEl.value.trim();
    });
  });
  const noteEl = document.getElementById(`edit_note_${sessionIdx}`);
  if (noteEl) sess.note = noteEl.value.trim();
  // Re-sort after date change
  workouts[dayName].sort((a, b) => {
    const [am, ad] = a.date.split('/').map(Number);
    const [bm, bd] = b.date.split('/').map(Number);
    return am !== bm ? am - bm : ad - bd;
  });
  saveAll(); closeModal(); toast('Session updated!'); renderHistory();
}

function deleteSession(dayName, sessionIdx) {
  if (!confirm('Delete this session?')) return;
  workouts[dayName].splice(sessionIdx, 1);
  saveAll(); closeModal(); toast('Session deleted'); renderHistory();
}

// ── ANALYTICS TAB ─────────────────────────────────────────────────────────────
function renderAnalytics() {
  setHeader('Analytics', 'PRs, volume, 1RM');
  const prLifts = [
    {name:'BB Back Squat',w:'Legs'},{name:'Flat BB Bench',w:'Push B'},
    {name:'Incline DB Press',w:'Push A'},{name:'BB RDL',w:'Legs'},
    {name:'Pull-Ups',w:'Pull A'},{name:'Single-Arm DB Row',w:'Pull B'},
    {name:'EZ Bar Curl',w:'Pull A'},{name:'Skull Crushers',w:'Push B'},
    {name:'Seated Hamstring Curl',w:'Legs'},{name:'Leg Extension',w:'Legs'},
  ];
  const prCards = prLifts.map(lift => {
    let maxW=0, maxDate='', maxR=0;
    (workouts[lift.w]||[]).forEach(s => {
      (s.exercises[lift.name]||[]).forEach(set => {
        const w = parseFloat(set.w);
        if (!isNaN(w) && w > maxW) { maxW=w; maxDate=s.date; maxR=parseInt(set.r)||0; }
      });
    });
    const rm = maxW && maxR ? oneRM(maxW, maxR) : null;
    return `<div class="pr-card">
      <div class="pr-lift">${lift.name}</div>
      <div class="pr-weight">${maxW||'—'}${maxW?' lbs':''}</div>
      <div class="pr-date">${maxDate}</div>
      ${rm?`<div style="font-size:11px;color:var(--blue);margin-top:4px;">~${rm} lbs est. 1RM</div>`:''}
    </div>`;
  }).join('');

  const muscleMap = {
    'Chest':['Incline DB Press','Flat BB Bench'],
    'Shoulders':['Seated DB Shoulder Press','Shoulder Press','Cable Lateral Raises'],
    'Triceps':['Cable Tri. Pushdown','Overhead Cable Tri. Ext.','Skull Crushers','Rope Tri. Pushdown'],
    'Back':['Pull-Ups','Chest Supported DB Row','Lat Pulldown','Single-Arm DB Row','Lat. Pulldown'],
    'Rear Delts':['Cable Rear Delt Fly','Face Pulls'],
    'Biceps':['EZ Bar Curl','Hammer Curl','Incline DB Curl'],
    'Quads':['BB Back Squat','Walking DB Lunges','Leg Extension'],
    'Hamstrings':['BB RDL','Seated Hamstring Curl'],
    'Calves':['Seated Calf Raises'],
    'Core':['Hanging Leg Raises','Ab Rollouts','Cable Crunches','Pallof Press','Weighted Oblique Crunches','Weighted Decline Sit-Ups','Hanging MB Leg Raises'],
  };
  const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
  const volCounts = {};
  Object.keys(muscleMap).forEach(m => volCounts[m] = 0);
  DAY_ORDER.forEach(day => {
    (workouts[day]||[]).forEach(sess => {
      const parts = sess.date.split('/');
      const d = new Date(2026, parseInt(parts[0])-1, parseInt(parts[1]));
      if (d >= weekAgo) {
        Object.entries(sess.exercises).forEach(([exName, sets]) => {
          if (!Array.isArray(sets)) return;
          Object.entries(muscleMap).forEach(([muscle, list]) => {
            if (list.some(e => exName.toLowerCase().includes(e.toLowerCase().split(' ')[0]))) volCounts[muscle] += sets.length;
          });
        });
      }
    });
  });
  const maxVol = Math.max(...Object.values(volCounts), 1);
  const volRows = Object.entries(volCounts).map(([m, c]) => `
    <div class="vol-row">
      <div class="vol-muscle">${m}</div>
      <div class="vol-bar-wrap"><div class="vol-bar" style="width:${Math.round(c/maxVol*100)}%"></div></div>
      <div class="vol-count">${c}</div>
    </div>`).join('');

  document.getElementById('sec-analytics').innerHTML = `
    <div class="card"><div class="card-title">Personal records + est. 1RM</div><div class="pr-grid">${prCards}</div></div>
    <div class="card"><div class="card-title">Weekly volume — sets per muscle (last 7 days)</div>${volRows}</div>`;
}

// ── BODYWEIGHT TAB ────────────────────────────────────────────────────────────
function renderBW() {
  setHeader('Bodyweight', 'Weight & nutrition log');
  const first = bwLog[0], last = bwLog[bwLog.length-1];
  const change = first && last ? (last.bw - first.bw).toFixed(1) : null;
  const cls = change > 0 ? 'green' : change < 0 ? 'red' : '';
  const pts = bwLog.slice(-12);
  let chartHTML = '';
  if (pts.length > 1) {
    const weights = pts.map(p => p.bw);
    const minW = Math.min(...weights), maxW = Math.max(...weights);
    const range = maxW - minW || 1;
    const W = 300, H = 100, pad = 14;
    const xs = pts.map((_, i) => pad + i * (W - pad*2) / (pts.length - 1));
    const ys = pts.map(p => H - pad - (p.bw - minW) / range * (H - pad*2));
    const pathD = xs.map((x, i) => `${i===0?'M':'L'}${x},${ys[i]}`).join(' ');
    const dots = xs.map((x, i) => `<circle cx="${x}" cy="${ys[i]}" r="3" fill="#fff"/>`).join('');
    chartHTML = `<div class="chart-wrap"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <path d="${pathD}" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" opacity="0.8"/>
      ${dots}
      <text x="${xs[0]}" y="${H}" font-size="9" fill="var(--text3)" text-anchor="middle">${pts[0].date}</text>
      <text x="${xs[xs.length-1]}" y="${H}" font-size="9" fill="var(--text3)" text-anchor="end">${pts[pts.length-1].date}</text>
    </svg></div>`;
  }
  const rows = [...bwLog].reverse().map(e => `
    <div class="bw-row-entry">
      <div class="bw-entry-date">${e.date}</div>
      <div class="bw-entry-vals">
        <div><div class="bw-entry-val">${e.bw} lbs</div></div>
        ${e.cals?`<div><div class="bw-entry-val">${e.cals}</div><div class="bw-entry-sub">cal</div></div>`:''}
        ${e.protein?`<div><div class="bw-entry-val">${e.protein}g</div><div class="bw-entry-sub">protein</div></div>`:''}
      </div>
    </div>`).join('');
  document.getElementById('sec-bw').innerHTML = `
    <div class="stats-row">
      <div class="stat-card"><div class="stat-label">Start</div><div class="stat-val">${first?first.bw:'—'}</div></div>
      <div class="stat-card"><div class="stat-label">Current</div><div class="stat-val">${last?last.bw:'—'}</div></div>
      <div class="stat-card"><div class="stat-label">Change</div><div class="stat-val ${cls}">${change!==null?(change>=0?'+':'')+change:'—'}</div></div>
    </div>
    <div class="card"><div class="card-title">Trend</div>${chartHTML||'<div class="empty" style="padding:16px">Log more entries to see chart</div>'}</div>
    <div class="card">
      <div class="card-title">Log entry</div>
      <div class="bw-form">
        <input type="text" id="bw-date" placeholder="Date (e.g. 4/22)" />
        <input type="number" id="bw-val" placeholder="Weight (lbs)" step="0.1" inputmode="decimal" />
        <input type="number" id="bw-cals" placeholder="Calories" inputmode="numeric" />
        <input type="number" id="bw-protein" placeholder="Protein (g)" inputmode="numeric" />
      </div>
      <button class="btn btn-primary" onclick="logBW()">Add entry</button>
    </div>
    <div class="card"><div class="card-title">Log</div>${rows||'<div class="empty">No entries yet.</div>'}</div>`;
}

function logBW() {
  const bwVal = parseFloat(document.getElementById('bw-val').value);
  if (!bwVal) { toast('Enter a weight'); return; }
  bwLog.push({ date: document.getElementById('bw-date').value.trim() || today(), bw: bwVal, cals: document.getElementById('bw-cals').value.trim(), protein: document.getElementById('bw-protein').value.trim() });
  saveAll(); toast('Entry saved!'); renderBW();
}

// ── SETTINGS TAB ──────────────────────────────────────────────────────────────
function renderSettings() {
  setHeader('Settings', 'Program & phases');
  const totalSessions = Object.values(workouts).reduce((a, s) => a + s.length, 0);
  document.getElementById('sec-settings').innerHTML = `
    <div class="card">
      <div class="card-title">Current phase</div>
      <div class="phase-badge">Phase 1 — Mar 9 to Jun 1, 2026</div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:16px;">${totalSessions} sessions logged</div>
      <button class="btn btn-secondary" onclick="showNewPhase()">Start new phase (archive current)</button>
    </div>
    <div class="card">
      <div class="card-title">Edit workout days</div>
      ${DAY_ORDER.map(name => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);">
          <div><div style="font-size:14px;font-weight:600;color:var(--text)">${name}</div>
          <div style="font-size:12px;color:var(--text2)">${program[name].day} · ${program[name].type}</div></div>
          <button class="btn btn-secondary btn-sm" onclick="selectDay('${name}');showTab('log')">Edit</button>
        </div>`).join('')}
    </div>
    <div class="card">
      <div class="card-title">Export data</div>
      <p style="font-size:13px;color:var(--text2);margin-bottom:12px;">Download all workout history as CSV</p>
      <button class="btn btn-secondary" onclick="exportCSV()">Export to CSV</button>
    </div>
    <div class="card">
      <div class="card-title">Archived phases</div>
      ${phases.filter(p=>p.end).length ? phases.filter(p=>p.end).map(p=>`
        <div class="archive-item"><div><div class="archive-name">${p.name}</div><div class="archive-meta">${p.start} → ${p.end}</div></div></div>`).join('')
        : '<div style="font-size:13px;color:var(--text3);">No archived phases yet.</div>'}
    </div>`;
}

function showNewPhase() {
  showModal(`
    <h2>Start new phase</h2>
    <p style="font-size:14px;color:var(--text2);margin-bottom:16px;">Archives current history and resets. Bodyweight log and program structure are kept.</p>
    <input class="modal-input" type="text" id="newPhaseName" placeholder="Phase name (e.g. Phase 2)" />
    <button class="btn btn-primary" onclick="startNewPhase()">Archive & start new phase</button>
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
  `);
}

function startNewPhase() {
  const name = document.getElementById('newPhaseName')?.value?.trim() || 'New Phase';
  if (phases.length) phases[phases.length-1].end = today();
  workouts = {}; zone2Log = [];
  phases.push({ name, start: today(), end: null });
  saveAll(); closeModal(); toast(`${name} started!`); renderSettings();
}

function exportCSV() {
  let csv = 'Date,Day,Exercise,Set,Weight,Reps\n';
  DAY_ORDER.forEach(day => {
    (workouts[day]||[]).forEach(sess => {
      Object.entries(sess.exercises).forEach(([ex, sets]) => {
        if (!Array.isArray(sets)) return;
        sets.forEach((s, i) => { csv += `${sess.date},${day},"${ex}",${i+1},${s.w},${s.r}\n`; });
      });
    });
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], {type:'text/csv'}));
  a.download = 'workout-history.csv'; a.click();
  toast('CSV downloaded');
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function showTab(tab) {
  if (activeTab === 'log') captureDraft();
  activeTab = tab;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + tab).classList.add('active');
  document.getElementById('nav-' + tab).classList.add('active');
  document.getElementById('editModeBtn').style.display = tab === 'log' ? 'block' : 'none';
  document.querySelector('main').scrollTop = 0;
  if (tab==='log')       renderLog();
  if (tab==='next')      renderNext();
  if (tab==='history')   renderHistory();
  if (tab==='analytics') renderAnalytics();
  if (tab==='bw')        renderBW();
  if (tab==='settings')  renderSettings();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/workout-plan/sw.js').catch(()=>{});
  showTab('log');
});
