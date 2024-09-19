export function getRandomNumber(): number {
  // Step 1: Generate a random number between 0 and 1
  let randomNumber = Math.random();

  // Step 2: Scale the number to the range 0.2 to 0.8
  randomNumber = randomNumber * (0.8 - 0.2) + 0.2;

  // Step 3: Format the number to 2 decimal places using toFixed and convert it back to a number
  const formattedNumber = parseFloat(randomNumber.toFixed(2));

  return formattedNumber;
}

export function getRandomAngle(): number {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  let randomNumber: number = Math.random();

  // Scale it to the range [0, 0.5) by multiplying by 0.5
  randomNumber = randomNumber * 0.5;

  // Shift to adjust to the range [-0.25, 0.25) by subtracting 0.25
  randomNumber = randomNumber - 0.25;

  return randomNumber;
}
