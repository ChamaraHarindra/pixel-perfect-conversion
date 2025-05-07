/**
 * Splits text in an HTML element into individual words or characters
 * and wraps them in span elements for animation
 */
export function splitText(
  element: HTMLElement,
  splitBy: "words" | "chars" = "words"
) {
  // Store the original text content
  const text = element.textContent || "";

  // Clear the element's content
  element.innerHTML = "";

  // Split the text into words
  const words = text.split(" ").filter((word) => word.length > 0);

  // Create spans for each word
  const wordSpans = words.map((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "split-word";
    wordSpan.style.display = "inline-block";
    wordSpan.style.position = "relative";

    if (splitBy === "chars") {
      // Split the word into characters
      const chars = word.split("");

      // Create spans for each character
      chars.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.className = "split-char";
        charSpan.style.display = "inline-block";
        charSpan.style.position = "relative";
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });
    } else {
      // Just set the word as text content
      wordSpan.textContent = word;
    }

    return wordSpan;
  });

  // Add the word spans to the element
  wordSpans.forEach((wordSpan, i) => {
    element.appendChild(wordSpan);

    // Add a space after each word except the last one
    if (i < wordSpans.length - 1) {
      const space = document.createTextNode(" ");
      element.appendChild(space);
    }
  });

  return {
    words: Array.from(element.querySelectorAll(".split-word")),
    chars: Array.from(element.querySelectorAll(".split-char")),
  };
}
