# QR Code Generator

This is a simple command-line tool that generates a QR code image from a URL input. The project uses the following Node.js packages: `inquirer` for user input, `qr-image` for generating QR codes, and `fs` for file handling. Once a URL is entered, the application will create a QR code in the form of a PNG file.

## Features

- **Interactive URL Input**: Users can input their URL via a prompt using the `inquirer` package.
- **QR Code Generation**: The application generates a QR code based on the input URL and saves it as a `QRImage.png` file using `qr-image`.
- **Synchronous and Asynchronous Support**: In addition to streaming the QR code directly to a file, a synchronous QR code string is logged to the console.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/junaidshaik2600/jsProjects/tree/main/QR_Code_Generator
    ```

2. Navigate to the project directory:
    ```bash
    cd qrcode-generator
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

Run the script using Node.js:
```bash
node index.js
```

When prompted, enter the URL you'd like to convert into a QR code. The QR code will be saved in the project directory as `QRImage.png`.

## Example

```bash
Type in Your URL: https://www.example.com
```

After entering the URL, the application will generate the QR code image and store it in the current directory.

## Dependencies

This project uses the following Node.js modules:

- `inquirer`: For interactive command-line input.
- `qr-image`: For generating QR code images.
- `fs`: For file system operations.

## Error Handling

The script includes basic error handling:

- If the prompt fails to render (for example, due to an unsupported environment), the error will be captured and handled accordingly.
