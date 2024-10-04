# Advanced Markov Text Generator

A simple Markov text generator implemented using HTML, CSS, and JavaScript. This generator creates new text based on the statistical properties of an input text, producing varied and mismatched sentences that resemble the style of the training text.
-

-

## Installation

1. **Clone the Repository**

2. **Navigate to the Project Directory**

3. **Open `index.html` in Your Browser**:

   - Double-click the `index.html` file.
   - Or, start a local server and navigate to `localhost`.

## Usage Instructions

1. **Enter Training Text**:

   - Paste your training text into the textarea.
   - For best results, use a substantial amount of text (at least several paragraphs).

2. **Set Parameters**:

   - **Order (n-gram size)**:
     - Set to `2` or `3` for a balance between coherence and variation.
     - Higher orders consider more context but require more input data.
   - **Length (words)**:
     - Specify the number of words you want in the generated text.
     - Typical values range between `50` and `200`.
   - **Randomness (0-1)**:
     - Adjusts the variability of word selection.
     - `0` selects the most probable next word every time (less random).
     - `1` increases randomness, selecting less probable words more often.

3. **Generate Text**:

   - Click the **"Generate Text"** button to produce the output.
   - The generated text will appear in the output div below the controls.


## Limitations

- **Local Coherence**: The generator may produce locally coherent phrases but lack overall coherence.
- **Repetition**: Limited input text can lead to repetitive output.
- **Grammar**: Higher randomness levels may result in grammatical errors.
