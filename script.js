function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // Reverse the string
  const reversedStr = cleanStr.split("").reverse().join("");
  // Check if the original string is equal to the reversed string
  return cleanStr === reversedStr;
}

document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;

  if (inputText.trim() === "") {
    alert("Please input a value");
  } else {
    const resultDiv = document.getElementById("result");
    if (isPalindrome(inputText)) {
      resultDiv.textContent = `${inputText} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputText} is not a palindrome`;
    }
  }
});
