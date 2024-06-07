# COA TASKFORCE TAKE HOME CHALLENGE

## Introduction

This coding challenge is assessment in HTML, CSS, and
JavaScript Skills, as well as your problem-solving abilities.
Building an interactive photo gallery based on [Figma UI](https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=1-482&t=jJhFPjhvTgp7K2NC-0) provided designs.
Additionally, completed two coding challenges, using javascript, that test
logical thinking and coding aptitude.

## Table of Contents

- [Introduction](#Introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Coding Challenges](#coding-challenges)
  - [Array Manipulation](#coding-challenge-1-array-manipulation)
  - [String Transformation](#coding-challenge-2-string-transformation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design:** Adapts seamlessly to different screen sizes and devices.
- **Figma Design Accuracy:** Matches the provided Figma designs, including layout, spacing, typography, and visual styles.
- **Hover Interaction:** Displays additional details when hovering over a photo.
- **Cross-browser Compatibility:** Ensures consistent performance across modern web browsers (Chrome, Firefox, Safari, and Edge).
- **Clean Code:** Follows best practices and coding conventions for HTML, CSS, and JavaScript.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup and Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/nifaustin/COA-Challenge.git
   ```

   ```sh
   cd COA-Challenge.git
   ```

2. **Open the Project:**
   Open the project in your preferred code editor (e.g., Visual Studio Code ).

3. **View in Browser:**
   Open `index.html` in your web browser to view the interactive photo gallery.

## Usage

- **Navigate the Gallery:** Hover over the images to see additional details.

- **Responsive Design:** Resize the browser window to see how the gallery adapts to different screen sizes.

## Coding Challenges

### Coding Challenge 1: Array Manipulation

**Problem Statement:**
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

**Example:**

```javascript
Input: arr = [4, 2, 7, 1, 9, 5], target = 14
Output: true
Explanation: The subarray [7, 1, 9] sums up to 14, which is equal to the target.
```

**Solution:**
The solution is implemented in `Challenges/arrayMap.js`.

### Coding Challenge 2: String Transformation

**Problem Statement:**
Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5, perform both operations in the specified order.

**Example:**

```javascript
Input: "Hello World"
Output: "87 111 114 108 100 32 111 108 108 101 72"
Explanation: The length of the string is 11, which is divisible by both 3 and 5. First, the string is reversed, becoming "dlroW olleH". Then, each character is replaced by its ASCII code, resulting in "87 111 114 108 100 32 111 108 108 101 72".
```

**Solution:**
The solution is implemented in `Challenges/stringTransform.js`.

## Contact

For any inquiries or feedback, please contact:

- **Name:** Niyomukiza Faustin
- **Email:** niyomukizafaustin@gmail.com
- **GitHub:** [nifaustin](https://github.com/nifaustin)

This README provides clear and concise information about the project, including setup instructions, usage details, and solutions to the coding challenges.
