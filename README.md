# Tauri + Vanilla

This pomodoro timer was created using Tauri(2.0.0-beta.2) in vanilla HTML, CSS and Javascript.

### Prerequisites

- Rust: [Installation Guide](https://www.rust-lang.org/tools/install)
- Tauri: [Setup Instructions](https://tauri.app/v1/guides/getting-started/prerequisites)
- npm: [Installation Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- npx: [Installation Guide](https://www.npmjs.com/package/npx)

### Running the project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ichi0915/pomodoro-tauri
   ```

2. **Run the Development Server**

   ```bash
   npm run tauri dev
   ```

3. **Run the Tailwind Watcher service**

   ```bash
   npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
   ```
