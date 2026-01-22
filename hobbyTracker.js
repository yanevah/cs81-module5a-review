// Nina Janev
// GitHub Repo URL: https://github.com/yanevah/cs81-module5a-review


// This script demonstrates the use of Higher_Order Functions (HDF) to process an array of objects
// The hobbyLog array stores daily hobby sessions.
// Each object represents one day and includes the hobby name,
// time spent in minutes, and the mood during that activity.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Function: totalTime uses .reduce()
// Purpose: .reduce() is a higher-order function that "reduces" an array to a single value.
// It takes an accumulator (sum) and the current item (session).
function totalTime(log) {
  // Returns the total sum of minutes by adding each session's minutes to the accumulator.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Function: uniqueHobbies uses .map()
// Purpose: Returns a list of distinct hobbies from the log.
// .map() creates a new array by transforming every element in the original array.
function uniqueHobbies(log) {
  // Extract only the 'hobby' string from each object, creating an array of names.
  const names = log.map(entry => entry.hobby);
  // Set() removes duplicates; the [...] spread operator turns it back into an array.
  return [...new Set(names)];
}

// Function: longSessions uses .filter()
// Purpose: Filters sessions that lasted longer than a given number of minutes.
// .filter() creates a new array containing only elements that pass a true/false test.
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// Function: countMood uses .filter() and .length
// Purpose: Counts how many sessions match a specific mood.
// filter() is used to narrow results, and length counts them.
function countMood(log, moodType) {
  // First, it filters the array for matching moods, then counts how many items are in that new array.
  return log.filter(entry => entry.mood === moodType).length;
}

// Suggested improvement:
// The 'uniqueHobbies' function currently uses a variable called 'names'. 
// A more descriptive name would be 'hobbyTitles' or 'allHobbies' to avoid confusion with person names.
// The function name "longSessions" could be renamed to "sessionsLongerThan"
// for clarity, and input validation could be added to ensure minMinutes is a number.

// --- LOGGING OUTPUTS ---
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// Additional test case
console.log("Number of creative sessions:", countMood(hobbyLog, "creative"));

