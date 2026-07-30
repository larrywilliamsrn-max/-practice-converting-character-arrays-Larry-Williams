// Helper function to transform a string using split, reverse, and join
function reverseString(text) {
  return text.split('').reverse().join('');
}

// ==========================================
// Task 1: Decode the Following Reversed Messages
// ==========================================
const message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
const message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
const message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
const message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

console.log("=== Task 1: Decoded Secret Messages ===");
console.log("Decoded Message 1:", reverseString(message1));
console.log("Decoded Message 2:", reverseString(message2));
console.log("Decoded Message 3:", reverseString(message3));
console.log("Decoded Message 4:", reverseString(message4));

// ==========================================
// Task 2: Write Your Own Reversed Messages
// ==========================================
console.log("\n=== Task 2: Custom Reversed Messages ===");

// 1. Original inspiring messages
const myInspiration1 = "Every expert software engineer was once a beginner. Keep going!";
const myInspiration2 = "Consistency beats intensity every single time.";

// 2 & 3. Convert to reversed character output dynamically and log
const reversedOutput1 = reverseString(myInspiration1);
const reversedOutput2 = reverseString(myInspiration2);

console.log("Original 1:", myInspiration1);
console.log("Reversed 1:", reversedOutput1);

console.log("\nOriginal 2:", myInspiration2);
console.log("Reversed 2:", reversedOutput2);